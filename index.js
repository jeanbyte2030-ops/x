const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Hello World!\n');
  socket.end();
});

server.listen(80, () => {
  console.log('Servidor TCP rodando na porta 80');
});
