import { Static, Type } from "@sinclair/typebox";

const product = Type.Partial(
  Type.Object({
    name: Type.String(),
    _id: Type.String(),
    rating: Type.Number(),
    price: Type.Number(),
    featured: Type.Boolean(),
    createdAt: Type.String(),
    updatedAt: Type.String(),
  })
);

const products = Type.Array(product);

export const getAllProductsSchema = {
  tags: ["product"],
  description: "Returns all prodcuts",
  query: Type.Partial(
    Type.Object({
      name: Type.String(),
      limit: Type.String(),
      page: Type.String(),
      featured: Type.String(),
      sort: Type.String(),
      fields: Type.String(),
      numericFilters: Type.String(),
    })
  ),
  response: {
    200: products,
  },
};

export interface ProductsQueryParams
  extends Omit<Partial<Static<typeof getAllProductsSchema.query>>, "name"> {
  name?: { $regex: string; $options: string } | string;
}
