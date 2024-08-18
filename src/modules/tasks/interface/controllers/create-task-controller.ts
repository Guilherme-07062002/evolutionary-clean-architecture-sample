import { badRequest, created } from "../adapters";
import { CreateTaskUseCase } from "../../application";
import { Request, Response } from "express";
import { ApplicationError } from "../../domain/errors";

export class CreateTaskController {
  constructor(private readonly usecase: CreateTaskUseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {
    const payloadIsInvalid = this.validateCreateTask(request);
    if (payloadIsInvalid) return badRequest(response, payloadIsInvalid);

    const result = await this.usecase.execute(request.body);
    if (result instanceof ApplicationError) return badRequest(response, result);

    return created(response, result);
  }

  validateCreateTask = (request: any) => {
    if (!request.body.description) return new ApplicationError("Missing description");
  };
}
