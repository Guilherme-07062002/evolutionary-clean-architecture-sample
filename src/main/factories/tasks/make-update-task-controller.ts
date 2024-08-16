import { UpdateTaskUsecase } from "../../../tasks/application";
import { FakeTaskRepository } from "../../../tasks/infra/repositories/fake";
import { UpdateTaskController } from "../../../tasks/interface/controllers";
import { MakeController } from "../../ports";

export const makeUpdateTaskController = (): MakeController => {
  return () => {
    const repo = new FakeTaskRepository();
    const usecase = new UpdateTaskUsecase(repo);
    return new UpdateTaskController(usecase);
  };
};