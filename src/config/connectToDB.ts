import mongoose, { ConnectOptions } from "mongoose";
const DB_NAME = "FileSharingApp";
const DB_URL =
  "mongodb+srv://HamzaJavedShaikh:12@cluster0.blo8xq3.mongodb.net/" + DB_NAME;
const connectToDB = async (): Promise<void> => {
  try {
    const options: ConnectOptions = {};

    await mongoose.connect(DB_URL, options);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDB;
