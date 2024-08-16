import { CreateTaskUseCase } from "../../../tasks/application";
import { FakeTaskRepository } from "../../../tasks/infra/repositories/fake";
import { CreateTaskController } from "../../../tasks/interface/controllers";
import { MakeController } from "../../ports";



export const makeCreateTaskController = (): MakeController => {
  return () => {
    const repo = new FakeTaskRepository();
    const usecase = new CreateTaskUseCase(repo);
    return new CreateTaskController(usecase);
  };
};
