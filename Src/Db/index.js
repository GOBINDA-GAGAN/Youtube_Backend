import mongoose from "mongoose";
import { database_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.mongodb_uri}/${database_Name}`
    );

    
    console.log(`\nmongodb connection ok ${connectionInstance.connection.host}`);

    
  } catch (error) {
    console.error("database error", error);
    process.exit(1);
  }
};
export default connectDB;
