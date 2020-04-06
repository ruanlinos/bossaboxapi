// @ts-nocheck
/* eslint-disable no-undef */
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

require('dotenv/config');
const Tool = require('../models/Tool');

const connection = new Sequelize(dbConfig);

Tool.init(connection);

module.exports = connection;
