import ReconnectingWebSocket from 'reconnecting-websocket';

const apiUrl = 'http://localhost:3000';

export default class Network {
  private client: EventSource;
  private clientId: string;
  private socket: ReconnectingWebSocket;

  private constructor(client: EventSource, socket: ReconnectingWebSocket) {
    this.client = client;
    this.socket = socket;
  }

  static init(): Promise<Network> {
    const client = new EventSource(`${apiUrl}/events/foo`);
    const socket = new ReconnectingWebSocket(`ws://localhost:3000/client`);

    const network = new Network(client, socket);

    return new Promise((resolve) => {
      network.socket.onmessage = (e: MessageEvent) => {
        const message = JSON.parse(e.data);
        if (message.type === 'connected') {
          console.log(message);
          network.clientId = message.clientId;
          socket.onmessage = network.processMessage;
          resolve(network);
        }
      }
    });
  }

  async sendData (data: any) {
    this.socket.send(JSON.stringify({ ...data, clientId: this.clientId }));
    // return await fetch(`${apiUrl}/update/foo`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ ...data, clientId: this.clientId })
    // });
  }

  private async processMessage(e: MessageEvent) {
    console.log(JSON.parse(e.data));
  }
}