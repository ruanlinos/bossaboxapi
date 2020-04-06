const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('dotenv/config');
require('./database');

const app = express();
app.use(
  cors({
    exposedHeaders: 'X-Total-Count',
    allowedHeaders: ['searchTag', 'content-type'],
  }),
);
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000);

module.exports = app;
