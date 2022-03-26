import { mat4, vec3 } from "gl-matrix";
import Keyboard from "./keyboard";

export default class Controller {
  public viewMatrix: mat4;
  public position: vec3;
  public velocity: vec3;

  private keyboard: Keyboard;
  private readonly rotation: vec3;
  private forward: any;
  private right: any;

  constructor(keyboard: Keyboard) {
    this.keyboard = keyboard;

    this.viewMatrix = mat4.create();
    this.position = vec3.fromValues(0, 200000, 0.0);
    this.velocity = vec3.fromValues(0,0,0);
    this.rotation = vec3.fromValues(0, 0, 0);
  }

  init() {
  }

  update(device, projectionMatrix, timestamp) {
    
    //const distance = this.keyboard.keydown('shift') ? timestamp * 10 : timestamp;
    const distance = this.keyboard.keydown('shift') ? 1000 : 10;
    const velocity = vec3.fromValues(0,0,0);
    if (this.keyboard.keydown('w')) {
      //this.position[2] -= distance;
      vec3.sub(velocity, velocity, vec3.scale(vec3.create(), this.forward, distance));
      //velocity[2] += distance;
    }

    if (this.keyboard.keydown('s')) {
      //this.position[2] += distance;
      //velocity[2] -= distance;
      vec3.add(velocity, velocity, vec3.scale(vec3.create(), this.forward, distance));

    }

    if (this.keyboard.keydown('a')) {
      //this.position[0] -= distance;
      //velocity[0] += distance;
      vec3.sub(velocity, velocity, vec3.scale(vec3.create(), this.right, distance));

    }

    if (this.keyboard.keydown('d')) {
      //this.position[0] += distance;
      vec3.add(velocity, velocity, vec3.scale(vec3.create(), this.right, distance));

      //velocity[0] -= distance;
    }

    this.velocity = velocity;

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

    const up = vec3.normalize(vec3.create(), this.position);
    mat4.lookAt(this.viewMatrix, this.position, vec3.add(vec3.create(), this.position, vec3.cross(vec3.create(), vec3.fromValues(0.0, 0.0, 1.0), up)), up)

    const inverted = mat4.invert(mat4.create(), this.viewMatrix);
    this.forward = inverted.slice(8, 11);
    vec3.normalize(this.forward, this.forward);
    this.right = inverted.slice(0, 3);
    vec3.normalize(this.right, this.right);

    mat4.multiply(this.viewMatrix, projectionMatrix, this.viewMatrix);
  }
}