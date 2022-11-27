import mongoose from "mongoose";
import { config } from "./config";
import { logger } from "./logger";

export async function connectDB() {
  const DB_STRING = config.DB_URI.replace("<password>", config.DB_PASSWORD);

  try {
    await mongoose.connect(DB_STRING);
    logger.info("connected to db");
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}

export function disconnectDB() {
  return mongoose.connection.close();
}
