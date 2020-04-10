const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

require('dotenv/config');
const Tool = require('../models/Tool');

const nodeEnv = process.env.NODE_ENV;

if (nodeEnv === 'development') {
  const connection = new Sequelize(dbConfig.development);
  Tool.init(connection);
  module.exports = connection;
}
if (nodeEnv === 'test') {
  const connection = new Sequelize(dbConfig.test);
  Tool.init(connection);
  module.exports = connection;
}
if (process.env.NODE_ENV === 'production') {
  const connection = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    define: {
      timestamps: false,
      underscored: true,
    },
  });
  Tool.init(connection);
  module.exports = connection;
}
