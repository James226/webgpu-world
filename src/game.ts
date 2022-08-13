import ContouringWorker from 'worker-loader!./contouring.worker';
import Controller from './controller';
import Keyboard from './keyboard';
import VoxelCollection from './voxel-collection';
import Physics from './physics';
import {mat4, vec3} from "gl-matrix";
import Mouse from "./mouse";
import * as Tone from 'tone'

declare global {
  interface Window { generate: any; }
}

class Game {
  private loaded: boolean;
  private voxelWorker: ContouringWorker;
  private keyboard: Keyboard;
  private mouse: Mouse;
  private physics: Physics;
  private controller: Controller;
  private collection: VoxelCollection;
  private generating: boolean;
  private stride: number;

  async init(device: GPUDevice) {
    const worldSize = 10;
    this.loaded = false;

    this.keyboard = new Keyboard();
    this.keyboard.init();

    this.mouse = new Mouse();
    this.mouse.init();

    this.physics = new Physics();
    await this.physics.init(device);

    this.controller = new Controller(this.keyboard, this.mouse);
    this.controller.init();

    this.collection = new VoxelCollection();
    await this.collection.init(device);

    if (module.hot) {
      module.hot.accept(['./voxel-collection.ts'], async (a) => {
        const collection = new VoxelCollection(this.collection.objects);
        await collection.init(device);
        this.collection = collection;
      });
    }

    this.generating = false;

    this.voxelWorker = new ContouringWorker();
    this.voxelWorker.onmessage = ({ data }) => {
      if (data.type === 'init_complete') {
        console.log('Received Voxel engine init complete');

        document.getElementById('loading').style.display = 'none';
        this.loaded = true;
        this.generate(device, null);

        window.generate = (data) => this.generate(device, data);
      }
    }

    this.stride = 16;
    console.log(this.stride);
  }

  generate(device: GPUDevice, data: any) {
    if (this.generating || !this.loaded) return;

    const t0 = performance.now();

      this.voxelWorker.onmessage = ({ data }) => {
        const { type, i, vertices, normals, indices, stride } = data;
        switch (type) {
          case 'clear':
            break;
          case 'update':
            {
              if (vertices.byteLength) {
                this.collection.set(device, `${data.ix}x${data.iy}x${data.iz}`, { x: data.x, y: data.y, z: data.z }, stride, new Float32Array(vertices), new Float32Array(normals), new Uint16Array(indices));
              } else {
                this.collection.free(device, `${data.ix}x${data.iy}x${data.iz}`, { x: data.x, y: data.y, z: data.z });
              }
              break;
            }
        }
      };

      this.collection.freeAll();

      this.voxelWorker.postMessage({ stride: this.stride, position: this.controller.position, detail: data });

      this.stride /= 2;
      if (this.stride < 1) this.stride = 32;

      this.generating = false;

      console.log(`Generation complete in ${performance.now() - t0} milliseconds`);
  }

  update(device: GPUDevice, projectionMatrix: mat4, timestamp: number) {
    if (this.keyboard.keypress('g')) {
      this.generate(device, null);
    }

    //this.physics.velocity = this.controller.velocity;
    //this.physics.update(device, (q: QueueItem) => queue.push(q));

    //this.controller.position = this.physics.position as vec3;
    this.controller.update(device, projectionMatrix, timestamp);

    const viewMatrix = this.controller.viewMatrix;
    
    this.collection.update(device, viewMatrix);
    this.keyboard.update();
    this.mouse.update();
  }

  draw(passEncoder: GPURenderPassEncoder) {
    this.collection.draw(passEncoder);
  }
}

export default Game;