import { vec3 } from 'gl-matrix';
import glslCompiler from '@webgpu/glslang/dist/web-devel-onefile/glslang';
import Voxel from './voxel';

(async function() {
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter.requestDevice();
  const glslang = await glslCompiler();

  const voxel = new Voxel();
  voxel.init(device, () => {}, glslang);

  device.queue.submit([]);

  console.log('Voxel engine init complete');

  const queue = (item) => {
    device.queue.onSubmittedWorkDone().then(e => {
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
    const worldSize =  Math.ceil(5 / stride);

    console.log(`Starting generation. Stride: ${stride}`);
    const t0 = performance.now();
    let i = 0;
    for (let x = 0; x < worldSize; x++)
    for (let y = 0; y < worldSize; y++)
    for (let z = 0; z < worldSize; z++) {
      i = x + (y * worldSize) + (z * worldSize * worldSize);

      const positionStride = (31 * stride);
      const { vertices, normals, indices } = await voxel.generate(device, queue, vec3.fromValues(x * positionStride, y * positionStride, z * positionStride), stride);

      console.log(vertices, normals, indices);
      
      // const promise = new Promise(resolve => {
      //   voxelWorker.onmessage = function(e) {
      //     resolve(e.data);
      //   }
      //   const position = vec3.fromValues(x * 31, y * 31, z * 31);
      //   voxelWorker.postMessage({ position });
      // });

      // const { vertices, normals, indices } = await promise;

      postMessage(({ i, vertices: vertices.buffer, normals: normals.buffer, indices: indices.buffer }), [vertices.buffer, normals.buffer, indices.buffer])
      
    }

    for (let idx = i + 1; idx < 4 + (4 * 5) + (4 * 5 * 5); idx++) {
      postMessage(({ i: idx, vertices: [], normals: [], indices: [] }));
      
    }
    generating = false;

    console.log(`Generation complete in ${performance.now() - t0} milliseconds`);

    // const { position } = e.data;

    // voxel.generate(device, queue, position)
    //   .then(({ vertices, normals, indices }) => {
    //     postMessage(({ vertices, normals, indices }), [vertices.buffer, normals.buffer, indices.buffer])
    //   });
  }
})();
