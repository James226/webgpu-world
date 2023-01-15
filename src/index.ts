import Stats from 'stats.js'
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
  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100000000);

  renderer.configure(canvas.width, canvas.height);
}

// You can pass an appId, or don't pass anything and use a steam_appid.txt file
const steamworks: typeof import('steamworks.js') = eval('typeof require === "function" && require(\'steamworks.js\')');

if (steamworks) {
  const client = steamworks.init(480)

// Print Steam username
  console.log(client.localplayer.getName())

// Tries to activate an achievement
  if (!client.achievement.activate('ACH_WIN_ONE_GAME')) {
    console.log('Sad fish')
  }

  client.auth.getSessionTicket().then(ticket =>
  {
    const buffer = ticket.getBytes();
    console.log('ticket', buffer);
  });

  client.matchmaking.getLobbies().then(async lobbies => {
    console.log('Lobbies', lobbies)
    const lobby = await lobbies[0].join();
    console.log(lobby.getMembers());


    lobby.leave();
  });
}


renderer.init(canvas).then(async () => {

  window.addEventListener('resize', configureRenderer, false);
  window.addEventListener('click', () => {
    canvas.requestPointerLock();
  });

  await game.init(renderer.device);

  configureRenderer();

  const times = [];
  let fps;
  let lastUpdate = performance.now();

  const stats = new Stats();
  stats.showPanel(0);
  document.body.appendChild(stats.dom);


  const doFrame = (timestamp: number) => {
    stats.begin();
    game.update(renderer.device, projectionMatrix, timestamp).then(() => {
      renderer.render(e => game.draw(e));
      const now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;

      if (now - lastUpdate > 1000) {
        document.getElementById('tool').innerText = fps;
        lastUpdate = now;
      }

      stats.end();
      requestAnimationFrame(doFrame);
    });
  };
  requestAnimationFrame(doFrame);
});
