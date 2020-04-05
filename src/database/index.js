const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
require('dotenv/config');
const Tool = require('../models/Tool');

const connection = process.env.NODE_ENV === 'development'
  ? new Sequelize(dbConfig.development)
  : new Sequelize(dbConfig.production);

Tool.init(connection);

module.exports = connection;
