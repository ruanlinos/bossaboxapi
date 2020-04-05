const express = require('express');
const ToolsController = require('./Controllers/ToolsController');

const routes = express.Router();
routes.get('/teste', (req, res) => res.status(200).json({ message: 'hi' }));
routes.get('/tools', ToolsController.index);
routes.put('/tools/:id', ToolsController.update);
routes.post('/tools', ToolsController.store);
routes.delete('/tools/:id', ToolsController.delete);

module.exports = routes;
