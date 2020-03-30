import { Router } from 'express';
import multer from 'multer';
// import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';

import SessionController from './app/controllers/SessionController';

import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
// import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const upload = multer(multerConfig);

const routes = new Router();

// routes.post('/users', UserController.store);

// AUTH
routes.post('/session', SessionController.store);
routes.use(authMiddleware);

// RECIPIENTS
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:recipientId', RecipientController.update);

// DELIVERYMANS
routes.get('/deliverymans', DeliverymanController.index);
routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:deliverymanId', DeliverymanController.update);
routes.delete('/deliverymans/:deliverymanId', DeliverymanController.delete);

// FILES
routes.post('/files', upload.single('file'), FileController.store);

// NOTIFICATIONS
// routes.get('/notifications', NotificationController.index);
// routes.put('/notifications/:id', NotificationController.update);

export default routes;
