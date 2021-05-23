import VertexShader from './vertex.glsl';
import FragmentShader from './fragment.glsl';
import { vec3 } from 'gl-matrix';
import VoxelObject from './voxel-object';

const swapChainFormat = 'bgra8unorm';

export default class VoxelCollection {
  constructor() {
    this.objects = {};
    this.pool = [];
  }


  async init(device, queue, glslang) {

    const img = document.createElement('img');
    img.src = 'grass.jpg';
    await img.decode();
    const imageBitmap = await createImageBitmap(img);

    const cubeTexture = device.createTexture({
      size: [imageBitmap.width, imageBitmap.height, 1],
      format: 'rgba8unorm',
      usage: GPUTextureUsage.SAMPLED | GPUTextureUsage.COPY_DST,
    });
    device.queue.copyImageBitmapToTexture(
      { imageBitmap },
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


    const uniformBufferSize = 4 * 16; // 4x4 matrix
  const uniformBuffer = device.createBuffer({
    size: uniformBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });
 
  const uniformLayout = device.createBindGroupLayout({
    entries: [
      {
        // Transform
        binding: 0,
        visibility: GPUShaderStage.VERTEX,
        buffer: {
          type: 'uniform',
        },
      },
// '      {
//         // Sampler
//         binding: 0,
//         visibility: GPUShaderStage.FRAGMENT,
//         sampler: {
//           type: 'filtering',
//         },
//       },'
      // {
      //   // Texture view
      //   binding: 2,
      //   visibility: GPUShaderStage.FRAGMENT,
      //   texture: {
      //     sampleType: 'float',
      //   },
      // },
    ],
  });



    const bindGroupLayout = device.createBindGroupLayout({
      entries: [
        // {
        //   // Transform
        //   binding: 0,
        //   visibility: GPUShaderStage.VERTEX,
        //   buffer: {
        //     type: 'uniform',
        //   },
        // },
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

    this.pipeline = device.createRenderPipeline({
      layout: pipelineLayout,

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
        // {
        //   binding: 0,
        //   resource: {
        //     buffer: uniformBuffer,
        //   },
        // },
        {
          binding: 0,
          resource: sampler,
        },
        {
          binding: 1,
          resource: cubeTexture.createView(),
        },
      ],
    });
  
  }
  

  set(device, key, position, vertices, normals, indices) {
    console.log(position);
    //const key = `${position.x},${position.y},${position.z}`;

    let obj = this.objects[key];
    if (!obj) {
      obj = this.pool.pop();
      if (!obj) {
        obj = new VoxelObject(vec3.fromValues(position.x, position.y, position.z));
        obj.init(device, this.pipeline);
      } else {
        obj.position = vec3.fromValues(position.x, position.y, position.z);
      }
      this.objects[key] = obj;
    }

    obj.setVertexBuffer(device, vertices, normals);
    obj.setIndexBuffer(device, indices);
  }

  free(device, key, position) {
    //const key = `${position.x},${position.y},${position.z}`;

    let obj = this.objects[key];

    if(obj) {
      this.pool.push(obj);
      delete this.objects[key];
    }
  }

  freeAll() {
    for (const [key, value] of Object.entries(this.objects)) {
      this.pool.push(value);
      delete this.objects[key];
    }
  }

  update(device, projectionMatrix) {
    for (const value of Object.values(this.objects)) {
      value.update(device, projectionMatrix)
    }
  }

  draw(passEncoder) {
    passEncoder.setPipeline(this.pipeline);
    passEncoder.setBindGroup(1, this.uniformBindGroup);
    for (const value of Object.values(this.objects)) {
      value.draw(passEncoder)
    }
  }
}