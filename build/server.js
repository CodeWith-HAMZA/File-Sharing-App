"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectToDB_1 = __importDefault(require("./config/connectToDB"));
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("./utils/multer"));
const file_model_1 = __importDefault(require("./models/file.model"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "views"));
(async () => {
    await (0, connectToDB_1.default)();
})();
// * Routes /files
// app.use("/api/files", fileRouter);
app.get("/upload", (req, res) => {
    res.render("upload.ejs");
});
// Handle file upload and save file details to MongoDB
app.post("/upload", multer_1.default.single("file"), async (req, res) => {
    const file = new file_model_1.default({
        originalname: req.file && req.file.originalname,
        filename: req.file && req.file.filename,
        mimetype: req.file && req.file.mimetype,
        size: req.file && req.file.size,
    });
    await file.save();
    res.redirect("/");
});
// Display uploaded files on the main page
app.get("/", async (req, res) => {
    const files = await file_model_1.default.find().sort({ uploadedAt: -1 });
    res.render("index.ejs", { files });
});
app.get("/download/:filename", (req, res) => {
    const filename = req.params.filename;
    const file = path_1.default.join(__dirname, "../uploads", filename);
    console.log();
    res.download(file, (err) => {
        if (err) {
            // Handle the error, such as file not found
            res.status(404).send("File not found");
        }
    });
});
app.listen(PORT);
