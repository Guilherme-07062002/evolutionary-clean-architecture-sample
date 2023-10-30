import express, { Router } from 'express';
import { adaptExpressRoute } from '../adapter';
import { makeCreateTaskController } from '../factories';

const router: Router = express.Router();

router.post('/', adaptExpressRoute(makeCreateTaskController()));

export default router;