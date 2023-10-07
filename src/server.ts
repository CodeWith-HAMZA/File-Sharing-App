import express from "express";
import connectToDB from "./config/connectToDB";
import fileRouter from "./routes/files";
import path from "path";
import upload from "./utils/multer";
import File from "./models/file.model";
const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
(async () => {
  await connectToDB();
})();

// * Routes /files
// app.use("/api/files", fileRouter);
app.get("/upload", (req, res) => {
  res.render("upload");
});

// Handle file upload and save file details to MongoDB
app.post("/upload", upload.single("file"), async (req, res) => {
  const file = new File({
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
  const files = await File.find().sort({ uploadedAt: -1 });
  res.render("index", { files });
});

app.get("/download/:filename", (req, res) => {
  const filename = req.params.filename;
  const file = path.join(__dirname, "../uploads", filename);

  console.log();
  res.download(file, (err) => {
    if (err) {
      // Handle the error, such as file not found
      res.status(404).send("File not found");
    }
  });
});

app.listen(PORT);
