const express = require('express');
const ToolsController = require('./Controllers/ToolsController');

const routes = express.Router();
routes.get('/', (req, res) => { res.redirect('/docs'); });
routes.get('/tools', ToolsController.index);
routes.post('/tools', ToolsController.store);
routes.delete('/tools/:id', ToolsController.delete);

module.exports = routes;
