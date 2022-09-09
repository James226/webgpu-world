import { vec3 } from 'gl-matrix';
import Ray from '!!raw-loader!./ray.wgsl';
import Density from '!!raw-loader!./density.wgsl';

class Intersection {
    position: vec3;
    normal: vec3;
    distance: number;
}

export default class Raycast {
    private computePipeline: GPUComputePipeline;
    private uniformBuffer: GPUBuffer;
    private intersectionsBuffer: GPUBuffer;
    private computeBindGroup: GPUBindGroup;
    private intersectionsReadBuffer: GPUBuffer;

    async init(device: GPUDevice) {
        this.computePipeline = await device.createComputePipelineAsync({
            layout: 'auto',
            compute: {
                module: device.createShaderModule({
                    code: Ray.replace("#import density", Density),
                }),
                entryPoint: 'main',
            },
        });

        const uniformBufferSize = Float32Array.BYTES_PER_ELEMENT * 8;
        this.uniformBuffer = device.createBuffer({
            size: uniformBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        this.intersectionsBuffer = device.createBuffer({
            size: Float32Array.BYTES_PER_ELEMENT * 8,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST,
            mappedAtCreation: true,
        });

        const actors = new Float32Array(this.intersectionsBuffer.getMappedRange());
        this.intersectionsBuffer.unmap();

        this.computeBindGroup = device.createBindGroup({
            layout: this.computePipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.uniformBuffer
                    },
                },
                {
                    binding: 1,
                    resource: {
                        buffer: this.intersectionsBuffer
                    },
                }
            ]
        });

        this.intersectionsReadBuffer = device.createBuffer({
            size: Float32Array.BYTES_PER_ELEMENT * 8,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        });
    }

    cast(device, queue, position: vec3, direction: vec3): Promise<Intersection> {
        return new Promise((resolve) => {
            device.queue.writeBuffer(
              this.uniformBuffer,
              0,
              (<Float32Array>position).buffer
            );
            device.queue.writeBuffer(
              this.uniformBuffer,
              Float32Array.BYTES_PER_ELEMENT * 4,
              (<Float32Array>direction).buffer
            );

            const computeEncoder = device.createCommandEncoder();
            const computePassEncoder = computeEncoder.beginComputePass();
            computePassEncoder.setPipeline(this.computePipeline);
            computePassEncoder.setBindGroup(0, this.computeBindGroup);
            computePassEncoder.dispatchWorkgroups(1);
            computePassEncoder.end();

            const copyEncoder = device.createCommandEncoder();
            copyEncoder.copyBufferToBuffer(
              this.intersectionsBuffer,
              0,
              this.intersectionsReadBuffer,
              0,
              Float32Array.BYTES_PER_ELEMENT * 8
            );

            queue({
                items: [computeEncoder.finish(), copyEncoder.finish()],
                callback: () => {
                    this.intersectionsReadBuffer.mapAsync(GPUMapMode.READ).then(() => {
                        const buffer = this.intersectionsReadBuffer.getMappedRange();
                        const found = new Uint32Array(buffer, Float32Array.BYTES_PER_ELEMENT * 3, 1);
                        if (found[0] === 0) resolve(null);

                        const result = new Float32Array(buffer);
                        const intersection = new Intersection();
                        intersection.position = vec3.fromValues(result[0], result[1], result[2]);
                        intersection.normal = vec3.fromValues(result[4], result[5], result[6]);
                        intersection.distance = result[7];
                        this.intersectionsReadBuffer.unmap();
                        resolve(intersection);
                    });
                }
            });
        });
    }
}