const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
// @ts-ignore
require('dotenv/config');
const Tool = require('../models/Tool');

const connection = process.env.NODE_ENV === 'production'
  // @ts-ignore
  ? new Sequelize(process.env.DATABASE_URL)
  // @ts-ignore
  : new Sequelize(dbConfig.development);

Tool.init(connection);

module.exports = connection;
