import { Request, Response } from "./http";

export interface Controller {
    handle(request: Request): Promise<Response>
}