import { UseCase } from "./../../domain/ports/usecase";
import { Request, Response } from "./../../domain/ports/http";
import { Controller } from "./../../domain/ports/controller";
import { badRequest, created } from "../adapters";
import { CreateTaskUseCase } from "@/application";

namespace Request {
  export type Body = {
    description: string;
  };
}

export class CreateTaskController implements Controller {
  constructor(private readonly usecase: CreateTaskUseCase) {}
  async handle(request: Request<Request.Body>): Promise<Response> {
    const body = request.body;
    if (!body.description)
      return badRequest({ message: "Missing description" });

    const res = await this.usecase.execute(body.description);
    return created(res);
  }
}
