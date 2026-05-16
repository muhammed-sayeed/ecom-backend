import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodObject } from 'zod';

import { ValidationError } from '../errors/validation-error.js';

export const validate = (schema: ZodObject<any>) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const message = error.issues
          .map((err: { message: string }) => err.message)
          .join(', ');

        return next(new ValidationError(message));
      }

      return next(error);
    }
  };
};