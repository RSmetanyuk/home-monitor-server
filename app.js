const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/temperature', (req, res) => {
  res.send([{
    'time': Date.now(),
    'value': 29
  }]);
});

app.listen(port);
