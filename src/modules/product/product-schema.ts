import { Static, Type } from "@sinclair/typebox";

const product = Type.Object({
  name: Type.String(),
  _id: Type.String(),
  rating: Type.Optional(Type.Number()),
  price: Type.Number(),
  featured: Type.Optional(Type.Boolean()),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});

const products = Type.Array(product);

export const getAllProductsSchema = {
  tags: ["product"],
  description: "Returns all prodcuts",
  response: {
    200: products,
  },
};

export type ProductBody = Static<typeof product>