import { connect, set } from "mongoose";
import { MONGO_URL } from "./environments";

const connectDB = async () => {
  try {
    set("strictQuery", false);
    await connect(MONGO_URL);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err as Error);
    process.exit(1);
  }
};

export default connectDB;