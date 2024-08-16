import { UpdateTaskDTO } from "../domain/dtos";
import { Task } from "../domain/entities";
import { EntityNotFoundError } from "../domain/errors";
import { UseCase } from "../domain/ports";
import { TaskRepository } from "../domain/repositories";

export class UpdateTaskUsecase
implements UseCase<UpdateTaskDTO, Task | EntityNotFoundError> {
  constructor(private readonly taskRepository: TaskRepository) { }
  async execute(data: UpdateTaskDTO): Promise<Task | EntityNotFoundError> {
    const response = await this.taskRepository.update(data);
    return response;
  }
}
