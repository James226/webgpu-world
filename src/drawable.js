import VertexShader from './vertex.wgsl';
import FragmentShader from './fragment.wgsl';
import { mat4, vec3 } from 'gl-matrix';

const swapChainFormat = 'bgra8unorm';


export default class Drawable {
  constructor(position) {
    this.position = position;
  }

  init(device, queue) {
    this.pipeline = device.createRenderPipeline({
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

    const cubeVertexArray = new Float32Array([]);

    this.vertexBuffer = device.createBuffer({
      size: cubeVertexArray.byteLength,
      usage: GPUBufferUsage.VERTEX,
      mappedAtCreation: true,
    });
    new Float32Array(this.vertexBuffer.getMappedRange()).set(cubeVertexArray);
    this.vertexBuffer.unmap();

    this.indexCount = 12 * 3;
    this.indexBuffer = device.createBuffer({
      size: this.indexCount * Uint16Array.BYTES_PER_ELEMENT,
      usage: GPUBufferUsage.INDEX,
      mappedAtCreation: true,
    });
    {
      const mapping = new Uint16Array(this.indexBuffer.getMappedRange());
      mapping.set([]);
      this.indexBuffer.unmap();
    }

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
        },
      ],
    });
  }

  setVertexBuffer(device, vertices, normals) {
    const newVertexBuffer = device.createBuffer({
      size: vertices.length * 10 * Float32Array.BYTES_PER_ELEMENT,
      usage: GPUBufferUsage.VERTEX,
      mappedAtCreation: true,
    });
    const mapping = new Float32Array(newVertexBuffer.getMappedRange());
    for (let i = 0; i < vertices.length; i += 3) {
      mapping.set(vertices.slice(i, i + 3), (i / 3) * 10);
      mapping.set([1], (i / 3) * 10 + 3);
      mapping.set(normals.slice(i, i + 3), (i / 3) * 10 + 4);
      mapping.set([1], (i / 3) * 10 + 8);
    }
    newVertexBuffer.unmap();

    const oldVertexBuffer = this.vertexBuffer;
    this.vertexBuffer = newVertexBuffer;
    oldVertexBuffer.destroy();
  }

  setIndexBuffer(device, indices) {
    const newIndexBuffer = device.createBuffer({
      size: indices.length * Uint16Array.BYTES_PER_ELEMENT,
      usage: GPUBufferUsage.INDEX,
      mappedAtCreation: true,
    });
    const indexMapping = new Uint16Array(newIndexBuffer.getMappedRange());
    indexMapping.set(indices);

    newIndexBuffer.unmap();

    const oldIndexBuffer = this.indexBuffer;
    this.indexBuffer = newIndexBuffer;
    oldIndexBuffer.destroy();

    this.indexCount = indices.length;
  }

  getTransformationMatrix(projectionMatrix) {
    const modelMatrix = mat4.create()
    mat4.translate(modelMatrix, modelMatrix, this.position);

    const modelViewProjectionMatrix = mat4.create();
    mat4.multiply(modelViewProjectionMatrix, projectionMatrix, modelMatrix);

    return modelViewProjectionMatrix;
  }

  update(device, projectionMatrix) {
    const transformationMatrix = this.getTransformationMatrix(projectionMatrix);

    device.queue.writeBuffer(
      this.uniformBuffer,
      0,
      transformationMatrix.buffer,
      transformationMatrix.byteOffset,
      transformationMatrix.byteLength
    );
  }

  draw(passEncoder) {
    passEncoder.setPipeline(this.pipeline);
    passEncoder.setBindGroup(0, this.uniformBindGroup);
    passEncoder.setVertexBuffer(0, this.vertexBuffer);
    passEncoder.setIndexBuffer(this.indexBuffer, 'uint16');
    passEncoder.drawIndexed(this.indexCount);
  }
}