import { mat4 } from 'gl-matrix';
import glslCompiler from '@webgpu/glslang/dist/web-devel-onefile/glslang';
import Game from './game';

async function init(canvas) {
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter.requestDevice();
  const glslang = await glslCompiler();

  const aspect = Math.abs(canvas.width / canvas.height);
  const projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 1000.0);

  const swapChainFormat = 'bgra8unorm';

  const context = canvas.getContext('gpupresent');
  const swapChain = context.configureSwapChain({
    device,
    format: swapChainFormat,
  });

  const game = new Game();

  const queue = [];

  game.init(device, queue, glslang);

  const depthTexture = device.createTexture({
    size: { width: canvas.width, height: canvas.height },
    format: 'depth24plus-stencil8',
    usage: GPUTextureUsage.RENDER_ATTACHMENT,
  });

  const frame = (timestamp) => {
    const commandEncoder = device.createCommandEncoder();
    const textureView = swapChain.getCurrentTexture().createView();

    const renderPassDescriptor = {
      colorAttachments: [
        {
          attachment: textureView,
          loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
        }
      ],
      depthStencilAttachment: {
        attachment: depthTexture.createView(),
  
        depthLoadValue: 1.0,
        depthStoreOp: 'store',
        stencilLoadValue: 0,
        stencilStoreOp: 'store',
      }
    };

    game.update(device, projectionMatrix);

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    game.draw(passEncoder);
    passEncoder.endPass();

    const item = queue.shift();

    device.queue.onSubmittedWorkDone().then(e => {
      if (item) {
        item.callback();
      }
    })
    
    if (item) {
      device.queue.submit([commandEncoder.finish(), ...item.items]);
    } else {
      device.queue.submit([commandEncoder.finish()]);
    }
  }

  return frame;
}

const canvas = document.getElementById('canvas');

init(canvas).then((frame) => {
  const doFrame = (timestamp) => {
    frame(timestamp);
    requestAnimationFrame(doFrame);
  };
  requestAnimationFrame(doFrame);
});