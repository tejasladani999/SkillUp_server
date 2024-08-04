import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const Errormiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resource not found. invalid: ${err.pth}`;
    err = new ErrorHandler(message, 400);
  }

  //Duplicate Key error
  if (err.code === 11000) {
    const message = `Duplicate field value: ${Object.keys(
      err.keyValue
    )} exists`;
    err = new ErrorHandler(message, 400);
  }

  //Wrong jwt error
  if (err.name === "JsonWebTokenError") {
    const message = "Json web token is invalid, please log in again";
    err = new ErrorHandler(message, 401);
  }

  //jwt Token expired error
  if (err.name === "TokenExpiredError") {
    const message = "Json web token has expired, please log in again";
    err = new ErrorHandler(message, 401);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
