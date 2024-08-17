import { ListTasksUseCase } from "../../../modules/tasks/application";
import { FakeTaskRepository } from "../../../modules/tasks/infra/repositories/fake";
import { ListTasksController } from "../../../modules/tasks/interface/controllers";
import { MakeController } from "../../ports";



export const makeListTasksController = (): MakeController => {
  return () => {
    const repo = new FakeTaskRepository();
    const usecase = new ListTasksUseCase(repo);
    return new ListTasksController(usecase);
  };
};