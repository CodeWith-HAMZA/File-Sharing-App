"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DB_NAME = "FileSharingApp";
const DB_URL = "mongodb+srv://HamzaJavedShaikh:12@cluster0.blo8xq3.mongodb.net/" + DB_NAME;
const connectToDB = async () => {
    try {
        const options = {};
        await mongoose_1.default.connect(DB_URL, options);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
exports.default = connectToDB;
