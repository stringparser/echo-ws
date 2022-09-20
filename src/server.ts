import {ServerOptions, WebSocketServer} from 'ws';

export const startServer = (options: ServerOptions = {}) => {
  const {
    port = 8080,
    path = '/echo'
  } = options;

  const wss = new WebSocketServer({port, path});

  wss.on('connection', ws => {
    ws.on('message', (data, isBinary) => {
      ws.send(data, {binary: isBinary});
    });
  });

  return wss;
}
