import multer, { DiskStorageOptions, StorageEngine } from "multer";
import path from "path";

const getFileSize = (sizeInMbs: number): number => 1024 * 1024 * sizeInMbs;

const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-file-${file.originalname}`;
    cb(null, uniqueName);
  },
} as DiskStorageOptions);

const upload = multer({
  storage,
});
// const arrayOfFiles = upload.array("files", 5);

export default upload;
