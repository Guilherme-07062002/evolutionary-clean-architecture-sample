import { Task } from "@/tasks/domain/entities";
import { UseCase } from "@/tasks/domain/ports";
import { TaskRepository } from "@/tasks/domain/repositories";

export class ListTasksUseCase implements UseCase {
  constructor(private readonly taskRepository: TaskRepository) { }
  async execute(): Promise<Task[]> {
    const response = await this.taskRepository.list();
    return response;
  }
}
