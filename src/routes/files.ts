import { Router } from "express";
import { handlePostFiles } from "../controllers/files";

const fileRouter = Router();
fileRouter.route("/").get(handlePostFiles);

export default fileRouter;
