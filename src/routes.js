const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);
// req.query = To access query params ( for filter)
// req.params = To access route params ( for edition, delete)
// req.body = To acesss request body 
routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.post('/spots/:id/bookings', BookingController.store);


routes.get('/dashboard', DashboardController.show);


module.exports = routes;