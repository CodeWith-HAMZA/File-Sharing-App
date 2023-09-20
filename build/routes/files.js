"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
let st = (0, multer_1.default)({ dest: "upload/" });
const fileRouter = (0, express_1.Router)();
fileRouter.route("/").get(st.single("avatar"), (req, res) => {
    console.log(req.files, req.file, ";)");
});
exports.default = fileRouter;
