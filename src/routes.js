const express = require('express');
const routes = express.Router();

const registerController = require('./controllers/registerController');
const eventController = require('./controllers/eventController');
const devocionalController = require('./controllers/devocionalController')


routes.get('/register', registerController.index);
routes.get('/register/:id', registerController.show);
routes.post('/register', registerController.store);
routes.put('/register/:id', registerController.update);
routes.delete('/register/:id', registerController.destroy);

routes.get('/event', eventController.index);
routes.get('/event/:id', eventController.show);
routes.post('/event', eventController.store);
routes.put('/event/:id', eventController.update);
routes.delete('/event/:id', eventController.destroy);

routes.get('/devocional', devocionalController.index);
routes.get('/devocional/:id', devocionalController.show);
routes.post('/devocional', devocionalController.store);
routes.put('/devocional/:id', devocionalController.update);
routes.delete('/devocional/:id', devocionalController.destroy);

module.exports = routes;