
import { Controller } from "@nestjs/common/interfaces";
import { ListTasksUseCase } from "../../application";
import { Response } from "../../domain/ports";
import { badRequest, ok } from "../adapters";
import { ApplicationError } from "../../domain/errors";

export class ListTasksController implements Controller {
  constructor(private readonly usecase: ListTasksUseCase) { }

  async handle(): Promise<Response> {
    const res = await this.usecase.execute();
    if (res instanceof ApplicationError) return badRequest({ message: res.message});
    
    return ok(res);
  }
}
