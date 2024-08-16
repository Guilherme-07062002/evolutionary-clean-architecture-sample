export type TaskDTO = {
  id: string;
  description: string;
};

export type CreateTaskDTO = Omit<TaskDTO, "id">;
export type UpdateTaskDTO = Partial<TaskDTO>;
