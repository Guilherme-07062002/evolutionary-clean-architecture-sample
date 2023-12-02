import { Controller, Request, Response } from "@/domain/ports";
import { ok } from "../adapters";
import { ListTasksUseCase } from "@/application";
export class ListTasksController implements Controller {
  constructor(private readonly usecase: ListTasksUseCase) {}

  async handle(): Promise<Response> {
    const res = await this.usecase.execute();
    return ok(res);
  }
}
