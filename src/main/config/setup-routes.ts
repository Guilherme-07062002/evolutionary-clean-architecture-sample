import express, { Application } from 'express';
import taskRoutes from '../routes/task-routes';

export default (app: Application): void => {
    app.use(express.json());
    app.use('/task', taskRoutes);
};