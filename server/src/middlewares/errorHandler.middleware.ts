import { NextFunction, Request, Response } from "express";

export const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(err.status || 400).json(err.data);
  } catch (error) {
    return res.status(500).json(error);
  }
};
