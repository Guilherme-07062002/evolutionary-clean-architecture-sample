
import { badRequest, ok } from "../adapters";
import { ApplicationError } from "../../domain/errors";
import { RemoveTaskUseCase } from "../../application";
import { Request, Response } from "express";

export class RemoveTaskController {
  constructor(private readonly usecase: RemoveTaskUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const params = request.params;
    if (!params.id) return badRequest(response, new Error("id is required"));

    const result = await this.usecase.execute(request.params.id);
    if (result instanceof ApplicationError) return badRequest(response, new Error(result.message));

    return ok(response, result);
  }
}
