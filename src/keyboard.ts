export default class Keyboard {
  private readonly keys: Map<string, boolean>;
  private lastKeys: Map<string, boolean>;

  constructor() {
    this.keys = new Map<string, boolean>();
    this.lastKeys = new Map<string, boolean>();
  }

  init() {
    const keydown = (e: KeyboardEvent) => {
      e.preventDefault();
      this.keys.set(e.key.toLowerCase(), true);
    }
  
    const keyup = ({ key }: KeyboardEvent)  => {
      this.keys.delete(key.toLowerCase());
    }

    document.addEventListener('keydown', keydown);
    document.addEventListener('keyup', keyup);
  }

  update() {
    this.lastKeys = new Map(this.keys);
  }

  keydown(key: string) {
    return this.keys.get(key) === true;
  }

  keyup(key: string) {
    return this.keys.get(key) !== true;
  }

  keypress(key: string) {
    return this.keys.get(key) === true && this.lastKeys.get(key) !== true;
  }
}