export default class Renderer {
  private context: GPUCanvasContext;
  device: GPUDevice;
  private presentationFormat: GPUTextureFormat
  private depthTexture: GPUTexture

  async init(canvas: HTMLCanvasElement) {
    const adapter = await navigator.gpu.requestAdapter();
    this.device = await adapter.requestDevice();

    this.context = canvas.getContext('webgpu');
    this.presentationFormat =  navigator.gpu.getPreferredCanvasFormat();
  }

  configure(width: number, height: number) {
    this.context.configure({
      device: this.device,
      format: this.presentationFormat,
      alphaMode: 'opaque'
    });

    this.depthTexture = this.device.createTexture({
      size: { width, height },
      format: 'depth24plus-stencil8',
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });
  }

  render(callback: (GPURenderPassDescriptor) => void) {
    const commandEncoder = this.device.createCommandEncoder();
    const textureView = this.context.getCurrentTexture().createView();

    const renderPassDescriptor: GPURenderPassDescriptor = {
      colorAttachments: [
        {
          view: textureView,
          clearValue: {r: 0.0, g: 0.0, b: 0.0, a: 1.0},
          loadOp: 'clear' as const,
          storeOp: 'store' as const
        }
      ],
      depthStencilAttachment: {
        view: this.depthTexture.createView(),

        depthClearValue: 1.0,
        depthLoadOp: 'clear',
        depthStoreOp: 'store',

        stencilClearValue: 0,
        stencilLoadOp: 'clear',
        stencilStoreOp: 'store',
      }
    };

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    callback(passEncoder);
    passEncoder.end();

    this.device.queue.submit([commandEncoder.finish()]);
  }
}
