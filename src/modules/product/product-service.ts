import { Product, ProductModel } from "./product-model";

export async function getAllProducts(queryObj: any): Promise<Product[]> {
    return ProductModel.find(queryObj);
  }