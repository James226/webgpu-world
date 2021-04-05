import { mat4, vec3 } from 'gl-matrix';
import glslCompiler from '@webgpu/glslang/dist/web-devel-onefile/glslang';
import VertexShader from './vertex.glsl';
import FragmentShader from './fragment.glsl';
import ComputeShader from './compute-materials.glsl';
import ComputeCorners from './compute-corners.glsl';
import ComputePositions from './compute-positions.glsl';
import ComputeVoxels from './compute-voxels.glsl';
import Random from 'seedrandom';
import ContourCells from './contouring';
import ConstructOctree from './octree';

async function init(canvas) {
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter.requestDevice();
  const glslang = await glslCompiler();

  const aspect = Math.abs(canvas.width / canvas.height);
  const projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);

  const swapChainFormat = 'bgra8unorm';

  const context = canvas.getContext('gpupresent');
  const swapChain = context.configureSwapChain({
    device,
    format: swapChainFormat,
  });

  const pipeline = device.createRenderPipeline({
    vertex: {
      module: 
          device.createShaderModule({
            code: glslang.compileGLSL(VertexShader, 'vertex'),
          }),
      buffers: [
        {
          arrayStride: 4 * 10,
          attributes: [
            {
              // position
              shaderLocation: 0,
              offset: 0,
              format: 'float32x4',
            },
            {
              // color
              shaderLocation: 1,
              offset: 4 * 4,
              format: 'float32x4',
            },
          ],
        },
      ],
      entryPoint: 'main',
    },
    fragment: {
      module: 
          device.createShaderModule({
            code: glslang.compileGLSL(FragmentShader, 'fragment')
          }),
      entryPoint: 'main',
      targets: [
        {
          format: swapChainFormat,
        },
      ]
    },

    primitive: {
      topology: 'triangle-list',
      cullMode: 'back',
    }
  });

  const cubeVertexArray = new Float32Array([
    1, -1, 1, 1,   1, 0, 1, 1,  1, 1,
    -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,
    -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,
    1, -1, -1, 1,  1, 0, 0, 1,  1, 0,
    1, -1, 1, 1,   1, 0, 1, 1,  1, 1,
    -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,
  
    1, 1, 1, 1,    1, 1, 1, 1,  1, 1,
    1, -1, 1, 1,   1, 0, 1, 1,  0, 1,
    1, -1, -1, 1,  1, 0, 0, 1,  0, 0,
    1, 1, -1, 1,   1, 1, 0, 1,  1, 0,
    1, 1, 1, 1,    1, 1, 1, 1,  1, 1,
    1, -1, -1, 1,  1, 0, 0, 1,  0, 0,
  
    -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,
    1, 1, 1, 1,    1, 1, 1, 1,  0, 1,
    1, 1, -1, 1,   1, 1, 0, 1,  0, 0,
    -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,
    -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,
    1, 1, -1, 1,   1, 1, 0, 1,  0, 0,
  
    -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,
    -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,
    -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,
    -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,
    -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,
    -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,
  
    1, 1, 1, 1,    1, 1, 1, 1,  1, 1,
    -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,
    -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,
    -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,
    1, -1, 1, 1,   1, 0, 1, 1,  1, 0,
    1, 1, 1, 1,    1, 1, 1, 1,  1, 1,
  
    1, -1, -1, 1,  1, 0, 0, 1,  1, 1,
    -1, -1, -1, 1, 0, 0, 0, 1,  0, 1,
    -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,
    1, 1, -1, 1,   1, 1, 0, 1,  1, 0,
    1, -1, -1, 1,  1, 0, 0, 1,  1, 1,
    -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,
   ]);

  let vertexBuffer = device.createBuffer({
    size: cubeVertexArray.byteLength,
    usage: GPUBufferUsage.VERTEX,
    mappedAtCreation: true,
  });
  new Float32Array(vertexBuffer.getMappedRange()).set(cubeVertexArray);
  vertexBuffer.unmap();

  let indexCount = 12 * 3;
  let indexBuffer = device.createBuffer({
    size: indexCount * Uint16Array.BYTES_PER_ELEMENT,
    usage: GPUBufferUsage.INDEX,
    mappedAtCreation: true,
  });
  {
    const mapping = new Uint16Array(indexBuffer.getMappedRange());
    mapping.set([
      1,2,3,
      6,5,4,
      7,8,9,
      12,11,11,
      13,14,15,
      16,17,18,
      22,23,24,
      25,26,27,
      28,29,30,
      31,32,33,
    ]);
    indexBuffer.unmap();
  }

  const uniformBufferSize = 4 * 16; // 4x4 matrix

  const uniformBuffer = device.createBuffer({
    size: uniformBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  const uniformBindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {
        binding: 0,
        resource: {
          buffer: uniformBuffer,
        },
      },
    ],
  });

  const computePipeline = device.createComputePipeline({
    computeStage: {
      module: device.createShaderModule({
            code: glslang.compileGLSL(ComputeShader, 'compute'),
          }),
      entryPoint: 'main',
    },
  });

  const computeCornersPipeline = device.createComputePipeline({
    computeStage: {
      module: device.createShaderModule({
            code: glslang.compileGLSL(ComputeCorners, 'compute'),
          }),
      entryPoint: 'main',
    },
  });

  const initialParticleData = new Uint32Array(33*33*33);
  const particleBuffers = device.createBuffer({
    size: initialParticleData.byteLength,
    usage: GPUBufferUsage.STORAGE,
    mappedAtCreation: false,
  });

  const voxelMaterialsBuffer = device.createBuffer({
    size: Uint32Array.BYTES_PER_ELEMENT * 32 * 32 * 32,
    usage: GPUBufferUsage.STORAGE,
    mappedAtCreation: false,
  });

  const cornerIndexBuffer = device.createBuffer({
    size: Uint32Array.BYTES_PER_ELEMENT + Uint32Array.BYTES_PER_ELEMENT * 32 * 32 * 32,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
    mappedAtCreation: false,
  });

  const gpuReadBuffer = device.createBuffer({
    size: Uint32Array.BYTES_PER_ELEMENT,
    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
  });

  const permutations = new Int32Array(512);

  var random = new Random(6452);
  for (let i = 0; i < 256; i++)
    permutations[i] = (256 * (random()));

  for (let i = 256; i < 512; i++)
    permutations[i] = permutations[i - 256];

  const permutationsBuffer = device.createBuffer({
    size: permutations.byteLength,
    usage: GPUBufferUsage.STORAGE,
    mappedAtCreation: true,
  });

  new Int32Array(permutationsBuffer.getMappedRange()).set(
    permutations
  );
  permutationsBuffer.unmap();

  const computeBindGroup = device.createBindGroup({
    layout: computePipeline.getBindGroupLayout(0),
    entries: [
      {
        binding: 0,
        resource: {
          buffer: permutationsBuffer
        },
      },
      {
        binding: 1,
        resource: {
          buffer: particleBuffers
        },
      }
    ]
  });
  
  const computeCornersBindGroup = device.createBindGroup({
    layout: computeCornersPipeline.getBindGroupLayout(0),
    entries: [
      {
        binding: 1,
        resource: {
          buffer: particleBuffers
        },
      },
      {
        binding: 2,
        resource: {
          buffer: voxelMaterialsBuffer
        },
      }
    ]
  });

  const computePositionsPipeline = device.createComputePipeline({
    computeStage: {
      module: device.createShaderModule({
            code: glslang.compileGLSL(ComputePositions, 'compute'),
          }),
      entryPoint: 'main',
    },
  });

  const computePositionsBindGroup = device.createBindGroup({
    layout: computePositionsPipeline.getBindGroupLayout(0),
    entries: [
      {
        binding: 2,
        resource: {
          buffer: voxelMaterialsBuffer
        },
      },
      {
        binding: 3,
        resource: {
          buffer: cornerIndexBuffer
        },
      }
    ]
  });

  const voxelsBuffer = device.createBuffer({
    size: Float32Array.BYTES_PER_ELEMENT * 12 * 32 * 32 * 32,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
    mappedAtCreation: false,
  });

  const computeVoxelsPipeline = device.createComputePipeline({
    computeStage: {
      module: device.createShaderModule({
            code: glslang.compileGLSL(ComputeVoxels, 'compute'),
          }),
      entryPoint: 'main',
    },
  });

  const computeVoxelsBindGroup = device.createBindGroup({
    layout: computeVoxelsPipeline.getBindGroupLayout(0),
    entries: [
      {
        binding: 0,
        resource: {
          buffer: permutationsBuffer
        },
      },
      {
        binding: 2,
        resource: {
          buffer: voxelMaterialsBuffer
        },
      },
      {
        binding: 3,
        resource: {
          buffer: cornerIndexBuffer
        },
      },
      {
        binding: 4,
        resource: {
          buffer: voxelsBuffer
        },
      }
    ]
  });

  const voxelReadBuffer = device.createBuffer({
    size: Float32Array.BYTES_PER_ELEMENT * 12 * 32 * 32 * 32,
    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
  });

  function getTransformationMatrix() {
    const viewMatrix = mat4.create();
    mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(-16, -16, -64));
    const now = Date.now() / 1000;
    mat4.rotate(
      viewMatrix,
      viewMatrix,
      1,
      vec3.fromValues(Math.sin(now), Math.cos(now), 0)
    );

    const modelViewProjectionMatrix = mat4.create();
    mat4.multiply(modelViewProjectionMatrix, projectionMatrix, viewMatrix);

    return modelViewProjectionMatrix;
  }

  const generateVertexIndices = (node, vertices, normals, nodeSize) => {
    if (node == null)
      return;
  
    if (node.size > nodeSize) {
      if (node.type != 'leaf') {
        for (let i = 0; i < 8; i++) {
          generateVertexIndices(node.children[i], vertices, normals, nodeSize);
        }
      }
    }
  
    if (node.type != 'internal') {
      const d = node.drawInfo;
      if (d == null) {
        throw "Error! Could not add vertex!";
      }
  
      d.index = vertices.length / 3;
      vertices.push(d.position[0], d.position[1], d.position[2]);
      normals.push(d.averageNormal[0], d.averageNormal[1], d.averageNormal[2]);
    }
  }

  const computeVoxels = (position, voxelCount, computedVoxelsData) => {
    const computedVoxels = [];

    if (voxelCount == 0) {
      return;
    }
  
      for (let i = 0; i < voxelCount * 12; i += 12) {
        if (computedVoxelsData[i + 11] != 0) {
          const leaf = {
            type: 'leaf',
            size: 1,
            min: vec3.fromValues(computedVoxelsData[i], computedVoxelsData[i + 1], computedVoxelsData[i + 2]),
            drawInfo: {
              position: vec3.fromValues(computedVoxelsData[i + 4], computedVoxelsData[i + 5], computedVoxelsData[i + 6]),
              averageNormal: vec3.fromValues(computedVoxelsData[i + 8], computedVoxelsData[i + 9], computedVoxelsData[i + 10]),
              corners: computedVoxelsData[i + 3]
            }
          };
          computedVoxels.push(leaf);
        }
      }
  
      const tree = ConstructOctree(computedVoxels, position, 32);
  
  
    const vertices = [];
    const normals = [];
  
    generateVertexIndices(tree, vertices, normals, 1);
  
    const indices = [];
    ContourCells(tree, indices);

    const newVertexBuffer = device.createBuffer({
      size: vertices.length * 10 * Float32Array.BYTES_PER_ELEMENT,
      usage: GPUBufferUsage.VERTEX,
      mappedAtCreation: true,
    });
    const mapping = new Float32Array(newVertexBuffer.getMappedRange());
    for (let i = 0; i < vertices.length; i+=3) {
      mapping.set(vertices.slice(i, i + 3), (i / 3) * 10);
      mapping.set([1], (i / 3) * 10 + 3);
      mapping.set(normals.slice(i, i + 3), (i / 3) * 10 + 4);
      mapping.set([1], (i / 3) * 10 + 8);
      //mapping.set([1, 1, 0, 1, 1], (i / 3) * 10 + 3);
    }
    newVertexBuffer.unmap();

    const newIndexBuffer = device.createBuffer({
      size: indices.length * Uint16Array.BYTES_PER_ELEMENT,
      usage: GPUBufferUsage.INDEX,
      mappedAtCreation: true,
    });
    const indexMapping = new Uint16Array(newIndexBuffer.getMappedRange());
    indexMapping.set(indices);

    newIndexBuffer.unmap();

    
    const oldVertexBuffer = vertexBuffer;
    vertexBuffer = newVertexBuffer;

    const oldIndexBuffer = indexBuffer;
    indexBuffer = newIndexBuffer;

    oldVertexBuffer.destroy();
    oldIndexBuffer.destroy();

    indexCount = indices.length
  }

  const queue = [];

  const computeEncoder = device.createCommandEncoder();
  const octreeSize = 32;
  const computePassEncoder = computeEncoder.beginComputePass();
  computePassEncoder.setPipeline(computePipeline);
  computePassEncoder.setBindGroup(0, computeBindGroup);
  computePassEncoder.dispatch(octreeSize + 1, octreeSize + 1, octreeSize + 1);
  computePassEncoder.endPass();

  const computeCornersPass = computeEncoder.beginComputePass();
  computeCornersPass.setPipeline(computeCornersPipeline);
  computeCornersPass.setBindGroup(0, computeCornersBindGroup);
  computeCornersPass.dispatch(octreeSize, octreeSize, octreeSize);
  computeCornersPass.endPass();

  const computePositionsPass = computeEncoder.beginComputePass();
  computePositionsPass.setPipeline(computePositionsPipeline);
  computePositionsPass.setBindGroup(0, computePositionsBindGroup);
  computePositionsPass.dispatch(1);
  computePositionsPass.endPass();

  const copyEncoder = device.createCommandEncoder();
  copyEncoder.copyBufferToBuffer(
    cornerIndexBuffer,
    0,
    gpuReadBuffer,
    0,
    Uint32Array.BYTES_PER_ELEMENT
  );

  queue.push({
    items: [computeEncoder.finish(), copyEncoder.finish()],
    callback: () => {
      console.log('callback 1');
      gpuReadBuffer.mapAsync(GPUMapMode.READ).then(() => {
        const arrayBuffer = gpuReadBuffer.getMappedRange();
        const voxelCount = new Uint32Array(arrayBuffer)[0];
        console.log("Voxel Count: ", voxelCount);
        gpuReadBuffer.unmap();
  
        const dispatchCount = Math.ceil(voxelCount / 128);
        const computeEncoder = device.createCommandEncoder();
        const computePassEncoder = computeEncoder.beginComputePass();
        computePassEncoder.setPipeline(computeVoxelsPipeline);
        computePassEncoder.setBindGroup(0, computeVoxelsBindGroup);
        computePassEncoder.dispatch(dispatchCount);
        computePassEncoder.endPass();
  
        const copyEncoder = device.createCommandEncoder();
        copyEncoder.copyBufferToBuffer(
          voxelsBuffer,
          0,
          voxelReadBuffer,
          0,
          Float32Array.BYTES_PER_ELEMENT * voxelCount * 12
        );
  
        queue.push({
          items: [computeEncoder.finish(), copyEncoder.finish()],
          callback: () => {
            console.log('callback 2');

            voxelReadBuffer.mapAsync(GPUMapMode.READ).then(() => {
              const arrayBuffer = voxelReadBuffer.getMappedRange();
              const computedVoxelsData = new Float32Array(arrayBuffer);
              computeVoxels(vec3.fromValues(0, 0, 0),  voxelCount, computedVoxelsData);

              voxelReadBuffer.unmap();

              return;


            });
          }
        });
      });
    }
  });
  
  const frame = (timestamp) => {
    const commandEncoder = device.createCommandEncoder();
    const textureView = swapChain.getCurrentTexture().createView();

    const renderPassDescriptor = {
      colorAttachments: [
        {
          attachment: textureView,
          loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
        },
      ],
    };

    const transformationMatrix = getTransformationMatrix();
    device.queue.writeBuffer(
      uniformBuffer,
      0,
      transformationMatrix.buffer,
      transformationMatrix.byteOffset,
      transformationMatrix.byteLength
    );


    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.setBindGroup(0, uniformBindGroup);
    passEncoder.setVertexBuffer(0, vertexBuffer);
    passEncoder.setIndexBuffer(indexBuffer, 'uint16');
    passEncoder.drawIndexed(indexCount);
    passEncoder.endPass();

    

    const item = queue.shift();
    

    device.queue.onSubmittedWorkDone().then(e => {
      if (item) {
        item.callback();
      }
    })
    
    if (item) {
      device.queue.submit([commandEncoder.finish(), ...item.items]);
    } else {
      device.queue.submit([commandEncoder.finish()]);
    }
  }

  return frame;
}

const canvas = document.getElementById('canvas');

init(canvas).then((frame) => {
    const doFrame = (timestamp) => {
        frame(timestamp);
        requestAnimationFrame(doFrame);
      };
      requestAnimationFrame(doFrame);
});