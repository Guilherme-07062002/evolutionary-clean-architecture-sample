
import { CreateTaskDTO, UpdateTaskDTO } from '../../../domain/dtos';
import { Task } from '../../../domain/entities';
import { ApplicationError, EntityNotFoundError } from '../../../domain/errors';
import { TaskRepository } from './../../../domain/repositories/task-repository';

export class FakeTaskRepository implements TaskRepository {
  remove(id: string): Promise<Task | EntityNotFoundError> {
    return new ApplicationError('This action removes a task') as any;
  }
  update(data: UpdateTaskDTO): Promise<Task | EntityNotFoundError> {
    return new ApplicationError('This action updates a task') as any;
  }
  list(): Promise<Task[]> {
    return new ApplicationError('This action returns all tasks') as any;
  }

  async create(data: CreateTaskDTO): Promise<Task> {
    return new Task({ id: 1, description: data.description });
  }
}