import {vec3, vec4} from 'gl-matrix';
import ComputeCorners from '!!raw-loader!./compute-corners.wgsl';
import ComputePositions from '!!raw-loader!./compute-positions.wgsl';
import ComputeVoxels from '!!raw-loader!./compute-voxels.wgsl';
import Density from '!!raw-loader!./density.wgsl';

import Random from 'seedrandom';
import ContourCells from './contouring';
import ConstructOctree from './octree';

const generateVertexIndices = (node, vertices, normals, nodeSize) => {
  if (node == null)
    return;

  if (node.size > nodeSize) {
    if (node.type !== 'leaf') {
      for (let i = 0; i < 8; i++) {
        generateVertexIndices(node.children[i], vertices, normals, nodeSize);
      }
    }
  }

  if (node.type !== 'internal') {
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

  if (voxelCount === 0) {
    return { vertices: [], normals: [], indices: [] };
  }

  for (let i = 0; i < voxelCount * 12; i += 12) {
    if (computedVoxelsData[i + 11] !== 0) {
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
  public running: boolean;

  private computePipeline: GPUComputePipeline;
  private computeCornersPipeline: GPUComputePipeline;
  private uniformBuffer: GPUBuffer;
  private cornerMaterials: GPUBuffer;
  private cornerMaterialsRead: GPUBuffer;
  private voxelMaterialsBuffer: GPUBuffer;
  private voxelMaterialsBufferRead: GPUBuffer;
  private cornerIndexBuffer: GPUBuffer;
  private gpuReadBuffer: GPUBuffer;
  private permutationsBuffer: GPUBuffer;
  private voxelsBuffer: GPUBuffer;
  private actorsBuffer: GPUBuffer;
  private computeBindGroup: GPUBindGroup;
  private computeCornersBindGroup: GPUBindGroup;
  private computePositionsPipeline: GPUComputePipeline;
  private computePositionsBindGroup: GPUBindGroup;
  private computeVoxelsPipeline: GPUComputePipeline;
  private computeVoxelsBindGroup: GPUBindGroup;
  private voxelReadBuffer: GPUBuffer;
  private augmentationBuffer: GPUBuffer;
  private densityBindGroup: GPUBindGroup;
  private mainDensityBindGroup: GPUBindGroup;

  async init(device: GPUDevice) {
    const computeVoxelsCode = ComputeVoxels.replace("#import density", Density);
    const start = performance.now();
    console.log('Start loading voxel engine', performance.now() - start);

    const module = device.createShaderModule({
      code: computeVoxelsCode,
    });

    this.computePipeline = await device.createComputePipelineAsync({
      layout: 'auto',
      compute: {
        module,
        entryPoint: 'computeMaterials',
      },
    });

    //console.log('10', performance.now() - start);

    this.computeCornersPipeline = await device.createComputePipelineAsync({
      layout: 'auto',
      compute: {
        module: device.createShaderModule({
          code: ComputeCorners
        }),
        entryPoint: 'main',
      },
    });

    const uniformBufferSize = 4 * 5;
    this.uniformBuffer = device.createBuffer({
      size: uniformBufferSize,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    this.cornerMaterials = device.createBuffer({
      size: Uint32Array.BYTES_PER_ELEMENT * 33 * 33 * 33,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
      mappedAtCreation: false,
    });



    this.cornerMaterialsRead = device.createBuffer({
      size: Uint32Array.BYTES_PER_ELEMENT * 33 * 33 * 33,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
    });

    this.voxelMaterialsBuffer = device.createBuffer({
      size: Uint32Array.BYTES_PER_ELEMENT * 32 * 32 * 32,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
      mappedAtCreation: false,
    });

    this.voxelMaterialsBufferRead = device.createBuffer({
      size: Uint32Array.BYTES_PER_ELEMENT * 32 * 32 * 32,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
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

    const random = new Random(6452);
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



    this.voxelsBuffer = device.createBuffer({
      size: Float32Array.BYTES_PER_ELEMENT * 12 * 32 * 32 * 32,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
      mappedAtCreation: false,
    });


    this.actorsBuffer = device.createBuffer({
      size: Float32Array.BYTES_PER_ELEMENT * 8,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
      mappedAtCreation: false,
    });

    //console.log('20', performance.now() - start);

    this.computeBindGroup = device.createBindGroup({
      layout: this.computePipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 1,
          resource: {
            buffer: this.cornerMaterials
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

    //console.log('21', performance.now() - start);

    this.computeCornersBindGroup = device.createBindGroup({
      layout: this.computeCornersPipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 1,
          resource: {
            buffer: this.cornerMaterials
          },
        },
        {
          binding: 2,
          resource: {
            buffer: this.voxelMaterialsBuffer
          },
        }
      ]
    });

    this.computePositionsPipeline = await device.createComputePipelineAsync({
      layout: 'auto',
      compute: {
        module: device.createShaderModule({
          code: ComputePositions,
        }),
        entryPoint: 'main',
      },
    });

    //console.log('30', performance.now() - start);


    this.computePositionsBindGroup = device.createBindGroup({
      layout: this.computePositionsPipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 2,
          resource: {
            buffer: this.voxelMaterialsBuffer
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

    //console.log('31', performance.now() - start);

    //console.log('31.5', performance.now() - start);
    this.computeVoxelsPipeline = await device.createComputePipelineAsync({
      layout: 'auto',
      compute: {
        module,
        entryPoint: 'main',
      }
    });

    //console.log('32', performance.now() - start);


    this.computeVoxelsBindGroup = device.createBindGroup({
      layout: this.computeVoxelsPipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 2,
          resource: {
            buffer: this.voxelMaterialsBuffer
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

    //console.log('40', performance.now() - start);


    this.voxelReadBuffer = device.createBuffer({
      size: Float32Array.BYTES_PER_ELEMENT * 12 * 32 * 32 * 32,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
    });

    const augmentationSize = 4 * 4 + 4 * 4;
    this.augmentationBuffer = device.createBuffer({
      size: augmentationSize,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
      mappedAtCreation: true
    });

    const augmentations = new Float32Array(this.augmentationBuffer.getMappedRange());
    augmentations[0] = 2200000.0;

    this.augmentationBuffer.unmap();

    this.densityBindGroup = device.createBindGroup({
      layout: this.computePipeline.getBindGroupLayout(1),
      entries: [
        {
          binding: 0,
          resource: {
            buffer: this.augmentationBuffer,
          },
        },
      ],
    });

    this.mainDensityBindGroup = device.createBindGroup({
      layout: this.computeVoxelsPipeline.getBindGroupLayout(1),
      entries: [
        {
          binding: 0,
          resource: {
            buffer: this.augmentationBuffer,
          },
        },
      ],
    });

    console.log('Done', performance.now() - start);
  }

  generate(device, queue, position, stride) : Promise<any> {
    if (!stride) stride = 1;

    return new Promise((resolve, _) => {

      const permutations = new Int32Array(512);

      const random = new Random('James');
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

      var buffer = new ArrayBuffer(4 * 5);
      const uniform = new Float32Array(buffer, 0, 4);
      uniform.set(position, 0);
      uniform[3] = stride;

      new Uint32Array(buffer, 16, 1)[0] = 33;

      device.queue.writeBuffer(
          this.uniformBuffer,
          0,
          buffer,
          0,
          buffer.byteLength
      );

      const computeEncoder = device.createCommandEncoder();
      const octreeSize = 32;
      const computePassEncoder = computeEncoder.beginComputePass();
      computePassEncoder.setPipeline(this.computePipeline);
      computePassEncoder.setBindGroup(0, this.computeBindGroup);
      computePassEncoder.setBindGroup(1, this.densityBindGroup);
      computePassEncoder.dispatchWorkgroups(octreeSize + 1, octreeSize + 1, octreeSize + 1);
      computePassEncoder.end();

      const computeCornersPass = computeEncoder.beginComputePass();
      computeCornersPass.setPipeline(this.computeCornersPipeline);
      computeCornersPass.setBindGroup(0, this.computeCornersBindGroup);
      computeCornersPass.dispatchWorkgroups(octreeSize, octreeSize, octreeSize);
      computeCornersPass.end();

      const computePositionsPass = computeEncoder.beginComputePass();
      computePositionsPass.setPipeline(this.computePositionsPipeline);
      computePositionsPass.setBindGroup(0, this.computePositionsBindGroup);
      computePositionsPass.dispatchWorkgroups(1);
      computePositionsPass.end();

      const copyEncoder = device.createCommandEncoder();
      copyEncoder.copyBufferToBuffer(
          this.cornerIndexBuffer,
          0,
          this.gpuReadBuffer,
          0,
          Uint32Array.BYTES_PER_ELEMENT
      );

      copyEncoder.copyBufferToBuffer(
          this.cornerMaterials,
          0,
          this.cornerMaterialsRead,
          0,
          Uint32Array.BYTES_PER_ELEMENT * 33 * 33 * 33
      );

      copyEncoder.copyBufferToBuffer(
          this.voxelMaterialsBuffer,
          0,
          this.voxelMaterialsBufferRead,
          0,
          Uint32Array.BYTES_PER_ELEMENT * 32 * 32 * 32
      );

      queue({
        items: [computeEncoder.finish(), copyEncoder.finish()],
        callback: async () => {
          await this.cornerMaterialsRead.mapAsync(GPUMapMode.READ);
          const corners = new Uint32Array(this.cornerMaterialsRead.getMappedRange()).slice();
          this.cornerMaterialsRead.unmap();

          await this.gpuReadBuffer.mapAsync(GPUMapMode.READ);

          const arrayBuffer = this.gpuReadBuffer.getMappedRange();
          const voxelCount = new Uint32Array(arrayBuffer)[0];
          this.gpuReadBuffer.unmap();

          if (voxelCount === 0) {
            resolve({vertices: new Float32Array(), normals: new Float32Array(), indices: new Uint16Array(), corners: new Uint32Array()});
            return;
          }

          const dispatchCount = Math.ceil(voxelCount / 128);
          const computeEncoder = device.createCommandEncoder();
          const computePassEncoder = computeEncoder.beginComputePass();
          computePassEncoder.setPipeline(this.computeVoxelsPipeline);
          computePassEncoder.setBindGroup(0, this.computeVoxelsBindGroup);
          computePassEncoder.setBindGroup(1, this.mainDensityBindGroup);
          computePassEncoder.dispatchWorkgroups(dispatchCount);
          computePassEncoder.end();

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
            callback: async () => {

              await this.voxelReadBuffer.mapAsync(GPUMapMode.READ);

              const arrayBuffer = this.voxelReadBuffer.getMappedRange();
              const computedVoxelsData = new Float32Array(arrayBuffer);
              const result = computeVoxels(position, stride, voxelCount, computedVoxelsData);

              this.voxelReadBuffer.unmap();

              resolve({...result, corners});
            }
          });
        }
      });
    });
  }
}