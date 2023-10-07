"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const files_1 = require("../controllers/files");
const fileRouter = (0, express_1.Router)();
fileRouter.route("/").get(files_1.handlePostFiles);
exports.default = fileRouter;
