import { Router } from "express";
import taskRoutes from "../routes/task-routes";

export default (router: Router): void => {
  taskRoutes("/task", router);
};
