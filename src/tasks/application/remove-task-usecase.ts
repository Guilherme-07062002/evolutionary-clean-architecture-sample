import { Task } from "@/tasks/domain/entities";
import { EntityNotFoundError } from "@/tasks/domain/errors";
import { UseCase } from "@/tasks/domain/ports";
import { TaskRepository } from "@/tasks/domain/repositories";

export class RemoveTaskUseCase
  implements UseCase<string, Task | EntityNotFoundError> {
  constructor(private readonly taskRepository: TaskRepository) { }
  async execute(id: string): Promise<Task | EntityNotFoundError> {
    const response = await this.taskRepository.remove(id);
    return response;
  }
}
