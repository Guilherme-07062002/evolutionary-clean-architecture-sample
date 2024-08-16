import { CreateTaskController } from "../../tasks/interface/controllers";
import { CreateTaskUseCase } from "../../tasks/application";
import { MakeController } from "../ports/make-controller";
import { MongoTaskRepository } from "../../tasks/infra/repositories/mongo";
import { Env } from "../../index";

export const makeCreateTaskController = (): MakeController => {
  return (env: Env) => {
    const repo = new MongoTaskRepository(env.URL);
    const usecase = new CreateTaskUseCase(repo);
    return new CreateTaskController(usecase);
  };
};
