import express from "express";
import wah from "./folder1/wah";
import connectToDB from "./config/connectToDB";
import fileRouter from "./routes/files";
const app = express();
const PORT = process.env.PORT || 3000;

(async () => {
  connectToDB();
})();

// * Routes
app.use("/api/files", fileRouter);

app.get("/", (req, res) => {
  return res.send("Hey");
});

app.get("/ehtu", (req, res) => {
  return res.send("aoeue" + wah[1]);
});

app.listen(PORT);
