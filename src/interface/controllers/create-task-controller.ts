import { createTaskDTO } from './../../domain/dtos/task-dtos';
import { UseCase } from './../../domain/ports/usecase';
import { Request, Response } from './../../domain/ports/http';
import { Controller } from './../../domain/ports/controller';
import { created } from '../adapters';

namespace Request {
    export type Body = {
        id: number,
        description: string
    }
}

export class CreateTaskController implements Controller {
    constructor(
        private readonly useCase: UseCase
    ) { }
    async handle(request: Request<Request.Body>): Promise<Response> {
        const body = request.body

        const res = await this.useCase.execute(body as createTaskDTO)
        return created(res)
    }
}