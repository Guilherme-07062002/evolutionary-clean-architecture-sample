import { UpdateTaskUsecase } from "../../../modules/tasks/application";
import { FakeTaskRepository } from "../../../modules/tasks/infra/repositories/fake";
import { UpdateTaskController } from "../../../modules/tasks/interface/controllers";
import { MakeController } from "../../ports";

export const makeUpdateTaskController = (): MakeController => {
  return () => {
    const repo = new FakeTaskRepository();
    const usecase = new UpdateTaskUsecase(repo);
    return new UpdateTaskController(usecase);
  };
};