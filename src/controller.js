import { mat4, vec3 } from "gl-matrix";

export default class Controller {
  constructor(keyboard) {
    this.keyboard = keyboard;

    this.viewMatrix = mat4.create();
    this.position = vec3.fromValues(0, 0, -228);
    this.rotation = vec3.fromValues(0, 0, 0);
  }

  init() {
  }

  update(device, projectionMatrix, timestamp) {
    if (this.keyboard.keydown('w')) {
      this.position[2] -= timestamp;
    }

    if (this.keyboard.keydown('s')) {
      this.position[2] += timestamp;
    }

    if (this.keyboard.keydown('a')) {
      this.position[0] -= timestamp;
    }

    if (this.keyboard.keydown('d')) {
      this.position[0] += timestamp;
    }

    if (this.keyboard.keydown('arrowleft')) {
      this.rotation[1] -= timestamp / 500;
    }

    if (this.keyboard.keydown('arrowright')) {
      this.rotation[1] += timestamp / 500;
    }

    if (this.keyboard.keydown('arrowup')) {
      this.rotation[0] -= timestamp / 500;
    }

    if (this.keyboard.keydown('arrowdown')) {
      this.rotation[0] += timestamp / 500;
    }

    mat4.identity(this.viewMatrix)


    mat4.translate(this.viewMatrix, this.viewMatrix, this.position);

    
    mat4.rotateX(this.viewMatrix, this.viewMatrix, this.rotation[0]);
    mat4.rotateY(this.viewMatrix, this.viewMatrix, this.rotation[1]);

    mat4.multiply(this.viewMatrix, projectionMatrix, this.viewMatrix);
  }
}