import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestApplicationOptions } from "@nestjs/common";
import { Express } from "express-serve-static-core";
import { ExpressAdapter } from "@nestjs/platform-express";

export async function bootstrap(expressApp: Express | NestApplicationOptions | undefined) {
    const expressAdapter = new ExpressAdapter(expressApp);
    const app = await NestFactory.create(AppModule, expressAdapter);
    await app.init();
}
