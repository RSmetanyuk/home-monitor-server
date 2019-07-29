const app = require('express')();
const http = require('http');
const socketIO = require('socket.io');

const {
  getRandomInt
} = require('./helpers');

const server = http.createServer(app);
const io = socketIO(server)
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send(`The server is listening on port ${port}`));

io.origins('*:*');

io.on('connection', socket => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  setInterval(
    () => io.sockets.emit('temperature change', {
      'time': Date.now(),
      'value': getRandomInt(15, 29)
    }),
    getRandomInt(10000, 30000) //send new temperature every 10s-30s
  );
});

server.listen(port, () => console.log(`Listening on port ${port}`));
