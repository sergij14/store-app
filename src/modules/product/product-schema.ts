import { Static, Type } from "@sinclair/typebox";

const product = Type.Object({
  name: Type.Optional(Type.String()),
  _id: Type.Optional(Type.String()),
  rating: Type.Optional(Type.Number()),
  price: Type.Optional(Type.Number()),
  featured: Type.Optional(Type.Boolean()),
  createdAt: Type.Optional(Type.String()),
  updatedAt: Type.Optional(Type.String()),
});

const products = Type.Array(product);

export const getAllProductsSchema = {
  tags: ["product"],
  description: "Returns all prodcuts",
  response: {
    200: products,
  },
};
