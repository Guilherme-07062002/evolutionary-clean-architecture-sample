import { CreateTaskDTO, TaskDTO, UpdateTaskDTO } from "../dtos";
import { ApplicationError } from "../errors";

export interface TaskRepository {
  create(data: CreateTaskDTO): Promise<TaskDTO | ApplicationError>;
  remove(id: string): Promise<TaskDTO | ApplicationError>;
  update(data: UpdateTaskDTO): Promise<TaskDTO | ApplicationError>;
  list(): Promise<TaskDTO[] | ApplicationError>;
}
