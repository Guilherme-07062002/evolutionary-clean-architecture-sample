import { badRequest, ok } from "../adapters";
import { ApplicationError } from "../../domain/errors";
import { UpdateTaskUsecase } from "../../application";
import { Request, Response } from "express";

export class UpdateTaskController {
  constructor( private readonly usecase: UpdateTaskUsecase ) { }

  async handle( request: Request, response: Response ): Promise<Response> {
    const payloadIsInvalid = this.validateUpdateTask(request);
    if (payloadIsInvalid) return badRequest(response, payloadIsInvalid);

    const result = await this.usecase.execute({
      id: request.params.id,
      description: request.body.description,
    });
    
    if (result instanceof ApplicationError) return badRequest(response, result);

    return ok(response, result);
  }

  validateUpdateTask = (request: any) => {
    if (!request.body.description) return new ApplicationError("Missing description");

    if (!request.params.id) return new ApplicationError("id is required");
  };
}
