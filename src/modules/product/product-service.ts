import { ProductsQueryParams } from './product-schema';
import { API } from "../../utils/API";
import { Product, ProductModel } from "./product-model";

export async function getAllProducts(reqQuery: ProductsQueryParams): Promise<Product[]> {
  const features = new API(ProductModel.find(), reqQuery)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const products = await features.query;
  return products;
}
