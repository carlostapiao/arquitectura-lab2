const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002;

app.get('/', async (req, res) => {
  const resp = await axios.get('http://service3-svc:3003');
  res.send(`Service2 -> ${resp.data}`);
});

app.listen(port, () => console.log(`Service2 escuchando en ${port}`));