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


  const context = canvas.getContext('webgpu');
  const presentationFormat = context.getPreferredFormat(adapter); // bgra8unorm

  context.configure({
    device,
    format: presentationFormat
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
    const textureView = context.getCurrentTexture().createView();

    const renderPassDescriptor = {
      colorAttachments: [
        {
          view: textureView,
          attachment: textureView,
          clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
          loadOp: 'clear',
          storeOp: 'store'
        }
      ],
      depthStencilAttachment: {
        view: depthTexture.createView(),
  
        depthClearValue: 1.0,
        depthLoadOp: 'clear',
        depthStoreOp: 'store',

        stencilClearValue: 0,
        stencilLoadOp: 'clear',
        stencilStoreOp: 'store',
      }
    };

    game.update(device, projectionMatrix);

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    game.draw(passEncoder);
    passEncoder.end();

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