const app = require('express')();
const http = require('http');
const socketIO = require('socket.io');

const {
  getRandomInt,
  getRandomTemperature
} = require('./helpers');

const server = http.createServer(app);
const io = socketIO(server)
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send(`The server is listening on port ${port}`));

io.on('connection', socket => {
  console.log('New client connected');

  function _emitTemperatureChange() {
    io.sockets.emit('temperature change', {
      'time': Date.now(),
      'value': getRandomTemperature()
    });

    setTimeout(
      _emitTemperatureChange,
      getRandomInt(10000, 15000) //send new temperature every 10s-15s
    );
  }

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  _emitTemperatureChange();
});

server.listen(port, () => console.log(`Listening on port ${port}`));
