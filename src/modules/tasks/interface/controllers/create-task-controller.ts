import { badRequest, created } from "../adapters";
import { CreateTaskUseCase } from "../../application";
import { Request, Response } from "express";
import { ApplicationError } from "../../domain/errors";

export class CreateTaskController {
  constructor(private readonly usecase: CreateTaskUseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {
    const body = request.body;
    if (!body.description) return badRequest(response, new Error("Missing description"));

    const result = await this.usecase.execute(body);

    if (result instanceof ApplicationError) return badRequest(response, result);

    return created(response, result);
  }
}
