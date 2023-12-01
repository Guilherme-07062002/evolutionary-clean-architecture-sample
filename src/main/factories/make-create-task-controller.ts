import { CreateTaskController } from "../../interface/controllers";
import { CreateTaskUseCase } from "../../application";
import { MakeController } from "../ports/make-controller";
import { MongoTaskRepository } from "../../infra/repositories/mongo";
import { Env } from "../../index";

export const makeCreateTaskController = (): MakeController => {
  return (env: Env) => {
    const repo = new MongoTaskRepository(env.URL);
    const usecase = new CreateTaskUseCase(repo);
    return new CreateTaskController(usecase);
  };
};
