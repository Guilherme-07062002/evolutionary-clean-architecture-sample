import { CreateTaskUseCase } from "../../../modules/tasks/application";
import { FakeTaskRepository } from "../../../modules/tasks/infra/repositories/fake";
import { CreateTaskController } from "../../../modules/tasks/interface/controllers";
import { MakeController } from "../../ports";



export const makeCreateTaskController = (): MakeController => {
  return () => {
    const repo = new FakeTaskRepository();
    const usecase = new CreateTaskUseCase(repo);
    return new CreateTaskController(usecase);
  };
};
