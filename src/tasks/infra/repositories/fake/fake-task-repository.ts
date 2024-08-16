
import { CreateTaskDTO, UpdateTaskDTO } from '@/tasks/domain/dtos';
import { EntityNotFoundError } from '@/tasks/domain/errors';
import { Task } from '../../../domain/entities';
import { TaskRepository } from './../../../domain/repositories/task-repository';

export class FakeTaskRepository implements TaskRepository {
  remove(id: string): Promise<Task | EntityNotFoundError> {
    throw new Error('Method not implemented.');
  }
  update(data: UpdateTaskDTO): Promise<Task | EntityNotFoundError> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<Task[]> {
    throw new Error('Method not implemented.');
  }

  async create(data: CreateTaskDTO): Promise<Task> {
    return new Task({ id: 1, description: data.description });
  }
}