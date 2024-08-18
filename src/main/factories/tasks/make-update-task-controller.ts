import { Request, Response } from "express";
import { UpdateTaskUsecase } from "../../../modules/tasks/application";
import { FakeTaskRepository } from "../../../modules/tasks/infra/repositories/fake";
import { UpdateTaskController } from "../../../modules/tasks/interface/controllers";

export const makeUpdateTaskController = () => {
  const repo = new FakeTaskRepository();
  const usecase = new UpdateTaskUsecase(repo);
  const controller = new UpdateTaskController(usecase);

  return async (req: Request, res: Response) => {
    await controller.handle(req, res);
  };
};