interface Point {
  x: number;
  y: number;
}

export default class Mouse {
  private readonly keys: Map<string, boolean>;
  private lastKeys: Map<string, boolean>;
  public position: Point;

  constructor() {
    this.position = { x: 0, y: 0 };
  }

  init() {
    const mousemove = (e: MouseEvent) => {
      this.position.x += e.movementX;
      this.position.y += e.movementY;
    }

    const keyup = ({ key }: KeyboardEvent)  => {
      this.keys.delete(key.toLowerCase());
    }

    document.addEventListener('mousemove', mousemove);
    //document.addEventListener('keyup', keyup);
  }

  update() {
    this.position.x = 0;
    this.position.y = 0;
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