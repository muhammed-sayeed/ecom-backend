import { NextFunction, Request, Response } from 'express';

import { AppError } from '../errors/app-error.js';
import logger from '../logger/logger.js';

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.error(error);

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};