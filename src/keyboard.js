export default class Keyboard {
  constructor() {
    this.keys = {};
    this.lastKeys = {};
  }

  init() {
    const keydown = (e) => {
      e.preventDefault();
      this.keys[e.key.toLowerCase()] = true;
    }
  
    const keyup = ({ key })  => {
      delete this.keys[key.toLowerCase()];
    }

    document.addEventListener('keydown', keydown);
    document.addEventListener('keyup', keyup);
  }

  update() {
    this.lastKeys = { ...this.keys };
  }

  keydown(key) {
    return this.keys[key] === true;
  }

  keyup(key) {
    return this.keys[key] !== true;
  }

  keypress(key) {
    return this.keys[key] === true && this.lastKeys[key] !== true;
  }
}