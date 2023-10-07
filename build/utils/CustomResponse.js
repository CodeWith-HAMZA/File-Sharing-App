"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customResponse = void 0;
// Implement the interface
exports.customResponse = {
    sendCustomResponse: (res, message, statusCode) => {
        res.status(statusCode).send(`Custom message: ${message}`);
    },
    sendJSONResponse: (res, data, statusCode) => {
        res.status(statusCode).json(data);
    },
};
