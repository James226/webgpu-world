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


  init(device, queue, glslang) {
    this.pipeline = device.createRenderPipeline({
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
    for (const value of Object.values(this.objects)) {
      value.draw(passEncoder)
    }
  }
}