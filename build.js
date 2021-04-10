const glslCompiler = require('@webgpu/glslang');

glslCompiler().then(glslang => {
  const fs = require('fs');

  fs.readFile('./src/compute-voxels.glsl', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    const shader = glslang.compileGLSL(data, 'compute');


    fs.writeFile('compute-voxels.compute', shader, 'binary', function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("The file was saved!");
      }
    });
  });
});
