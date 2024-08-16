import { TaskRepository } from "./../domain/repositories/task-repository";
import { Task } from "./../domain/entities/task";
import { UseCase } from "./../domain/ports/usecase";
import { CreateTaskDTO } from "../domain/dtos";

export class CreateTaskUseCase implements UseCase<CreateTaskDTO, Task | null> {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute(data: CreateTaskDTO): Promise<Task | null> {
    const response = await this.taskRepository.create(data);
    return response;
  }
}
