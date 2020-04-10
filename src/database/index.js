const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

require('dotenv/config');
const Tool = require('../models/Tool');

const nodeEnv = process.env.NODE_ENV;

if (nodeEnv === 'development') {
  const connection = new Sequelize(dbConfig.development);
  Tool.init(connection);
  module.exports = connection;
} else if (nodeEnv === 'test') {
  const connection = new Sequelize(dbConfig.test);
  Tool.init(connection);
  module.exports = connection;
} else {
  const connection = new Sequelize(dbConfig.production);
  Tool.init(connection);
  module.exports = connection;
}
