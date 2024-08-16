
import { badRequest, notFound, ok } from "../adapters";
import { EntityNotFoundError } from "../../domain/errors";
import { RemoveTaskUseCase } from "../../application";
import { Controller, Request, Response } from "../../domain/ports";

namespace Request {
  export type Params = {
    id: string;
  };
}

export class RemoveTaskController implements Controller {
  constructor(private readonly usecase: RemoveTaskUseCase) { }

  async handle(request: Request<unknown, Request.Params>): Promise<Response> {
    const { id } = request.params;
    if (!id) return badRequest({ message: "id is required" });

    const response = await this.usecase.execute(request.params.id);
    if (response instanceof EntityNotFoundError)
      return notFound(response.message);

    return ok(response);
  }
}
