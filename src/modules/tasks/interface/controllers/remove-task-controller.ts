
import { badRequest, ok } from "../adapters";
import { ApplicationError } from "../../domain/errors";
import { RemoveTaskUseCase } from "../../application";
import { Request, Response } from "express";

export class RemoveTaskController {
  constructor(private readonly usecase: RemoveTaskUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const payloadIsInvalid = this.validateRemoveTask(request);
    if (payloadIsInvalid) return badRequest(response, payloadIsInvalid);

    const result = await this.usecase.execute(request.params.id);
    if (result instanceof ApplicationError) return badRequest(response, result);

    return ok(response, result);
  }

  validateRemoveTask = (request: any) => {
    if (!request.params.id) return new ApplicationError("id is required");
  };
}
