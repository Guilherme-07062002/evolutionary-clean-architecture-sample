import { CreateTaskDTO, UpdateTaskDTO } from "../dtos";
import { Task } from "../entities/task";
import { EntityNotFoundError } from "../errors";

export interface TaskRepository {
  create(data: CreateTaskDTO): Promise<Task | null>;
  remove(id: string): Promise<Task | EntityNotFoundError>;
  update(data: UpdateTaskDTO): Promise<Task | EntityNotFoundError>;
  list(): Promise<Task[]>;
}
