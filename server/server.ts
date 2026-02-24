import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import userRouter from "./routes/user.route.js";
import projectRouter from "./routes/project.route.js";
import { stripeWebhook } from "./controllers/stripeWebhook.js";

const app = express();

const options = {
  origin: process.env.TRUSTED_ORIGINS?.split(",") || [],
  credentials: true,
};

// Middleware
app.use(cors(options));

app.post(
  "/api/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);

app.use(express.json({ limit: "50mb" }));

const port = process.env.PORT || 3000;

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});

app.use("/api/user", userRouter);
app.use("/api/project", projectRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
