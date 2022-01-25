import { vec3, vec4 } from 'gl-matrix';
import ComputeVoxels from './compute-voxels.wgsl';

import Random from 'seedrandom';

export default class Voxel {

  async init(device, queue, glslang) {
    this.velocity = vec3.fromValues(0,0,0);
    this.position = vec4.fromValues(0, -203000, 0, 0);
    const start = performance.now();
    console.log('Loading physics engine');
    this.computePipeline = await device.createComputePipelineAsync({
      compute: {
        module: device.createShaderModule({
          code: ComputeVoxels,
        }),
        entryPoint: 'computePhysics',
      },
    });

    const uniformBufferSize = 4 * 4;
    this.uniformBuffer = device.createBuffer({
      size: uniformBufferSize,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
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

    this.actorsBuffer = device.createBuffer({
      size: Float32Array.BYTES_PER_ELEMENT * 8,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST,
      mappedAtCreation: true,
    });

    var actors = new Float32Array(this.actorsBuffer.getMappedRange());
    actors.set(this.position);
    this.actorsBuffer.unmap();

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
          binding: 6,
          resource: {
            buffer: this.actorsBuffer
          },
        }
      ]
    });

    this.actorsReadBuffer = device.createBuffer({
      size: Float32Array.BYTES_PER_ELEMENT * 8,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
    });

    console.log('Physics engine loaded', performance.now() - start);
  }

  generate(device, queue) {
    return new Promise((resolve) => {
      //const uniform = vec4.fromValues(position[0], position[1], position[2], stride);
      device.queue.writeBuffer(
        this.actorsBuffer,
        Float32Array.BYTES_PER_ELEMENT * 4,
        this.velocity.buffer
      );

      const computeEncoder = device.createCommandEncoder();
      const computePassEncoder = computeEncoder.beginComputePass();
      computePassEncoder.setPipeline(this.computePipeline);
      computePassEncoder.setBindGroup(0, this.computeBindGroup);
      computePassEncoder.dispatch(1);
      computePassEncoder.endPass();

      const copyEncoder = device.createCommandEncoder();
      copyEncoder.copyBufferToBuffer(
        this.actorsBuffer,
        0,
        this.actorsReadBuffer,
        0,
        Float32Array.BYTES_PER_ELEMENT * 8
      );

      queue({
        items: [computeEncoder.finish(), copyEncoder.finish()],
        callback: () => {
          this.actorsReadBuffer.mapAsync(GPUMapMode.READ).then(() => {
            const buffer = this.actorsReadBuffer.getMappedRange();
            const result = new Float32Array(buffer);
            this.position.set([result[0], result[1], result[2]]);
            //this.position.set(new Float32Array(buffer, 0, 3));
            this.actorsReadBuffer.unmap();
            resolve();
          });
        }
      });
    });
  }

  update(device, queue) {
    if (this.running) return;

    this.running = true;
    this.generate(device, queue)
    .then(() => {
      this.running = false;
    });
  }
}