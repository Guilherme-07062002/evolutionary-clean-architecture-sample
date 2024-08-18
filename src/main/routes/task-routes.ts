import { Router } from "express";
import {
  makeCreateTaskController,
  makeRemoveTaskController,
  makeUpdateTaskController,
  makeListTasksController,
} from "../factories/tasks";

export default (prefix: string, router: Router): void => {
  router.get(`${prefix}`, makeListTasksController());
  router.delete(`${prefix}/:id`, makeRemoveTaskController());
  router.post(`${prefix}`, makeCreateTaskController());
  router.put(`${prefix}/:id`, makeUpdateTaskController());
};
