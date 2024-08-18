import { TaskRepository } from "../domain/repositories";

export class ListTasksUseCase {
  constructor(private readonly taskRepository: TaskRepository) { }
  
  async execute() {
    const response = await this.taskRepository.list();
    return response;
  }
}
