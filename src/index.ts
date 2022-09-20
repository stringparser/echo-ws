import { startServer } from '@/src/server';

const port = parseInt(process.env.NODE_PORT || '8080', 10);
const path = process.env.WS_ECHO_PATH || '/echo';

startServer({path, port});