import { Response } from "../../domain/ports";

export function ok(data: unknown): Response {
  return {
    status: 200,
    body: data
  };
}

export function created(data: unknown): Response {
  return {
    status: 201,
    body: data
  };
}

export function badRequest(data: unknown): Response {
  return {
    status: 400,
    body: data
  };
}

export function unauthorized(data: unknown): Response {
  return {
    status: 401,
    body: data
  };
}

export function forbidden(data: unknown): Response {
  return {
    status: 403,
    body: data
  };
}

export function notFound(data: unknown): Response {
  return {
    status: 404,
    body: data
  };
}