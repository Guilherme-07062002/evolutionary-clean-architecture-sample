import { ListTasksUseCase } from "../../../tasks/application";
import { FakeTaskRepository } from "../../../tasks/infra/repositories/fake";
import { ListTasksController } from "../../../tasks/interface/controllers";
import { MakeController } from "../../ports";



export const makeListTasksController = (): MakeController => {
  return () => {
    const repo = new FakeTaskRepository();
    const usecase = new ListTasksUseCase(repo);
    return new ListTasksController(usecase);
  };
};