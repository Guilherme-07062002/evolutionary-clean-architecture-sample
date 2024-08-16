import { Env } from "@/index";
import { MakeController } from "@/main/ports";
import { UpdateTaskUsecase } from "@/tasks/application";
import { FakeTaskRepository } from "@/tasks/infra/repositories/fake";
import { UpdateTaskController } from "@/tasks/interface/controllers";

export const makeUpdateTaskController = (): MakeController => {
  return (env: Env) => {
    const repo = new FakeTaskRepository();
    const usecase = new UpdateTaskUsecase(repo);
    return new UpdateTaskController(usecase);
  };
};