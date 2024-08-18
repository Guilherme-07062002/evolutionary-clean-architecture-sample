
import { ListTasksUseCase } from "../../application";
import { badRequest, ok } from "../../../../main/helpers";
import { ApplicationError } from "../../../../main/errors";
import { Request, Response } from "express";

export class ListTasksController {
  constructor(private readonly usecase: ListTasksUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const result = await this.usecase.execute();
    if (result instanceof ApplicationError) return badRequest(response, result);
    
    return ok(response, result);
  }
}
