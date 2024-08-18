import { CreateTaskDTO, UpdateTaskDTO } from "../dtos";

export interface TaskRepository {
  create(data: CreateTaskDTO): Promise<unknown>;
  remove(id: string): Promise<unknown>;
  update(data: UpdateTaskDTO): Promise<unknown>;
  list(): Promise<unknown>;
}
