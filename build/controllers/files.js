"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePostFiles = void 0;
const CustomResponse_1 = require("../utils/CustomResponse");
function handlePostFiles(req, res) {
    CustomResponse_1.customResponse.sendJSONResponse(res, { name: "hamza" }, 200);
}
exports.handlePostFiles = handlePostFiles;
