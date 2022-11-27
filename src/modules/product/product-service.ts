import { ProductsQueryParams } from './product-schema';
import { Product, ProductModel } from "./product-model";
import { ProductAPI } from './product-api';

export async function getAllProducts(reqQuery: ProductsQueryParams): Promise<Product[]> {
  const features = new ProductAPI(ProductModel.find(), reqQuery)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const products = await features.query;
  return products;
}
