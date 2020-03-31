const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Tool = require('../models/Tool');

const connection = new Sequelize(dbConfig);

Tool.init(connection);

module.exports = connection;
