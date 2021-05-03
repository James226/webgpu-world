import { vec3, vec4 } from 'gl-matrix';
import ComputeMaterials from './compute-materials.wgsl';
import ComputeCorners from './compute-corners.wgsl';
import ComputePositions from './compute-positions.wgsl';
import ComputeVoxels from './compute-voxels.wgsl';
import Random from 'seedrandom';
import ContourCells from './contouring';
import ConstructOctree from './octree';

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

const computeVoxels = (position, stride, voxelCount, computedVoxelsData) => {
  const computedVoxels = [];

  if (voxelCount == 0) {
    return { vertices: [], normals: [], indices: [] };
  }

  for (let i = 0; i < voxelCount * 12; i += 12) {
    if (computedVoxelsData[i + 11] != 0) {
      const leaf = {
        type: 'leaf',
        size: stride,
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

  const tree = ConstructOctree(computedVoxels, position, 32 * stride);


  const vertices = [];
  const normals = [];

  generateVertexIndices(tree, vertices, normals, 1);

  const indices = [];
  ContourCells(tree, indices);

  return {
    vertices: new Float32Array(vertices),
    normals: new Float32Array(normals),
    indices: new Uint16Array(indices)
  };
}


export default class Voxel {

  async init(device, queue, glslang) {
    
    this.computePipeline = device.createComputePipeline({
      compute: {
        module: device.createShaderModule({
          code: ComputeMaterials,
        }),
        entryPoint: 'main',
      },
    });

    this.computeCornersPipeline = await device.createComputePipelineAsync({
      compute: {
        module: device.createShaderModule({
          code: ComputeCorners
        }),
        entryPoint: 'main',
      },
    });

    const uniformBufferSize = 4 * 4;
    this.uniformBuffer = device.createBuffer({
      size: uniformBufferSize,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    const particleBuffers = device.createBuffer({
      size: Uint32Array.BYTES_PER_ELEMENT * 33 * 33 * 33,
      usage: GPUBufferUsage.STORAGE,
      mappedAtCreation: false,
    });

    const voxelMaterialsBuffer = device.createBuffer({
      size: Uint32Array.BYTES_PER_ELEMENT * 32 * 32 * 32,
      usage: GPUBufferUsage.STORAGE,
      mappedAtCreation: false,
    });

    this.cornerIndexBuffer = device.createBuffer({
      size: Uint32Array.BYTES_PER_ELEMENT + Uint32Array.BYTES_PER_ELEMENT * 32 * 32 * 32,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
      mappedAtCreation: false,
    });

    this.gpuReadBuffer = device.createBuffer({
      size: Uint32Array.BYTES_PER_ELEMENT,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
    });

    const permutations = new Int32Array(512);

    var random = new Random(6452);
    for (let i = 0; i < 256; i++)
      permutations[i] = (256 * (random()));

    for (let i = 256; i < 512; i++)
      permutations[i] = permutations[i - 256];

    this.permutationsBuffer = device.createBuffer({
      size: permutations.byteLength,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
      mappedAtCreation: true,
    });

    new Int32Array(this.permutationsBuffer.getMappedRange()).set(
      permutations
    );
    this.permutationsBuffer.unmap();

    this.computeBindGroup = device.createBindGroup({
      layout: this.computePipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: {
            buffer: this.permutationsBuffer
          },
        },
        {
          binding: 1,
          resource: {
            buffer: particleBuffers
          },
        },
        {
          binding: 5,
          resource: {
            buffer: this.uniformBuffer
          },
        }
      ]
    });

    this.computeCornersBindGroup = device.createBindGroup({
      layout: this.computeCornersPipeline.getBindGroupLayout(0),
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

    this.computePositionsPipeline = await device.createComputePipelineAsync({
      compute: {
        module: device.createShaderModule({
          code: ComputePositions,
        }),
        entryPoint: 'main',
      },
    });

    this.computePositionsBindGroup = device.createBindGroup({
      layout: this.computePositionsPipeline.getBindGroupLayout(0),
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
            buffer: this.cornerIndexBuffer
          },
        }
      ]
    });

    this.voxelsBuffer = device.createBuffer({
      size: Float32Array.BYTES_PER_ELEMENT * 12 * 32 * 32 * 32,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
      mappedAtCreation: false,
    });

    this.computeVoxelsPipeline = await device.createComputePipelineAsync({
      compute: {
        module: device.createShaderModule({
          code: ComputeVoxels,
        }),
        entryPoint: 'main',
      },
    });

    this.computeVoxelsBindGroup = device.createBindGroup({
      layout: this.computeVoxelsPipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: {
            buffer: this.permutationsBuffer
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
            buffer: this.cornerIndexBuffer
          },
        },
        {
          binding: 4,
          resource: {
            buffer: this.voxelsBuffer
          },
        },
        {
          binding: 5,
          resource: {
            buffer: this.uniformBuffer
          },
        }
      ]
    });

    this.voxelReadBuffer = device.createBuffer({
      size: Float32Array.BYTES_PER_ELEMENT * 12 * 32 * 32 * 32,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
    });
  }

  generate(device, queue, position, stride) {
    if (!stride) stride = 1;

    const promise = new Promise((resolve, reject) => {

      const permutations = new Int32Array(512);

      var random = new Random('James');
      for (let i = 0; i < 256; i++)
        permutations[i] = (256 * (random()));

      for (let i = 256; i < 512; i++)
        permutations[i] = permutations[i - 256];

      device.queue.writeBuffer(
        this.permutationsBuffer,
        0,
        permutations.buffer,
        permutations.byteOffset,
        permutations.byteLength
      );

      const uniform = vec4.fromValues(position[0], position[1], position[2], stride);
      device.queue.writeBuffer(
        this.uniformBuffer,
        0,
        uniform.buffer,
        uniform.byteOffset,
        uniform.byteLength
      );

      const computeEncoder = device.createCommandEncoder();
      const octreeSize = 32;
      const computePassEncoder = computeEncoder.beginComputePass();
      computePassEncoder.setPipeline(this.computePipeline);
      computePassEncoder.setBindGroup(0, this.computeBindGroup);
      computePassEncoder.dispatch(octreeSize + 1, octreeSize + 1, octreeSize + 1);
      computePassEncoder.endPass();

      const computeCornersPass = computeEncoder.beginComputePass();
      computeCornersPass.setPipeline(this.computeCornersPipeline);
      computeCornersPass.setBindGroup(0, this.computeCornersBindGroup);
      computeCornersPass.dispatch(octreeSize, octreeSize, octreeSize);
      computeCornersPass.endPass();

      const computePositionsPass = computeEncoder.beginComputePass();
      computePositionsPass.setPipeline(this.computePositionsPipeline);
      computePositionsPass.setBindGroup(0, this.computePositionsBindGroup);
      computePositionsPass.dispatch(1);
      computePositionsPass.endPass();

      const copyEncoder = device.createCommandEncoder();
      copyEncoder.copyBufferToBuffer(
        this.cornerIndexBuffer,
        0,
        this.gpuReadBuffer,
        0,
        Uint32Array.BYTES_PER_ELEMENT
      );

      queue({
        items: [computeEncoder.finish(), copyEncoder.finish()],
        callback: () => {
          this.gpuReadBuffer.mapAsync(GPUMapMode.READ).then(() => {

            const arrayBuffer = this.gpuReadBuffer.getMappedRange();
            const voxelCount = new Uint32Array(arrayBuffer)[0];
            console.log('Voxel count', voxelCount);
            this.gpuReadBuffer.unmap();

            if (voxelCount === 0) {
              resolve({ vertices: new Float32Array(), normals: new Float32Array(), indices: new Uint16Array()});
              return;
            }

            const dispatchCount = Math.ceil(voxelCount / 128);
            const computeEncoder = device.createCommandEncoder();
            const computePassEncoder = computeEncoder.beginComputePass();
            computePassEncoder.setPipeline(this.computeVoxelsPipeline);
            computePassEncoder.setBindGroup(0, this.computeVoxelsBindGroup);
            computePassEncoder.dispatch(dispatchCount);
            computePassEncoder.endPass();

            const copyEncoder = device.createCommandEncoder();
            copyEncoder.copyBufferToBuffer(
              this.voxelsBuffer,
              0,
              this.voxelReadBuffer,
              0,
              Float32Array.BYTES_PER_ELEMENT * voxelCount * 12
            );


            queue({
              items: [computeEncoder.finish(), copyEncoder.finish()],
              callback: () => {

                this.voxelReadBuffer.mapAsync(GPUMapMode.READ).then(() => {

                  const arrayBuffer = this.voxelReadBuffer.getMappedRange();
                  const computedVoxelsData = new Float32Array(arrayBuffer);
                  const result = computeVoxels(position, stride, voxelCount, computedVoxelsData);

                  this.voxelReadBuffer.unmap();

                  resolve(result);
                });
              }
            });
          });
        }
      });
    });

    return promise;
  }
}