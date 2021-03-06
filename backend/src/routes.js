const express = require('express');
const cripto = require('crypto');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentCotroller')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/session', SessionController.create)

routes.get('/ongs',OngController.index); 
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes;