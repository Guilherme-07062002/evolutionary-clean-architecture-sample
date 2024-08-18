import { TaskRepository } from "./../domain/repositories/task-repository";
import { CreateTaskDTO } from "../domain/dtos";

export class CreateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute(data: CreateTaskDTO) {
    const response = await this.taskRepository.create(data);
    return response;
  }
}
