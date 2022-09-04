import Renderer from "./renderer";
import Game from "./game";
import {mat4} from "gl-matrix";

const canvas = document.getElementById('canvas') as HTMLCanvasElement;

const renderer = new Renderer();
const game = new Game();

const projectionMatrix = mat4.create();

const configureRenderer = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const aspect = Math.abs(canvas.width / canvas.height);
  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 10000000);

  renderer.configure(canvas.width, canvas.height);
}


renderer.init(canvas).then(async () => {

  window.addEventListener('resize', configureRenderer, false);
  window.addEventListener('click', () => {
    canvas.requestPointerLock();
  });

  await game.init(renderer.device);

  configureRenderer();

  const doFrame = (timestamp: number) => {
    game.update(renderer.device, projectionMatrix, timestamp).then(() => {
      renderer.render(e => game.draw(e));
      requestAnimationFrame(doFrame);
    });
  };
  requestAnimationFrame(doFrame);
});
