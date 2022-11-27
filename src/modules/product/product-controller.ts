import { logger } from "./../../utils/logger";
import { FastifyReply, FastifyRequest } from "fastify";
import { getAllProducts } from "./product-service";
import { ProductsQueryParams } from "./product-schema";

export async function getAllProductsHandler(
  req: FastifyRequest<{Querystring: ProductsQueryParams}>,
  reply: FastifyReply
) {
  try {
    const products = await getAllProducts(req.query);
    return reply.code(200).send(products);
  } catch (err) {
    logger.error(err, "getAllProducts: Error getting products");
    return reply.code(400).send({ message: "Error getting products" });
  }
}
