const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes');
const swaggerDocument = require('./swagger.json');
require('dotenv/config');
require('./database');


const app = express();
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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
