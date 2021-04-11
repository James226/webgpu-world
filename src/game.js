import { vec3, mat4 } from 'gl-matrix';
import Drawable from "./drawable";
import Voxel from "./voxel";
import ContouringWorker from './contouring.worker';

class Game {
  init(device, queue, glslang) {
    var voxelWorker = new ContouringWorker();

    const worldSize = 5

    //this.voxel = new Voxel();
    //this.voxel.init(device, queue, glslang);
    this.drawables = [];

    for (let x = 0; x < worldSize; x++)
    for (let y = 0; y < worldSize; y++)
    for (let z = 0; z < worldSize; z++) {
      this.drawables[x + (y * worldSize) + (z * worldSize * worldSize)] = new Drawable(vec3.create());
      this.drawables[x + (y * worldSize) + (z * worldSize * worldSize)].init(device, queue, glslang);
    }
    //this.drawable = new Drawable(vec3.fromValues(0, 0, 0));
    //this.drawable.init(device, queue, glslang);

    let generating = false;

    let stride = 32;

    document.addEventListener('keypress', async (e) => {
      if (e.key !== 'g' || generating === true) return;

      const t0 = performance.now();

      voxelWorker.onmessage = ({ data }) => {
        const {i, vertices, normals, indices } = data;
        if (vertices.byteLength) {
          this.drawables[i].setVertexBuffer(device, new Float32Array(vertices), new Float32Array(normals));
          this.drawables[i].setIndexBuffer(device, new Uint16Array(indices));
        } else {
          this.drawables[i].setVertexBuffer(device, new Float32Array(), new Float32Array());
          this.drawables[i].setIndexBuffer(device, new Uint16Array());
        }
      };

      voxelWorker.postMessage({ stride });

      stride /= 2;
      if (stride < 1) stride = 32;

      // for (let x = 0; x < worldSize; x++)
      // for (let y = 0; y < worldSize; y++)
      // for (let z = 0; z < worldSize; z++) {
      //   const i = x + (y * worldSize) + (z * worldSize * worldSize);

      //   //const { vertices, normals, indices } = await this.voxel.generate(device, item => queue.push(item), vec3.fromValues(x * 31, y * 31, z * 31));
        
      //   const promise = new Promise(resolve => {
      //     voxelWorker.onmessage = function(e) {
      //       resolve(e.data);
      //     }
      //     const position = vec3.fromValues(x * 31, y * 31, z * 31);
      //     voxelWorker.postMessage({ position });
      //   });

      //   const { vertices, normals, indices } = await promise;

      //   if (vertices.length) {
      //     this.drawables[i].setVertexBuffer(device, vertices, normals);
      //     this.drawables[i].setIndexBuffer(device, indices);
      //   }

      // }
      generating = false;
      console.log(`Generation complete in ${performance.now() - t0} milliseconds`);

    });
  }

  update(device, projectionMatrix) {
    const viewMatrix = mat4.create()
    mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -228));
    const now = Date.now() / 1000;
    mat4.rotate(
      viewMatrix,
      viewMatrix,
      1,
      vec3.fromValues(Math.sin(now), Math.cos(now), 0)
    );
    mat4.multiply(viewMatrix, projectionMatrix, viewMatrix);
    
    for (let i = 0; i < this.drawables.length; i++) {
      this.drawables[i].update(device, viewMatrix);
    }
    //this.drawable.update(device, projectionMatrix);
  }

  draw(passEncoder) {
    for (let i = 0; i < this.drawables.length; i++) {
      this.drawables[i].draw(passEncoder);
    }
    //this.drawable.draw(passEncoder);
  }
}

export default Game;