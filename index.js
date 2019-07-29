const app = require('express')();
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');

const {
  getRandomInt
} = require('./helpers');

app.use(cors);

const server = http.createServer(app);
const io = socketIO(server)
const port = process.env.PORT || 5000;

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
    getRandomInt(10000, 100000) //send new temperature every 10s-100s
  );
});

server.listen(port, () => console.log(`Listening on port ${port}`));
