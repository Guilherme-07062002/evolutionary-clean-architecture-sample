import { removeTaskDTO } from "@/domain/dtos";
import { EntityNotFoundError } from "@/domain/errors";
import { UseCase } from "@/domain/ports";
import { TaskRepository } from "@/domain/repositories";

export class RemoveTaskUseCase implements UseCase<removeTaskDTO, boolean | EntityNotFoundError>{
  constructor(
    private readonly taskRepository: TaskRepository
  ) { }
  async execute(data: removeTaskDTO): Promise<boolean | EntityNotFoundError> {
    const response = await this.taskRepository.remove(data)
    return response
  }
}