
import { Controller } from "@nestjs/common/interfaces";
import { ListTasksUseCase } from "../../application";
import { Response } from "../../domain/ports";
import { ok } from "../adapters";

export class ListTasksController implements Controller {
  constructor(private readonly usecase: ListTasksUseCase) { }

  async handle(): Promise<Response> {
    const res = await this.usecase.execute();
    return ok(res);
  }
}
