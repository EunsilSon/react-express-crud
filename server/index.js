import http from 'http';
import app from './app.js';
import debugLib from 'debug';
import { connectDB } from "./db/db.js";

const debug = debugLib('server:server');

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.on('error', onError);
server.on('listening', onListening);

connectDB()
    .then(() => {
      server.listen(port, () => {
        console.log(`"Server running on port ${port}"`);
      });
    })
    .catch((e) => {
      console.log("Failed connect to MongoDB...", e);
    });

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const  bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
