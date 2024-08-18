import { Response } from "express";

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

export function badRequest(res: Response, error: Error): Response {
  return res.status(400).json({
    error: error.message,
  });
}

export function notFound(res: Response, error: Error): Response {
  return res.status(404).json({
    error: error.message,
  });
}

export function unauthorized(res: Response, error: Error): Response {
  return res.status(401).json({
    error: error.message,
  });
}