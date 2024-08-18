import { badRequest, ok } from "../adapters";
import { ApplicationError } from "../../domain/errors";
import { UpdateTaskUsecase } from "../../application";
import { Request, Response } from "express";

export class UpdateTaskController {
  constructor( private readonly usecase: UpdateTaskUsecase ) { }

  async handle( request: Request, response: Response ): Promise<Response> {
    const body = request.body;
    const params = request.params;

    if (!body) return badRequest(response, new Error("missing body") );

    if (!params.id) return badRequest(response, new Error("id is required"));

    const result = await this.usecase.execute({
      id: params.id,
      description: body.new_description,
    });
    
    if (result instanceof ApplicationError) return badRequest(response, new Error(result.message));

    return ok(response, result);
  }
}
