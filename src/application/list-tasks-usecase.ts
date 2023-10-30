import { Task } from '@/domain/entities';
import { UseCase } from "@/domain/ports";
import { TaskRepository } from '@/domain/repositories';

export class ListTasksUseCase implements UseCase {
  constructor(
    private readonly taskRepository: TaskRepository
  ) { }
  async execute(): Promise<Task[]> {
    const response = await this.taskRepository.list()
    return response
  }
}