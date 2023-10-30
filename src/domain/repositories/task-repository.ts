import { Task } from './../entities/task';
import { createTaskDTO, removeTaskDTO, updateTaskDTO } from './../dtos/task-dtos';
import { EntityNotFoundError } from '../errors';

export interface TaskRepository {
    create(data: createTaskDTO): Promise<Task | null>
    remove(data: removeTaskDTO): Promise<boolean | EntityNotFoundError>
    update(data: updateTaskDTO): Promise<boolean | EntityNotFoundError>
    list(): Promise<Task[]>
}