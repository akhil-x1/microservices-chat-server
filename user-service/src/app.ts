import express, { Express } from 'express';
import messageRoutes from './routes/messageRoutes';

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(messageRoutes);

export default app;
