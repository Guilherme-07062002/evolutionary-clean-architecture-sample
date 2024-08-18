import { UpdateTaskDTO } from "../domain/dtos";
import { TaskRepository } from "../domain/repositories";

export class UpdateTaskUsecase {
  constructor(private readonly taskRepository: TaskRepository) { }
  
  async execute(data: UpdateTaskDTO) {
    const response = await this.taskRepository.update(data);
    return response;
  }
}
