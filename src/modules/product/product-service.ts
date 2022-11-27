import { Product, ProductModel } from "./product-model";

export async function getAllProducts(): Promise<Product[]> {
    return ProductModel.find({});
  }