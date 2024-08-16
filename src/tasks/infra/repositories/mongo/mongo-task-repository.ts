import { EntityNotFoundError } from "../../../domain/errors";
import { updateTaskDTO } from "../../../domain/dtos";
import { Task } from "../../../domain/entities";
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

  async create(description: string): Promise<Task | null> {
    const task = await this.taskModel.create({ description });
    if (!task) return null;

    return new Task({ id: task._id, description: task.description });
  }

  async remove(id: string): Promise<Task | EntityNotFoundError> {
    const task = await this.taskModel.findOne({ _id: id });
    if (!task) return new EntityNotFoundError("Task");

    await this.taskModel.deleteOne({ _id: id });
    return new Task({ id: task._id, description: task.description });
  }

  async update(data: updateTaskDTO): Promise<Task | EntityNotFoundError> {
    const task = await this.taskModel.findOne({ _id: data.id });
    if (!task) return new EntityNotFoundError("Task");

    await this.taskModel.updateOne(
      { _id: data.id },
      { description: data.new_description }
    );
    return new Task({ id: task._id, description: data.new_description });
  }

  async list(): Promise<Task[]> {
    const result = await this.taskModel.find();
    const response = result.map(
      (task: any) => new Task({ id: task._id, description: task.description })
    );

    return response;
  }
}
