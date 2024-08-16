import { Controller, Request, Response } from "@/tasks/domain/ports";
import { badRequest, notFound, ok } from "../adapters";
import { EntityNotFoundError } from "../../domain/errors";
import { UpdateTaskUsecase } from "@/tasks/application";

namespace Request {
  export type Body = {
    new_description: string;
  };
  export type Params = {
    id: string;
  };
}

export class UpdateTaskController implements Controller {
  constructor(private readonly usecase: UpdateTaskUsecase) { }

  async handle(
    request: Request<Request.Body, Request.Params>
  ): Promise<Response> {
    const body = request.body;
    const { id } = request.params;

    if (!body) return badRequest({ message: "missing body" });
    if (!id) return badRequest({ message: "id is required" });

    const response = await this.usecase.execute({
      id,
      new_description: body.new_description,
    });
    if (response instanceof EntityNotFoundError)
      return notFound(response.message);

    return ok(response);
  }
}
