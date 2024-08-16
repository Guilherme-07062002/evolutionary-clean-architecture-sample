import express, { Router } from "express";
import setupRoutes from "./main/config/setup-routes";
import { bootstrap } from "./main/nest/main";

export interface Env {
  URL: string;
}
export const app = express();
const router: Router = express.Router();

app.use(express.json());
app.use(router);

setupRoutes(app);

// NestJS initialization
bootstrap(app).then(() => {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
});
