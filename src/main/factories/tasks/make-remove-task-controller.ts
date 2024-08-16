import { Env } from "@/index";
import { MakeController } from "@/main/ports";
import { RemoveTaskUseCase } from "@/tasks/application";
import { FakeTaskRepository } from "@/tasks/infra/repositories/fake";
import { RemoveTaskController } from "@/tasks/interface/controllers";

export const makeRemoveTaskController = (): MakeController => {
  return (env: Env) => {
    const repo = new FakeTaskRepository();
    const usecase = new RemoveTaskUseCase(repo);
    return new RemoveTaskController(usecase);
  };
};