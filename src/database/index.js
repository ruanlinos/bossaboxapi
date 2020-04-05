// @ts-nocheck
/* eslint-disable no-undef */
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

require('dotenv/config');
const Tool = require('../models/Tool');

const connection = process.env.NODE_ENV === 'production'
  ? new Sequelize(process.env.DATABASE_URL)
  : new Sequelize(dbConfig.development);

Tool.init(connection);

module.exports = connection;
