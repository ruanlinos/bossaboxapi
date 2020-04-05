const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
require('dotenv/config');
const Tool = require('../models/Tool');

const connection = process.env.NODE_ENV === 'development'
  ? new Sequelize(dbConfig.development)
  : new Sequelize(process.env.DATABASE_URL);

Tool.init(connection);

module.exports = connection;
