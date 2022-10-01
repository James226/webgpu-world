import {vec3} from 'gl-matrix';
import Voxel from './voxel';
import {QueueItem} from "./queueItem";
import WorldGenerator  from "./world-generator";

const ctx: Worker = self as any;

class CountDownLatch {

  private readonly promise: Promise<void>;

  private countDownFunction: () => number;
  private count: number;

  /**
   * Creates a new instance with a given count
   *
   * @param count The initial count
   */
  constructor(count: number) {
    this.count = Math.max(count, 0);
    this.promise = new Promise<void>(resolve => {
      this.countDownFunction = () => {
        if (this.count > 0) {
          this.count = this.count - 1;
          if (this.count <= 0) {
            resolve();
          }
        }
        return this.count;
      };

      //Resolve promise if initial value is less or equal 0
      //Maybe count was calculated from data or something else
      //so this case makes sense under some circumstances
      if (count <= 0) {
        resolve();
      }
    });
  }

  /**
   * Decrement the count by one
   */
  public countDown(): number {
    return this.countDownFunction();
  }

  /**
   * Get's the current count value of the latch
   */
  public getCount(): number {
    return this.count;
  }

  /**
   * Await until the count reaches zero (0)
   */
  public async awaitZero() {
    await this.promise;
  }

  /**
   * Get's the promise that will be resolve after count reached zero
   */
  public getPromise() {
    return this.promise;
  }
}

(async function() {
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter.requestDevice();

  const voxel = new Voxel();
  await voxel.init(device);

  const generators: Voxel[] = [];
  const threadCount = 1;
  for (let i = 0; i < threadCount; i++) {
    generators[i] = new Voxel();
    await generators[i].init(device);
  }

  console.log('Voxel engine init complete');
  postMessage({ type: 'init_complete' });

  let gpuQueue: GPUCommandBuffer[] = [];
  const callbacks = [];
  const queue = (item: QueueItem) => {
    callbacks.push(item.callback);
    gpuQueue.push(...item.items);
    //device.queue.submit(item.items);
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

    //const semaphore = new Semaphore(threadCount);

    do {

      for (let i = 0; i < threadCount; i++) {
        //const release = await semaphore.acquire();

        let generator: Voxel = null;
        for (let j = 0; j < generators.length; j++) {
          if (!generators[i].running) {
            generator = generators[i];
            generator.running = true;
            break;
          }
        }
        //let timer = performance.now();
        const r = worldGenerator.next(info);
        const result = r[0];
        info = r[1];

        const {x, y, z} = result;
        const halfChunk = result.stride * chunkSize * 0.5;

        //const { vertices, normals, indices, corners } = await voxel.generate(device, queue, vec3.fromValues(x * chunkSize -halfChunk, y * chunkSize -halfChunk, z * chunkSize -halfChunk), result.stride);
        let timer = performance.now();

        generator.generate(device, queue, vec3.fromValues(x * chunkSize - halfChunk, y * chunkSize - halfChunk, z * chunkSize - halfChunk), result.stride)
          .then(({vertices, normals, indices, corners}) => {
            //console.log(`Block generated with ${vertices.length} in ${performance.now() - timer}`);
            ctx.postMessage(({
              type: 'update',
              i: `${x}:${y}:${z}`,
              ix: x,
              iy: y,
              iz: z,
              x: 0,
              y: 0,
              z: 0,
              vertices: vertices.buffer,
              normals: normals.buffer,
              indices: indices.buffer,
              corners: corners.buffer,
              stride: result.stride
            }), [vertices.buffer, normals.buffer, indices.buffer, corners.buffer])
            generator.running = false;
            //release();
          });
        // if (vertices.length > 0) {
        //   console.log(`Generating ${x}:${y}:${z} (${x * chunkSize -halfChunk}:${y * chunkSize -halfChunk}:${z * chunkSize -halfChunk}) (${result.stride} / ${halfChunk} / ${info.previousOffset})`)
        // }

        // if (vertices.length > 0) {
        //   console.log(`Block generated with ${vertices.length} in ${performance.now() - timer}`);
        // }
        //ctx.postMessage(({ type: 'update', i: `${x}:${y}:${z}`, ix: x, iy: y, iz: z, x: 0, y: 0, z: 0, vertices: vertices.buffer, normals: normals.buffer, indices: indices.buffer, corners: corners.buffer, stride: result.stride }), [vertices.buffer, normals.buffer, indices.buffer, corners.buffer])
        while (gpuQueue.length > 0) {

          const promise = device.queue.onSubmittedWorkDone();
          device.queue.submit(gpuQueue);
          await promise;
          gpuQueue = [];
          const countdown = new CountDownLatch(callbacks.length);

          for (let j = callbacks.length - 1; j >=0; j--) {
            callbacks[j]().then(() => {
              countdown.countDown();
            });
            callbacks.splice(j, 1);
          }
          await countdown.awaitZero();
        }

      }
    } while (info.stride <= 32768);

    generating = false;

    console.log(`Generation complete in ${performance.now() - t0} milliseconds`);
  }
})();
