import { Task } from "../domain/entities";
import { EntityNotFoundError } from "../domain/errors";
import { UseCase } from "../domain/ports";
import { TaskRepository } from "../domain/repositories";

export class RemoveTaskUseCase
implements UseCase<string, Task | EntityNotFoundError> {
  constructor(private readonly taskRepository: TaskRepository) { }
  async execute(id: string): Promise<Task | EntityNotFoundError> {
    const response = await this.taskRepository.remove(id);
    return response;
  }
}
