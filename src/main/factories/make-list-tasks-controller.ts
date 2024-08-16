import { MongoTaskRepository } from "../../tasks/infra/repositories/mongo/mongo-task-repository";
import { ListTasksUseCase } from "../../tasks/application";
import { Env } from "../../index";
import { ListTasksController } from "../../tasks/interface/controllers";
import { MakeController } from "../ports/make-controller";

export const makeListTasksController = (): MakeController => {
  return (env: Env) => {
    const repo = new MongoTaskRepository(env.URL)
    const usecase = new ListTasksUseCase(repo)
    return new ListTasksController(usecase)
  }
}