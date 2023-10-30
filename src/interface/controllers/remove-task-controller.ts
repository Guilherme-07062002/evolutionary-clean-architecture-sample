import { removeTaskDTO } from "@/domain/dtos"
import { Controller, Request, Response, UseCase } from "@/domain/ports"
import { badRequest, notFound, ok } from '../adapters';
import { EntityNotFoundError } from "../../domain/errors";

namespace Request {
  export type Params = {
    id: number
  }
}

export class RemoveTaskController implements Controller {
  constructor(
    private readonly useCase: UseCase
  ) { }

  async handle(request: Request<unknown, Request.Params>): Promise<Response> {
    const { id } = request.params
    if (!id) return badRequest({ message: "id is required" })

    const response = await this.useCase.execute(request.params as removeTaskDTO)
    if (response instanceof EntityNotFoundError) return notFound(response.message)

    return ok(response)
  }
}