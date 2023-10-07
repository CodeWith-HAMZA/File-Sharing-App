import mongoose, { Date } from "mongoose";
interface IFileSchema extends Document {
  originalname: string;
  filename: string;
  mimetype: string;
  size: number;
  uploadedAt: Date;
}
const fileSchema = new mongoose.Schema<IFileSchema>({
  originalname: String,
  filename: String,
  mimetype: String,
  size: Number,
  uploadedAt: { type: Date, default: Date.now },
});
const File = mongoose.model<IFileSchema>("File", fileSchema);
export default File;
