import { vec3, mat4 } from 'gl-matrix';
import Drawable from "./drawable";
import ContouringWorker from './contouring.worker';
import Controller from './controller';
import Keyboard from './keyboard';
import VoxelCollection from './voxel-collection';

class Game {
  async init(device, queue, glslang) {
    this.voxelWorker = new ContouringWorker();

    const worldSize = 10;
    this.loaded = false;

    this.voxelWorker.onmessage = ({ data }) => {
      if (data.type === 'init_complete') {
      console.log('Received Voxel engine init complete');

        document.getElementById('loading').style.display = 'none';
        this.loaded = true;
      }
    }

    this.keyboard = new Keyboard();
    this.keyboard.init();

    this.controller = new Controller(this.keyboard);
    this.controller.init(device, queue, glslang);

    this.drawables = [];

    this.collection = new VoxelCollection();
    this.collection.init(device, queue, glslang);

    // for (let x = 0; x < worldSize; x++)
    // for (let y = 0; y < worldSize; y++)
    // for (let z = 0; z < worldSize; z++) {
    //   this.drawables[x + (y * worldSize) + (z * worldSize * worldSize)] = new Drawable(vec3.create());
    //   this.drawables[x + (y * worldSize) + (z * worldSize * worldSize)].init(device, queue, glslang);
    // }

    this.generating = false;

    this.stride = 1 << 16;
    console.log(this.stride);
  }

  generate(device) {
    if (this.generating || !this.loaded) return;

    const t0 = performance.now();

      this.voxelWorker.onmessage = ({ data }) => {
        const { type, i, vertices, normals, indices } = data;
        switch (type) {
          case 'clear':
            //this.drawables[i].setVertexBuffer(device, new Float32Array(), new Float32Array());
            //this.drawables[i].setIndexBuffer(device, new Uint16Array());
            break;
          case 'update':
            {
              if (vertices.byteLength) {
                this.collection.set(device, `${data.ix}x${data.iy}x${data.iz}`, { x: data.x, y: data.y, z: data.z }, new Float32Array(vertices), new Float32Array(normals), new Uint16Array(indices));
                //this.drawables[i].setVertexBuffer(device, new Float32Array(vertices), new Float32Array(normals));
                //this.drawables[i].setIndexBuffer(device, new Uint16Array(indices));
              } else {
                this.collection.free(device, `${data.ix}x${data.iy}x${data.iz}`, { x: data.x, y: data.y, z: data.z });
                //this.drawables[i].setVertexBuffer(device, new Float32Array(), new Float32Array());
                //this.drawables[i].setIndexBuffer(device, new Uint16Array());
              }
              break;
            }
        }
      };

      this.collection.freeAll();

      this.voxelWorker.postMessage({ stride: this.stride });

      this.stride /= 2;
      if (this.stride < 1) this.stride = 32;

      this.generating = false;
      console.log(`Generation complete in ${performance.now() - t0} milliseconds`);
  }

  update(device, projectionMatrix, timestamp) {
    if (this.keyboard.keypress('g')) {
      this.generate(device);
    }

    this.controller.update(device, projectionMatrix, timestamp);

    const viewMatrix = this.controller.viewMatrix;
    
    // for (let i = 0; i < this.drawables.length; i++) {
    //   this.drawables[i].update(device, viewMatrix);
    // }
    this.collection.update(device, viewMatrix);
    this.keyboard.update();
  }

  draw(passEncoder) {
    // for (let i = 0; i < this.drawables.length; i++) {
    //   this.drawables[i].draw(passEncoder);
    // }
    this.collection.draw(passEncoder);
  }
}

export default Game;