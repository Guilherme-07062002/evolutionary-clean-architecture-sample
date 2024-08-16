import { Router } from "express";
import { adaptExpressRoute } from "../adapter";
import {
  makeCreateTaskController,
  makeRemoveTaskController,
  makeUpdateTaskController,
  makeListTasksController,
} from "../factories/tasks";

export default (prefix: string, router: Router): void => {
  router.get(`${prefix}`, adaptExpressRoute(makeListTasksController()));
  router.delete(`${prefix}/:id`, adaptExpressRoute(makeRemoveTaskController()));
  router.post(`${prefix}`, adaptExpressRoute(makeCreateTaskController()));
  router.put(`${prefix}/:id`, adaptExpressRoute(makeUpdateTaskController()));
};
