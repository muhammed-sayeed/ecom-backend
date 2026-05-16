import { Response } from 'express';

type ResponseOptions<T> = {
  statusCode?: number;
  success?: boolean;
  message?: string;
  data?: T;
};

export const sendResponse = <T>(
  res: Response,
  options: ResponseOptions<T>,
) => {
  const {
    statusCode = 200,
    success = true,
    message = 'Success',
    data,
  } = options;

  return res.status(statusCode).json({
    success,
    message,
    data,
  });
};