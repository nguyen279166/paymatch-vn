import { Request, Response, Express } from "express";

export const registerRoutes = (app: Express) => {
  app.get("/health", (req: Request, res: Response) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  });
};
