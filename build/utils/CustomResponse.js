"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendJSONResponse = exports.sendCustomResponse = void 0;
exports.default = CustomResponse_1.CustomResponse;
const CustomResponse_1 = require("./CustomResponse");
/**
 * Utility function to send a custom response with a specified message and status code.
 * @param res - The response object.
 * @param message - The custom message to be sent.
 * @param statusCode - The HTTP status code to be set.
 */
function sendCustomResponse(res, message, statusCode) {
    res.status(statusCode).send(`Custom message: ${message}`);
}
exports.sendCustomResponse = sendCustomResponse;
/**
 * Utility function to send a JSON response with specified data and status code.
 * @param res - The response object.
 * @param data - The JSON data to be sent.
 * @param statusCode - The HTTP status code to be set.
 */
function sendJSONResponse(res, data, statusCode) {
    res.status(statusCode).json(data);
}
exports.sendJSONResponse = sendJSONResponse;
