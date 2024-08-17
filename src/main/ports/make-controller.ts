import { Env } from "../../index";
import { Controller } from "../../modules/tasks/domain/ports";

export type MakeController = (env: Env) => Controller