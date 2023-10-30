import { createTaskDTO } from '../../../domain/dtos';
import { Task } from '../../../domain/entities';
import { TaskRepository } from './../../../domain/repositories/task-repository';

export class FakeUserRepository implements TaskRepository {
    async create(data: createTaskDTO): Promise<Task> {
        return new Task(1, data.description);
    }
}