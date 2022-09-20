import { startServer } from '@/src/server';
import {WebSocket, WebSocketServer} from 'ws';

let client: WebSocket;
let server: WebSocketServer;

const debug = (...args: any[]) => console.log('[test]', ...args);

beforeAll(() => {
  const port = parseInt(process.env.NODE_PORT || '8080', 10);

  debug('using port', port, 'for websocket server');

  server = startServer({port});
  client = new WebSocket(`ws://localhost:${port}/echo`);

  server.once('connection', () => {
    debug('connection established', client.url);
  });
});

afterAll(async () => {
  await client.close();
  await server.close();

  await new Promise<void>((resolve) => setTimeout(resolve, 1000));
});

it('used the default port and path', () => {
  const expected = expect.objectContaining({path: '/echo', port: 8080});

  expect(server.options).toEqual(expected);
});

it('can connect client to WebSocketServer', (done) => {
  client.once('open', () => {
    debug('WebSocket client connected');
    done();
  });
});

it('can echo messages', (done) => {
  expect.assertions(1);

  client.on('message', (data) => {
    debug('received message', data);
    const msg = data.toString('utf8');
    expect(msg).toBe('ping');
    done();
  });

  client.send('ping');
});