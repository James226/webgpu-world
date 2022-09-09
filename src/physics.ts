import { vec3, vec4 } from 'gl-matrix';
import Physics from '!!raw-loader!./physics.wgsl';
import Density from '!!raw-loader!./density.wgsl';

import Random from 'seedrandom';

export default class Voxel {
  velocity: vec3;
  position: vec4;
  private computePipeline: GPUComputePipeline;
  private uniformBuffer: GPUBuffer;
  private permutationsBuffer: GPUBuffer;
  private actorsBuffer: GPUBuffer;
  private computeBindGroup: GPUBindGroup;
  private actorsReadBuffer: GPUBuffer;
  private running: boolean;

  async init(device: GPUDevice) {
    const physics = Physics.replace("#import density", Density);

    this.velocity = vec3.fromValues(0,0,0);
    this.position = vec4.fromValues(2000000, 0, 0, 0);
    const start = performance.now();
    console.log('Loading physics engine');
    this.computePipeline = await device.createComputePipelineAsync({
      layout: 'auto',
      compute: {
        module: device.createShaderModule({
          code: physics,
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

    const random = new Random('James');
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

    const actors = new Float32Array(this.actorsBuffer.getMappedRange());
    actors.set(this.position);
    this.actorsBuffer.unmap();

    this.computeBindGroup = device.createBindGroup({
      layout: this.computePipeline.getBindGroupLayout(0),
      entries: [
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
          (<Float32Array>this.velocity).buffer
      );

      const computeEncoder = device.createCommandEncoder();
      const computePassEncoder = computeEncoder.beginComputePass();
      computePassEncoder.setPipeline(this.computePipeline);
      computePassEncoder.setBindGroup(0, this.computeBindGroup);
      computePassEncoder.dispatchWorkgroups(1);
      computePassEncoder.end();

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
            (<Float32Array>this.position).set([result[0], result[1], result[2]]);
            //this.position.set(new Float32Array(buffer, 0, 3));
            this.actorsReadBuffer.unmap();
            resolve(null);
          });
        }
      });
    });
  }

  async update(device, queue): Promise<void> {
    if (this.running) return Promise.resolve();

    this.running = true;
    await this.generate(device, queue);
    this.running = false;
  }
}