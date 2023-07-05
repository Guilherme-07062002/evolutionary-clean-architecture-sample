import express, { Router } from 'express';
import { adaptExpressRoute } from '../adapter/adapt-express-router';
import { makeCreateTaskController } from '../factories/makeCreateTaskController';

const router: Router = express.Router();

router.post('/', adaptExpressRoute(makeCreateTaskController()));

export default router;