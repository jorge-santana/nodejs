import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.end('Aplicação Web servida pelo módulo HTTP nativo do Node.js');
});

server.listen(port, hostname, () => {
  console.log(`Servidor em execução: http://${hostname}:${port}/`);
});
