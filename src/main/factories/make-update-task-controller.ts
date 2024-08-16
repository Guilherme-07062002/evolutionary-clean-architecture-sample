import { UpdateTaskController } from '../../tasks/interface/controllers';
import { UpdateTaskUsecase } from '../../tasks/application';
import { Env } from "../../index";
import { MakeController } from "../ports/make-controller";
import { MongoTaskRepository } from '../../tasks/infra/repositories/mongo';

export const makeUpdateTaskController = (): MakeController => {
  return (env: Env) => {
    const repo = new MongoTaskRepository(env.URL)
    const usecase = new UpdateTaskUsecase(repo)
    return new UpdateTaskController(usecase)
  }
}