const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/temperature', (req, res) => {
  res.send([{
    'time': Date.now(),
    'value': 29
  }]);
});

app.listen(port);
