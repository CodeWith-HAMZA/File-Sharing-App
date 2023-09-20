import { Response as ExpressResponse } from "express";

// CustomResponse interface extending ExpressResponse to include custom methods
interface CustomResponse extends ExpressResponse {
  // Method to send a custom message with a specified status code
  sendWithCustomMessage(message: string, statusCode: number): void;

  // Method to send JSON data with a specified status code
  sendJSON(data: Record<string, any>, statusCode: number): void;
}

export default CustomResponse;
import { CustomResponse } from "./CustomResponse";

/**
 * Utility function to send a custom response with a specified message and status code.
 * @param res - The response object.
 * @param message - The custom message to be sent.
 * @param statusCode - The HTTP status code to be set.
 */
export function sendCustomResponse(
  res: CustomResponse,
  message: string,
  statusCode: number
) {
  res.status(statusCode).send(`Custom message: ${message}`);
}

/**
 * Utility function to send a JSON response with specified data and status code.
 * @param res - The response object.
 * @param data - The JSON data to be sent.
 * @param statusCode - The HTTP status code to be set.
 */
export function sendJSONResponse(
  res: CustomResponse,
  data: Record<string, any>,
  statusCode: number
) {
  res.status(statusCode).json(data);
}
