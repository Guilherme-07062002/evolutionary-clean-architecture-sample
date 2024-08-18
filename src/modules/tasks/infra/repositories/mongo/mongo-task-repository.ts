import { ApplicationError, EntityNotFoundError } from "../../../domain/errors";
import { CreateTaskDTO, TaskDTO, UpdateTaskDTO } from "../../../domain/dtos";
import { TaskRepository } from "../../../domain/repositories";
import mongoose, { Model } from "mongoose";

export interface TaskDocument extends mongoose.Document {
  id?: number;
  description: string;
}

export const TaskSchema = new mongoose.Schema<TaskDocument>({
  id: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
});

export class MongoTaskRepository implements TaskRepository {
  private taskModel: Model<TaskDocument>;

  constructor(url: string) {
    mongoose.connect(url);
    this.taskModel = mongoose.model<TaskDocument>("Task", TaskSchema);
  }

  async create(data: CreateTaskDTO): Promise<TaskDTO | ApplicationError> {
    const task = await this.taskModel.create(data);
    if (!task) return new ApplicationError("Error to create task");

    return { 
      id: task._id, 
      description: task.description
    };
  }

  async remove(id: string): Promise<TaskDTO | EntityNotFoundError> {
    const task = await this.taskModel.findOne({ _id: id });
    if (!task) return new EntityNotFoundError("Task");

    await this.taskModel.deleteOne({ _id: id });
    return { 
      id: task._id, 
      description: task.description 
    };
  }

  async update(data: UpdateTaskDTO): Promise<TaskDTO | EntityNotFoundError> {
    const task = await this.taskModel.findOne({ _id: data.id });
    if (!task) return new EntityNotFoundError("Task");

    await this.taskModel.updateOne(
      { _id: data.id },
      { description: data.description }
    );
    return {
      id: task._id,
      description: task.description
    };
  }

  async list(): Promise<TaskDTO[]> {
    const result = await this.taskModel.find();
    const response = result.map(
      (task: any) => {
        return {
          id: task._id, 
          description: task.description 
        };
      }
    );

    return response;
  }
}
