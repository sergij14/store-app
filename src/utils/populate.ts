import { ProductModel } from "../modules/product/product-model";
import { connectDB } from "./connectDB";
import { logger } from "./logger";
import productsJson from "./products.json";

export async function populate() {
  try {
    await connectDB();
    await ProductModel.deleteMany({});
    await ProductModel.create(productsJson);
    process.exit(0);
  } catch (err) {
    logger.error("Could not populate data", err);
  }
}

