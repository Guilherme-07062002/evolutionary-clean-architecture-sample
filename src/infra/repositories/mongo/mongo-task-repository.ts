import { EntityNotFoundError } from "../../../domain/errors";
import {
  createTaskDTO,
  removeTaskDTO,
  updateTaskDTO,
} from "../../../domain/dtos";
import { Task } from "../../../domain/entities";
import { TaskRepository } from "../../../domain/repositories";
import mongoose, { Model } from "mongoose";

export interface TaskDocument extends mongoose.Document {
  id?: number;
  description: string;
}

export const TaskSchema = new mongoose.Schema<TaskDocument>({
  id: {
    type: Number,
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

  async create(data: createTaskDTO): Promise<Task | null> {
    const task = await this.taskModel.create(data);
    if (!task) return null;

    return new Task(task.id, task.description);
  }

  async remove(data: removeTaskDTO): Promise<boolean | EntityNotFoundError> {
    const result = await this.taskModel.deleteOne({ _id: data.id });
    if (result.deletedCount == 0) return new EntityNotFoundError("Task");

    return true;
  }

  async update(data: updateTaskDTO): Promise<boolean | EntityNotFoundError> {
    const result = await this.taskModel.updateOne(
      { _id: data.id },
      { description: data.new_description }
    );
    if (result.modifiedCount == 0) return new EntityNotFoundError("Task");

    return true;
  }

  async list(): Promise<Task[]> {
    const result = await this.taskModel.find();
    const response = result.map(
      (task: any) => new Task(task.id, task.description)
    );

    return response;
  }
}
