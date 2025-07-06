import mongoose from "mongoose";
import { MONGO_URL } from "./ServerConfig.js";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDB;