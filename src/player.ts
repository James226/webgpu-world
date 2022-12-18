import {
  cubeVertexArray,
  cubeVertexSize,
  cubeUVOffset,
  cubePositionOffset,
  cubeVertexCount,
} from './meshes/cube';

import basicVertWGSL from '!!raw-loader!./player.vert.wgsl';
import vertexPositionColorWGSL from '!!raw-loader!./player.frag.wgsl';
import {mat4, vec3} from "gl-matrix";

export class Player {
  private pipeline: GPURenderPipeline;
  private uniformBindGroup: GPUBindGroup;
  private verticesBuffer: GPUBuffer;

  public position: vec3;
  private uniformBuffer: GPUBuffer;

  constructor() {
    this.position = vec3.fromValues(2000000,0,0);
  }

  async init(device: GPUDevice) {
    this.verticesBuffer = device.createBuffer({
      size: cubeVertexArray.byteLength,
      usage: GPUBufferUsage.VERTEX,
      mappedAtCreation: true,
    });
    new Float32Array(this.verticesBuffer.getMappedRange()).set(cubeVertexArray);
    this.verticesBuffer.unmap();

    this.pipeline = device.createRenderPipeline({
      layout: 'auto',
      vertex: {
        module: device.createShaderModule({
          code: basicVertWGSL,
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
          code: vertexPositionColorWGSL,
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
        cullMode: 'back',
      },
      depthStencil: {
        depthWriteEnabled: true,
        depthCompare: 'less',
        format: 'depth24plus-stencil8',
      },
    });

    const uniformBufferSize = 4 * 16; // 4x4 matrix
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
        },
      ],
    });

  }

  getTransformationMatrix(projectionMatrix) {
    const modelMatrix = mat4.create()
    mat4.translate(modelMatrix, modelMatrix, this.position);

    const modelViewProjectionMatrix = mat4.create();
    mat4.multiply(modelViewProjectionMatrix, projectionMatrix, modelMatrix);

    return modelViewProjectionMatrix;
  }

  update(device: GPUDevice, projectionMatrix) {
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
    passEncoder.setVertexBuffer(0, this.verticesBuffer);
    passEncoder.draw(cubeVertexCount, 1, 0, 0);
  }
}