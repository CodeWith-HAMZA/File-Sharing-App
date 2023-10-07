import { Request, Response } from "express";
import { customResponse } from "../utils/CustomResponse";

import multer, { DiskStorageOptions, StorageEngine } from "multer";
import path from "path";

export function handlePostFiles(req: Request, res: Response) {
  customResponse.sendJSONResponse(res, { name: "hamza" }, 200);
}
