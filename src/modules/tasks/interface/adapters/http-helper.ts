import { Response } from "express";
import { ApplicationError } from "../../domain/errors";

export function ok<T>(res: Response, data: T): Response {
  return res.status(200).json({
    data,
  });
}

export function created<T>(res: Response, data: T): Response {
  return res.status(201).json({
    data,
  });
}

export function noContent(res: Response): Response {
  return res.status(204).send();
}

export function badRequest(res: Response, error: ApplicationError): Response {
  return res.status(400).json({
    error: error.message,
  });
}

export function notFound(res: Response, error: ApplicationError): Response {
  return res.status(404).json({
    error: error.message,
  });
}

export function unauthorized(res: Response, error: ApplicationError): Response {
  return res.status(401).json({
    error: error.message,
  });
}