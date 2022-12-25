import ReconnectingWebSocket from 'reconnecting-websocket';
import Player from "./player";
import {vec3} from "gl-matrix";

const apiUrl = 'http://localhost:3000';

export default class Network {
  private client: EventSource;
  private clientId: string;
  private socket: ReconnectingWebSocket;
  private players: Map<string, Player>;
  private createPlayer: (string) => Player;

  private constructor(client: EventSource, socket: ReconnectingWebSocket, players: Map<string, Player>, createPlayer: (string) => Player) {
    this.client = client;
    this.socket = socket;
    this.players = players;
    this.createPlayer = createPlayer;
  }

  static init(players: Map<string, Player>, createPlayer: (string) => Player): Promise<Network> {
    const client = new EventSource(`${apiUrl}/events/foo`);
    const socket = new ReconnectingWebSocket(`ws://localhost:3000/client`);

    const network = new Network(client, socket, players, createPlayer);

    return new Promise((resolve) => {
      network.socket.onmessage = (e: MessageEvent) => {
        const message = JSON.parse(e.data);
        if (message.type === 'connected') {
          console.log(message);
          network.clientId = message.clientId;
          socket.onmessage = network.processMessage.bind(network);
          resolve(network);
        }
      }
    });
  }

  async sendData (data: any) {
    this.socket.send(JSON.stringify({ ...data, clientId: this.clientId }));
  }

  private async processMessage(e: MessageEvent) {
    const message = JSON.parse(e.data);
    console.log(message);

    switch (message.type) {
      case 'client_connected':
        if (message.clientId === this.clientId) {
          break;
        }
        this.createPlayer(message.clientId);
        break;
      case 'position':
        if (message.clientId === this.clientId) {
          break;
        }

        let player = this.players[message.clientId];
        if (!player) {
          player = this.createPlayer(message.clientId);
        }
        vec3.set(player.position, message.position.x, message.position.y, message.position.z);
        break;

    }
  }
}