import { Request, Response } from "express";
import { ListTasksUseCase } from "../../../modules/tasks/application";
import { FakeTaskRepository } from "../../../modules/tasks/infra/repositories/fake";
import { ListTasksController } from "../../../modules/tasks/interface/controllers";

export const makeListTasksController = () => {
  const repo = new FakeTaskRepository();
  const usecase = new ListTasksUseCase(repo);
  const controller = new ListTasksController(usecase);
  
  return async (req: Request, res: Response) => {
    await controller.handle(req, res);
  };
};