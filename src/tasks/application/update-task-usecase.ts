import { TaskRepository } from "@/tasks/domain/repositories";
import { UpdateTaskDTO } from "@/tasks/domain/dtos";
import { UseCase } from "@/tasks/domain/ports";
import { EntityNotFoundError } from "@/tasks/domain/errors";
import { Task } from "@/tasks/domain/entities";

export class UpdateTaskUsecase
implements UseCase<UpdateTaskDTO, Task | EntityNotFoundError> {
  constructor(private readonly taskRepository: TaskRepository) { }
  async execute(data: UpdateTaskDTO): Promise<Task | EntityNotFoundError> {
    const response = await this.taskRepository.update(data);
    return response;
  }
}
