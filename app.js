const express = require('express');
const app = express();
const port = 3000;

app.get('/temperature', (req, res) => {
  res.send({
    'time': Date.now(),
    'temperature': 23
  });
});

app.listen(port);
