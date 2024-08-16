import { Env } from "@/index";
import { MakeController } from "@/main/ports";
import { ListTasksUseCase } from "@/tasks/application";
import { FakeTaskRepository } from "@/tasks/infra/repositories/fake";
import { ListTasksController } from "@/tasks/interface/controllers";


export const makeListTasksController = (): MakeController => {
  return (env: Env) => {
    const repo = new FakeTaskRepository();
    const usecase = new ListTasksUseCase(repo);
    return new ListTasksController(usecase);
  };
};