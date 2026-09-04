import { Router } from 'express';

const messageRoutes = Router();

messageRoutes.get('/get/:receiverId');

messageRoutes.post('/send');

export default messageRoutes;
