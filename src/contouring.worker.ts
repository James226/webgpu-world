import {vec3} from 'gl-matrix';
import Voxel from './voxel';
import {QueueItem} from "./queueItem";
import WorldGenerator  from "./world-generator";

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
    const { position, detail } = e.data;

    if (detail) {

      const {x, y, z, s} = detail;
      const { vertices, normals, indices } = await voxel.generate(device, queue, vec3.fromValues(x-(31*s*0.5), y-(31*s*0.5), z-(31*s*0.5)), s);
      if (vertices.length > 0) {
      }
      ctx.postMessage(({ type: 'update', i: `${x}:${y}:${z}`, ix: x, iy: y, iz: z, x: 0, y: 0, z: 0, vertices: vertices.buffer, normals: normals.buffer, indices: indices.buffer, stride: s }), [vertices.buffer, normals.buffer, indices.buffer])
      generating = false;
      return;
    }

    const stride = 32;
    const size = 128;
    console.log(`World Size: ${size} (${size * 32})`);
    const chunkSize = 31;
    const worldSize =  Math.ceil(size / stride);

    console.log(`Starting generation. Stride: ${stride} (${worldSize})`);
    const t0 = performance.now();

    const worldGenerator = new WorldGenerator(stride);
    let info = worldGenerator.init((position[0] / chunkSize), (position[1] / chunkSize), (position[2] / chunkSize));

    console.log(`Init world at ${info.x}:${info.y}:${info.z} for stride ${stride}`)

    do {
      const r = worldGenerator.next(info);
      const result = r[0];
      info = r[1];

      const {x, y, z} = result;
      const halfChunk = result.stride * chunkSize * 0.5;

      const { vertices, normals, indices, corners } = await voxel.generate(device, queue, vec3.fromValues(x * chunkSize -halfChunk, y * chunkSize -halfChunk, z * chunkSize -halfChunk), result.stride);
      // if (vertices.length > 0) {
      //   console.log(`Generating ${x}:${y}:${z} (${x * chunkSize -halfChunk}:${y * chunkSize -halfChunk}:${z * chunkSize -halfChunk}) (${result.stride} / ${halfChunk} / ${info.previousOffset})`)
      // }
      ctx.postMessage(({ type: 'update', i: `${x}:${y}:${z}`, ix: x, iy: y, iz: z, x: 0, y: 0, z: 0, vertices: vertices.buffer, normals: normals.buffer, indices: indices.buffer, corners: corners.buffer, stride: result.stride }), [vertices.buffer, normals.buffer, indices.buffer, corners.buffer])

    } while (info.stride <= 2048);

    generating = false;

    console.log(`Generation complete in ${performance.now() - t0} milliseconds`);
  }
})();
