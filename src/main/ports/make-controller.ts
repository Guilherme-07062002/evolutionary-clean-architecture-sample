import { Env } from "@/index";
import { Controller } from "../../tasks/domain/ports";

export type MakeController = (env: Env) => Controller