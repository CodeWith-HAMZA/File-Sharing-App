import { Response } from "express";

// Define an interface for custom response functions
export interface CustomResponseFunctions {
  sendCustomResponse: (
    res: Response,
    message: string,
    statusCode: number
  ) => void;
  sendJSONResponse: (
    res: Response,
    data: Record<string, any>,
    statusCode: number
  ) => void;
}

// Implement the interface
export const customResponse: CustomResponseFunctions = {
  sendCustomResponse: (res, message, statusCode) => {
    res.status(statusCode).send(`Custom message: ${message}`);
  },
  sendJSONResponse: (res, data, statusCode) => {
    res.status(statusCode).json(data);
  },
};
