import { Controller, Request, Response } from "@/tasks/domain/ports";
import { ok } from "../adapters";
import { ListTasksUseCase } from "@/tasks/application";
export class ListTasksController implements Controller {
  constructor(private readonly usecase: ListTasksUseCase) { }

  async handle(): Promise<Response> {
    const res = await this.usecase.execute();
    return ok(res);
  }
}
