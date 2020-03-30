const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Não é hello world');
});

app.listen(3000);
