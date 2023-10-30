import { updateTaskDTO } from "@/domain/dtos";
import { Controller, Request, UseCase, Response } from "@/domain/ports";
import { badRequest, notFound, ok } from "../adapters";
import { EntityNotFoundError } from "../../domain/errors";

namespace Request {
  export type Body = {
    new_description: string
  }
  export type Params = {
    id: number
  }
}

export class UpdateTaskController implements Controller {
  constructor(
    private readonly useCase: UseCase
  ) { }

  async handle(request: Request<Request.Body, Request.Params>): Promise<Response> {
    const body = request.body
    const { id } = request.params

    if (!body) return badRequest({ message: "missing body" })
    if (!id) return badRequest({ message: "id is required" })

    const response = await this.useCase.execute({ id, new_description: body.new_description } as updateTaskDTO)
    if (response instanceof EntityNotFoundError) return notFound(response.message)

    return ok(response)
  }
}