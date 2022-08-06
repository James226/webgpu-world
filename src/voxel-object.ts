import {mat4, vec3} from 'gl-matrix';

export default class VoxelObject {
  public position: vec3;
  public stride: number;
  private vertexBuffer: GPUBuffer;
  private indexCount: number;
  private indexBuffer: GPUBuffer;
  private uniformBuffer: GPUBuffer;
  private uniformBindGroup: GPUBindGroup;

  constructor(position: vec3) {
    this.position = position;
  }

  init(device: GPUDevice, pipeline) {
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

    const uniformBufferSize = 4 * 16 + 4;
    this.uniformBuffer = device.createBuffer({
      size: uniformBufferSize,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    this.uniformBindGroup = device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
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

  update(device: GPUDevice, projectionMatrix: mat4) {
    const transformationMatrix = this.getTransformationMatrix(projectionMatrix);

    device.queue.writeBuffer(
      this.uniformBuffer,
      0,
        (<Float32Array>transformationMatrix).buffer,
        (<Float32Array>transformationMatrix).byteOffset,
        (<Float32Array>transformationMatrix).byteLength
    );

    const strideBuffer = new Int32Array(1);
    strideBuffer[0] = this.stride
    device.queue.writeBuffer(
      this.uniformBuffer,
      (<Float32Array>transformationMatrix).byteLength,
      strideBuffer.buffer,
      strideBuffer.byteOffset,
      strideBuffer.byteLength
    );
  }

  draw(passEncoder: GPURenderPassEncoder) {
    passEncoder.setBindGroup(0, this.uniformBindGroup);
    passEncoder.setVertexBuffer(0, this.vertexBuffer);
    passEncoder.setIndexBuffer(this.indexBuffer, 'uint16');
    passEncoder.drawIndexed(this.indexCount);
  }
}