import express from "express";
import { registerRoutes } from "./routes";

export const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use((req, res, next) => next());
  registerRoutes(app);

  return app;
};

export default createApp;
