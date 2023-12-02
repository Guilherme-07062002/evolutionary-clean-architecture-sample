import express, { Router } from "express";
import setupRoutes from "./main/config/setup-routes";

export interface Env {
  URL: string;
}
export const app = express();
const router: Router = express.Router();

app.use(express.json());
app.use(router);

setupRoutes(app);

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
