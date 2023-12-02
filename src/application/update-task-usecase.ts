import { TaskRepository } from "@/domain/repositories";
import { updateTaskDTO } from "@/domain/dtos";
import { UseCase } from "@/domain/ports";
import { EntityNotFoundError } from "@/domain/errors";
import { Task } from "@/domain/entities";

export class UpdateTaskUsecase
  implements UseCase<updateTaskDTO, Task | EntityNotFoundError>
{
  constructor(private readonly taskRepository: TaskRepository) {}
  async execute(data: updateTaskDTO): Promise<Task | EntityNotFoundError> {
    const response = await this.taskRepository.update(data);
    return response;
  }
}
