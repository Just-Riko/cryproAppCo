import { NextFunction, Request, Response } from "express";
import { CreateError } from "../utils/createError.util";

export const isPageValid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page = +req.params.page;

  if (page < 0 || isNaN(page)) {
    next(CreateError.badRequest("Wrong page value"));
    return;
  }
  next();
};
