import VertexShader from '!!raw-loader!./vertex.wgsl';
import FragmentShader from '!!raw-loader!./fragment.wgsl';
import { vec3 } from 'gl-matrix';
import VoxelObject from './voxel-object';
import Density from '!!raw-loader!./density.wgsl';


const swapChainFormat = 'bgra8unorm';

export default class VoxelCollection {
  public readonly objects: Map<any, VoxelObject>;
  private readonly pool: VoxelObject[];
  private uniformBindGroup: GPUBindGroup;
  private pipeline: GPURenderPipeline;
  private uniformBuffer: GPUBuffer;

  constructor(objects: Map<any, VoxelObject> = new Map<any, VoxelObject>()) {
    this.objects = objects;
    this.pool = [];
  }


  async init(device) {
  const uniformLayout = device.createBindGroupLayout({
    entries: [
      {
        // Transform
        binding: 0,
        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
        buffer: {
          type: 'uniform',
        },
      },
      {
        binding: 1,
        visibility: GPUShaderStage.FRAGMENT,
        buffer: {
          type: 'read-only-storage',
        },
      },
    ],
  });

    const pipelineLayout = device.createPipelineLayout({
      bindGroupLayouts: [uniformLayout],
    });

    const buildPipeline = () => {
      this.pipeline = device.createRenderPipeline({
        layout: pipelineLayout,

        vertex: {
          module:
              device.createShaderModule({
                code: VertexShader,
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
                code: FragmentShader.replace("%GET_DENSITY%", Density)
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
        },
        depthStencil: {
          depthWriteEnabled: true,
          depthCompare: 'less',
          format: 'depth24plus-stencil8',
        },
      });
    };

    buildPipeline();

    if (module.hot) {
      module.hot.accept(['./fragment.wgsl'], (a) => {
        buildPipeline();
      });
    }
  }

  set(device, key, position, stride, vertices, normals, indices, corners) {
    let obj: VoxelObject = this.objects.get(key);
    if (!obj) {
      obj = this.pool.pop();
      if (!obj) {
        obj = new VoxelObject(vec3.fromValues(position.x, position.y, position.z));
        obj.init(device, this.pipeline);
      } else {
        obj.position = vec3.fromValues(position.x, position.y, position.z);
      }
      this.objects.set(key, obj);
    }

    obj.setCorners(device, corners);
    obj.stride = stride;
    obj.setVertexBuffer(device, vertices, normals);
    obj.setIndexBuffer(device, indices);
  }

  free(device, key, _) {
    let obj = this.objects.get(key);

    if(obj) {
      this.pool.push(obj);
      this.objects.delete(key);
    }
  }

  freeAll() {
    for (const [key, value] of this.objects) {
      this.pool.push(value);
      this.objects.delete(key);
    }
  }

  update(device, projectionMatrix) {
    for (const value of this.objects.values()) {
      value.update(device, projectionMatrix)
    }
  }

  draw(passEncoder: GPURenderPassEncoder) {
    passEncoder.setPipeline(this.pipeline);
    for (const value of this.objects.values()) {
      value.draw(passEncoder)
    }
  }
}