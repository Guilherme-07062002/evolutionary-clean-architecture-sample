import { CreateTaskController } from './../../interface/controllers/create-task-controller';
import { CreateTaskUseCase } from './../../application/create-task-usecase';
import { FakeUserRepository } from './../../infra/repositories/fake/fake-task-repository';
import { MakeController } from './../ports/make-controller';

export const makeCreateTaskController = (): MakeController => {
    return () => {
        const repo = new FakeUserRepository()
        const usecase = new CreateTaskUseCase(repo)
        return new CreateTaskController(usecase);
    }
}