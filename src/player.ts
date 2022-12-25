import {mat4, vec3} from 'gl-matrix';
import {cubePositionOffset, cubeUVOffset, cubeVertexArray, cubeVertexCount, cubeVertexSize} from './cube';
import vertex from '!!raw-loader!./playerVertex.wgsl'
import fragment from '!!raw-loader!./playerFragment.wgsl'

export default class Player {
  public position: vec3;
  private vertexBuffer: GPUBuffer;
  private uniformBuffer: GPUBuffer;
  private uniformBindGroup: GPUBindGroup;
  private pipeline: GPURenderPipeline;

  constructor(position: vec3) {
    this.position = position;
  }

  init(device: GPUDevice) {
    this.pipeline = device.createRenderPipeline({
      layout: 'auto',
      vertex: {
        module: device.createShaderModule({
          code: vertex,
        }),
        entryPoint: 'main',
        buffers: [
          {
            arrayStride: cubeVertexSize,
            attributes: [
              {
                // position
                shaderLocation: 0,
                offset: cubePositionOffset,
                format: 'float32x4',
              },
              {
                // uv
                shaderLocation: 1,
                offset: cubeUVOffset,
                format: 'float32x2',
              },
            ],
          },
        ],
      },
      fragment: {
        module: device.createShaderModule({
          code: fragment,
        }),
        entryPoint: 'main',
        targets: [
          {
            format: 'bgra8unorm',
          },
        ],
      },
      primitive: {
        topology: 'triangle-list',

        // Backface culling since the cube is solid piece of geometry.
        // Faces pointing away from the camera will be occluded by faces
        // pointing toward the camera.
        cullMode: 'back',
      },

      // Enable depth testing so that the fragment closest to the camera
      // is rendered in front.
      depthStencil: {
        depthWriteEnabled: true,
        depthCompare: 'less',
        format: 'depth24plus-stencil8',
      },
    });

    this.vertexBuffer = device.createBuffer({
      size: cubeVertexArray.byteLength,
      usage: GPUBufferUsage.VERTEX,
      mappedAtCreation: true,
    });
    new Float32Array(this.vertexBuffer.getMappedRange()).set(cubeVertexArray);
    this.vertexBuffer.unmap();

    const uniformBufferSize = 4 * 16;
    this.uniformBuffer = device.createBuffer({
      size: uniformBufferSize,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    this.uniformBindGroup = device.createBindGroup({
      layout: this.pipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: {
            buffer: this.uniformBuffer,
          },
        }
      ],
    });

  }

  getTransformationMatrix(projectionMatrix) {
    const modelMatrix = mat4.create()
    mat4.translate(modelMatrix, modelMatrix, this.position);
    mat4.scale(modelMatrix, modelMatrix, vec3.fromValues(100.0, 100.0, 100.0));

    const modelViewProjectionMatrix = mat4.create();
    mat4.multiply(modelViewProjectionMatrix, projectionMatrix, modelMatrix);

    return modelViewProjectionMatrix;
  }

  update(device: GPUDevice, projectionMatrix: mat4, timestamp: number) {
    const transformationMatrix = this.getTransformationMatrix(projectionMatrix);

    device.queue.writeBuffer(
      this.uniformBuffer,
      0,
      (<Float32Array>transformationMatrix).buffer,
      (<Float32Array>transformationMatrix).byteOffset,
      (<Float32Array>transformationMatrix).byteLength
    );
  }

  draw(passEncoder: GPURenderPassEncoder) {
    passEncoder.setPipeline(this.pipeline);
    passEncoder.setBindGroup(0, this.uniformBindGroup);
    passEncoder.setVertexBuffer(0, this.vertexBuffer);
    passEncoder.draw(cubeVertexCount, 1, 0, 0);
  }
}