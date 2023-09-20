import { Router } from "express";
import { handlePostFiles } from "../controllers/files";
import multer from "multer";
let st = multer({ dest: "upload/" });

const fileRouter = Router();
fileRouter.route("/").get(st.single("avatar"), (req, res) => {
  console.log(req.files, req.file, ";)");
});

export default fileRouter;
