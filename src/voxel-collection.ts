import VertexShader from '!!raw-loader!./vertex.wgsl';
import FragmentShader from '!!raw-loader!./fragment.wgsl';
import { vec3 } from 'gl-matrix';
import VoxelObject from './voxel-object';

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

    const img = document.createElement('img');
    img.src = 'rock.jpg';
    await img.decode();
    const imageBitmap = await createImageBitmap(img);

    const cubeTexture = device.createTexture({
      size: [imageBitmap.width, imageBitmap.height, 1],
      format: 'rgba8unorm',
      usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
    });
    device.queue.copyExternalImageToTexture(
      { source: imageBitmap },
      { texture: cubeTexture },
      [imageBitmap.width, imageBitmap.height, 1]
    );

    const sampler = device.createSampler({
      magFilter: 'linear',
      minFilter: 'linear',
      addressModeU: 'repeat',
      addressModeV: 'repeat',
      addressModeW: 'repeat',
    });



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
    ],
  });



    const bindGroupLayout = device.createBindGroupLayout({
      entries: [
        {
          // Sampler
          binding: 0,
          visibility: GPUShaderStage.FRAGMENT,
          sampler: {
            type: 'filtering',
          },
        },
        {
          // Texture view
          binding: 1,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: 'float',
          },
        },
      ],
    });
    const pipelineLayout = device.createPipelineLayout({
      bindGroupLayouts: [uniformLayout, bindGroupLayout],
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
                code: FragmentShader
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

      this.uniformBindGroup = device.createBindGroup({
        layout: this.pipeline.getBindGroupLayout(1),
        entries: [
          {
            binding: 0,
            resource: sampler,
          },
          {
            binding: 1,
            resource: cubeTexture.createView(),
          }
        ],
      });
    };

    buildPipeline();

    if (module.hot) {
      module.hot.accept(['./fragment.wgsl'], (a) => {
        buildPipeline();
      });
    }
  }

  set(device, key, position, stride, vertices, normals, indices) {
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
    passEncoder.setBindGroup(1, this.uniformBindGroup);
    for (const value of this.objects.values()) {
      value.draw(passEncoder)
    }
  }
}