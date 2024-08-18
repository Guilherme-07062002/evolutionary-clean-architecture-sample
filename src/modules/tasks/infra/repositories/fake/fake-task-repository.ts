
import { CreateTaskDTO, UpdateTaskDTO } from '../../../domain/dtos';
import { ApplicationError } from '../../../../../main/errors';
import { TaskRepository } from './../../../domain/repositories/task-repository';

export class FakeTaskRepository implements TaskRepository {
  async remove(id: string) {
    return new ApplicationError('This action removes a task');
  }
  async update(data: UpdateTaskDTO) {
    return new ApplicationError('This action updates a task');
  }
  async list() {
    return new ApplicationError('This action returns all tasks') ;
  }

  async create(data: CreateTaskDTO) {
    return new ApplicationError('This action creates a task');
  }
}