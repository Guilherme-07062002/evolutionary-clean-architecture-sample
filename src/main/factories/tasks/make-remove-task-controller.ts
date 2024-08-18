import { Request, Response } from "express";
import { RemoveTaskUseCase } from "../../../modules/tasks/application";
import { FakeTaskRepository } from "../../../modules/tasks/infra/repositories/fake";
import { RemoveTaskController } from "../../../modules/tasks/interface/controllers";

export const makeRemoveTaskController = () => {
  const repo = new FakeTaskRepository();
  const usecase = new RemoveTaskUseCase(repo);
  const controller = new RemoveTaskController(usecase);
  
  return async (req: Request, res: Response) => {
    await controller.handle(req, res);
  };
};