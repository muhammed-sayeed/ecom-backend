import express from "express";
import cors from "cors";
import helmet from "helmet";

import prisma from "./prisma/client.js";
import { errorMiddleware } from "./shared/middlware/error.middleware.js";
import { NotFoundError } from "./shared/errors/not-found-error.js";
import { sendResponse } from "./shared/utils/send-response.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/health", (_, res) => {

  sendResponse(res, {
    message: "Server running",
  });
});

app.get("/test", async (_, res) => {
  const users = await prisma.user.findMany();

  sendResponse(res, {
    message: "Users fetched successfully",
    data: users,
  });
});

app.get("/error", async () => {
  throw new NotFoundError("Product not found");
});

app.use(errorMiddleware);

export default app;