const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/', async (req, res) => {
  const resp = await axios.get('http://service2-svc:3002');
  res.send(`Service1 -> ${resp.data}`);
});

app.listen(port, () => console.log(`Service1 escuchando en ${port}`));