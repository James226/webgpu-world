import {mat4, quat, vec3} from "gl-matrix";
import Keyboard from "./keyboard";
import Mouse from "./mouse";

export default class Controller {
  public viewMatrix: mat4;
  public position: vec3;
  public velocity: vec3;

  private keyboard: Keyboard;
  private mouse: Mouse;

  private readonly rotation: vec3;
  private readonly forward: vec3;
  private readonly up: vec3;
  private readonly right: vec3;
  private readonly rotationQuat: quat;

  private tool: boolean;

  constructor(keyboard: Keyboard, mouse: Mouse) {
    this.keyboard = keyboard;
    this.mouse = mouse;

    this.viewMatrix = mat4.create();
    this.position = vec3.fromValues(0, 0.0, -300.0);
    this.velocity = vec3.fromValues(0,0,0);
    this.rotation = vec3.fromValues(0, 0, 0);
    this.rotationQuat = quat.create();

    this.forward = vec3.create();
    this.right = vec3.create();
    this.up = vec3.create();

    this.tool = false;
  }

  init() {
  }

  update(device: GPUDevice, projectionMatrix: mat4, timestamp: number) {
    
    const distance = this.keyboard.keydown('shift') ? 100 : 10;
    const velocity = vec3.fromValues(0,0,0);
    vec3.zero(this.velocity);
    if (this.keyboard.keydown('w')) {
      //velocity[2] += distance;
      vec3.add(this.velocity, this.velocity, this.forward);
    }

    if (this.keyboard.keydown('s')) {
      //velocity[2] -= distance;
      vec3.sub(this.velocity, this.velocity, this.forward);
    }

    if (this.keyboard.keydown('a')) {
      //velocity[0] += distance;
      vec3.add(this.velocity, this.velocity, this.right);
    }

    if (this.keyboard.keydown('d')) {
      //velocity[0] -= distance;
      vec3.sub(this.velocity, this.velocity, this.right);
    }


    if (this.keyboard.keydown('r')) {
      //velocity[1] += distance;
      vec3.sub(this.velocity, this.velocity, this.up);
    }

    if (this.keyboard.keydown('f')) {
      //velocity[1] -= distance;
      vec3.add(this.velocity, this.velocity, this.up);
    }

    //vec3.add(this.position, this.position, vec3.scale(velocity, velocity, distance));

    vec3.scale(this.rotation, this.up, this.mouse.position.x * 0.08);
    vec3.add(this.rotation, this.rotation, vec3.scale(vec3.create(), this.right, this.mouse.position.y * 0.08));

    if (this.keyboard.keydown('q')) {
      //quat.rotateZ(this.rotationQuat, this.rotationQuat, .05)
      //vec3.add(this.rotation, this.rotation, vec3.scale(vec3.create(), this.up, 1.));
    }

    if (this.keyboard.keydown('e')) {
      //this.rotation[0] += timestamp / 500;
    }

    if (this.keyboard.keydown('1')) {
      this.tool = true;
      document.getElementById('tool').innerText = 'true';
    }

    if (this.keyboard.keydown('`')) {
      this.tool = false;
      document.getElementById('tool').innerText = 'false';
    }

    let rot = quat.fromEuler(quat.create(), this.rotation[0], this.rotation[1], this.rotation[2]);
    quat.mul(this.rotationQuat, this.rotationQuat, rot);

    // mat4.lookAt(this.viewMatrix,
    //     this.position,
    //     vec3.add(vec3.create(), this.position, vec3.fromValues(0.0, -1.0, .5)),
    //     vec3.fromValues(0.0, 1.0, 0.0));
    // mat4.fromXRotation(this.viewMatrix, this.rotation[1]);
    // mat4.rotateY(this.viewMatrix, this.viewMatrix, this.rotation[0]);
    mat4.fromQuat(this.viewMatrix, this.rotationQuat);
    mat4.translate(this.viewMatrix, this.viewMatrix, this.position);
    //mat4.fromRotationTranslation(this.viewMatrix, this.rotationQuat, this.position);
    //mat4.invert(this.viewMatrix, this.viewMatrix);

    const inverted = mat4.invert(mat4.create(), this.viewMatrix);
    vec3.normalize(this.right, <vec3> inverted.slice(0, 3));
    vec3.normalize(this.up, <vec3> inverted.slice(4, 7));
    vec3.normalize(this.forward, <vec3> inverted.slice(8, 11));

    mat4.multiply(this.viewMatrix, projectionMatrix, this.viewMatrix);
  }
}