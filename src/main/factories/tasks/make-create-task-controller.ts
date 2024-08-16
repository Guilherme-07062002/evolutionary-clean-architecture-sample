import { Env } from "@/index";
import { MakeController } from "@/main/ports";
import { CreateTaskUseCase } from "@/tasks/application";
import { FakeTaskRepository } from "@/tasks/infra/repositories/fake";
import { CreateTaskController } from "@/tasks/interface/controllers";


export const makeCreateTaskController = (): MakeController => {
  return (env: Env) => {
    const repo = new FakeTaskRepository();
    const usecase = new CreateTaskUseCase(repo);
    return new CreateTaskController(usecase);
  };
};
