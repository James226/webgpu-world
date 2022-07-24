import {vec3} from 'gl-matrix';
import Voxel from './voxel';
import {QueueItem} from "./queueItem";

const ctx: Worker = self as any;

(async function() {
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter.requestDevice();

  const voxel = new Voxel();
  await voxel.init(device);

  console.log('Voxel engine init complete');
  postMessage({ type: 'init_complete' });

  const queue = (item: QueueItem) => {
    device.queue.onSubmittedWorkDone().then(_ => {
      item.callback();
    })
    
    device.queue.submit(item.items);
  };


  let generating = false;
  onmessage = async function(e) {
    if (generating) {
      console.log('Still generating')
      return;
    }
    generating = true;
    const { stride } = e.data;
    const size = 128;
    console.log(`World Size: ${size} (${size * 32})`);
    const chunkSize = 31;
    const worldSize =  Math.ceil(size / stride);

    console.log(`Starting generation. Stride: ${stride} (${worldSize})`);
    const t0 = performance.now();
    let i = 0;
    const halfWorldSize = (size * chunkSize / 2);
    for (let x = 0; x < worldSize; x++)
    for (let y = 0; y < 1; y++)
    for (let z = 0; z < worldSize; z++) {
      i = x + (y * worldSize) + (z * worldSize * worldSize);

      const positionStride = (chunkSize * stride);
      //console.log('Generating', stride, positionStride, halfWorldSize, x * positionStride - halfWorldSize, -32, z * positionStride - halfWorldSize, x, y, z)
      const { vertices, normals, indices } = await voxel.generate(device, queue, vec3.fromValues(x * positionStride - halfWorldSize, -32, z * positionStride - halfWorldSize), stride);
      ctx.postMessage(({ type: 'update', i, ix: x, iy: y, iz: z, x: 0, y: 0, z: 0, vertices: vertices.buffer, normals: normals.buffer, indices: indices.buffer }), [vertices.buffer, normals.buffer, indices.buffer])
      
    }

    for (let idx = i + 1; idx < 4 + (4 * 5) + (4 * 5 * 5); idx++) {
      postMessage(({ type: 'clear', i: idx, vertices: [], normals: [], indices: [] }));
    }
    generating = false;

    console.log(`Generation complete in ${performance.now() - t0} milliseconds`);
  }
})();
