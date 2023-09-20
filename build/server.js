"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wah_1 = __importDefault(require("./folder1/wah"));
const connectToDB_1 = __importDefault(require("./config/connectToDB"));
const files_1 = __importDefault(require("./routes/files"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
(async () => {
    (0, connectToDB_1.default)();
})();
// * Routes
app.use("/api/files", files_1.default);
app.get("/", (req, res) => {
    return res.send("Hey");
});
app.get("/ehtu", (req, res) => {
    return res.send("aoeue" + wah_1.default[1]);
});
app.listen(PORT);
