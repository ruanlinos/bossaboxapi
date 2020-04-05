// @ts-nocheck
/* eslint-disable no-undef */
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

require('dotenv/config');
const Tool = require('../models/Tool');

const connection = process.env.NODE_ENV === 'production'
  ? new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',

    port: match[4],

    host: match[3],
    logging: true, // false
  })
  : new Sequelize(dbConfig.development);

Tool.init(connection);

module.exports = connection;
