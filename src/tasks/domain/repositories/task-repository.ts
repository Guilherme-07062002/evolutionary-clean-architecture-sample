import { Task } from "../entities/task";
import { updateTaskDTO } from "../dtos/task-dtos";
import { EntityNotFoundError } from "../errors";

export interface TaskRepository {
  create(description: string): Promise<Task | null>;
  remove(id: string): Promise<Task | EntityNotFoundError>;
  update(data: updateTaskDTO): Promise<Task | EntityNotFoundError>;
  list(): Promise<Task[]>;
}
