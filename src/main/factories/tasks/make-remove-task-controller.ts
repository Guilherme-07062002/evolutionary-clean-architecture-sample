import { RemoveTaskUseCase } from "../../../modules/tasks/application";
import { FakeTaskRepository } from "../../../modules/tasks/infra/repositories/fake";
import { RemoveTaskController } from "../../../modules/tasks/interface/controllers";
import { MakeController } from "../../ports";


export const makeRemoveTaskController = (): MakeController => {
  return () => {
    const repo = new FakeTaskRepository();
    const usecase = new RemoveTaskUseCase(repo);
    return new RemoveTaskController(usecase);
  };
};