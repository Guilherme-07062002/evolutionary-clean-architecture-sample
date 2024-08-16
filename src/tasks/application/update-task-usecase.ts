import { TaskRepository } from "@/tasks/domain/repositories";
import { updateTaskDTO } from "@/tasks/domain/dtos";
import { UseCase } from "@/tasks/domain/ports";
import { EntityNotFoundError } from "@/tasks/domain/errors";
import { Task } from "@/tasks/domain/entities";

export class UpdateTaskUsecase
  implements UseCase<updateTaskDTO, Task | EntityNotFoundError> {
  constructor(private readonly taskRepository: TaskRepository) { }
  async execute(data: updateTaskDTO): Promise<Task | EntityNotFoundError> {
    const response = await this.taskRepository.update(data);
    return response;
  }
}
