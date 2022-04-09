import { mat4, vec3 } from "gl-matrix";
import Keyboard from "./keyboard";

export default class Controller {
  public viewMatrix: mat4;
  public position: vec3;
  public velocity: vec3;

  private keyboard: Keyboard;
  private readonly rotation: vec3;
  private forward: vec3;
  private up: vec3;
  private right: vec3;

  constructor(keyboard: Keyboard) {
    this.keyboard = keyboard;

    this.viewMatrix = mat4.create();
    this.position = vec3.fromValues(0, 0.0, -228.0);
    this.velocity = vec3.fromValues(0,0,0);
    this.rotation = vec3.fromValues(0, 0, 0);

    this.forward = vec3.create();
    this.right = vec3.create();
    this.up = vec3.create();
  }

  init() {
  }

  update(device: GPUDevice, projectionMatrix: mat4, timestamp: number) {
    
    const distance = this.keyboard.keydown('shift') ? 1000 : 10;
    const velocity = vec3.fromValues(0,0,0);
    if (this.keyboard.keydown('w')) {
      velocity[2] += distance;
    }

    if (this.keyboard.keydown('s')) {
      velocity[2] -= distance;
    }

    if (this.keyboard.keydown('a')) {
      velocity[0] += distance;
    }

    if (this.keyboard.keydown('d')) {
      velocity[0] -= distance;
    }

    vec3.add(this.position, this.position, velocity);
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

    mat4.lookAt(this.viewMatrix,
        this.position,
        vec3.add(vec3.create(), this.position, vec3.fromValues(0.0, 0.0, 1.0)),
        vec3.fromValues(0.0, 1.0, 0.0));

    const inverted = mat4.invert(mat4.create(), this.viewMatrix);
    vec3.normalize(this.right, <vec3> inverted.slice(0, 3));
    vec3.normalize(this.up, <vec3> inverted.slice(4, 7));
    vec3.normalize(this.forward, <vec3> inverted.slice(8, 11));

    mat4.multiply(this.viewMatrix, projectionMatrix, this.viewMatrix);
  }
}