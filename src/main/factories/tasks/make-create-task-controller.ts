import { Request, Response } from "express";
import { CreateTaskUseCase } from "../../../modules/tasks/application";
import { FakeTaskRepository } from "../../../modules/tasks/infra/repositories/fake";
import { CreateTaskController } from "../../../modules/tasks/interface/controllers";

export const makeCreateTaskController = () => {
  const repo = new FakeTaskRepository();
  const usecase = new CreateTaskUseCase(repo);
  const controller = new CreateTaskController(usecase);
  
  return async (req: Request, res: Response) => {
    await controller.handle(req, res);
  };
};
