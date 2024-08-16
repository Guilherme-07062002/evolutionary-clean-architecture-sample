import { RemoveTaskUseCase } from "../../../tasks/application";
import { FakeTaskRepository } from "../../../tasks/infra/repositories/fake";
import { RemoveTaskController } from "../../../tasks/interface/controllers";
import { MakeController } from "../../ports";


export const makeRemoveTaskController = (): MakeController => {
  return () => {
    const repo = new FakeTaskRepository();
    const usecase = new RemoveTaskUseCase(repo);
    return new RemoveTaskController(usecase);
  };
};