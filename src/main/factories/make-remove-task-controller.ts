import { RemoveTaskUseCase } from "../../application";
import { Env } from "../../index";
import { RemoveTaskController } from "../../interface/controllers";
import { MakeController } from "../ports/make-controller";
import { MongoTaskRepository } from "../../infra/repositories/mongo";

export const makeRemoveTaskController = (): MakeController => {
  return (env: Env) => {
    const repo = new MongoTaskRepository(env.URL)
    const usecase = new RemoveTaskUseCase(repo)
    return new RemoveTaskController(usecase)
  }
}