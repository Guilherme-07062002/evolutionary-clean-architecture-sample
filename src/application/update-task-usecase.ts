import { TaskRepository } from '@/domain/repositories';
import { updateTaskDTO } from "@/domain/dtos";
import { UseCase } from "@/domain/ports";
import { EntityNotFoundError } from '@/domain/errors';

export class UpdateTaskUsecase implements UseCase<updateTaskDTO, boolean | EntityNotFoundError>{
  constructor(
    private readonly taskRepository: TaskRepository
  ) { }
  async execute(data: updateTaskDTO): Promise<boolean | EntityNotFoundError> {
    const response = await this.taskRepository.update(data as updateTaskDTO)
    return response
  }
}