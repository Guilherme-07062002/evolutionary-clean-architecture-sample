import { TaskRepository } from "./../domain/repositories/task-repository";
import { Task } from "./../domain/entities/task";
import { UseCase } from "./../domain/ports/usecase";

export class CreateTaskUseCase implements UseCase<string, Task | null> {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute(description: string): Promise<Task | null> {
    const response = await this.taskRepository.create(description);
    return response;
  }
}
