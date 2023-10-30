import { CreateTaskController } from '../../interface/controllers';
import { CreateTaskUseCase } from '../../application';
import { FakeUserRepository } from '../../infra/repositories/fake';
import { MakeController } from '../ports/make-controller';

export const makeCreateTaskController = (): MakeController => {
    return () => {
        const repo = new FakeUserRepository()
        const usecase = new CreateTaskUseCase(repo)
        return new CreateTaskController(usecase);
    }
}