import { getAllProductsSchema } from "./product-schema";
import { FastifyInstance } from "fastify";
import { FastifyPluginOptions } from "fastify";
import { getAllProductsHandler } from "./product-controller";

export function productRoute(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.get("/", { schema: getAllProductsSchema }, getAllProductsHandler);
  done();
}
