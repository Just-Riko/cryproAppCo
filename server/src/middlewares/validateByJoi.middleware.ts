import { NextFunction, Request, Response } from "express";
import { joiTransactionRequest } from "../joi/crypto.joi";
import { CreateError } from "../utils/createError.util";

export const validateTransactionRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const target = req.body;
  const joiError = joiTransactionRequest.validate(target).error;

  if (joiError) {
    next(CreateError.badRequest("Bad request"));
    return;
  }
  next();
};
