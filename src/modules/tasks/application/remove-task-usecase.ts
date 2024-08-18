import { TaskRepository } from "../domain/repositories";

export class RemoveTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) { }

  async execute(id: string) {
    const response = await this.taskRepository.remove(id);
    return response;
  }
}
