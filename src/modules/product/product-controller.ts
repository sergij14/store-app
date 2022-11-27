import { logger } from "./../../utils/logger";
import { FastifyReply, FastifyRequest } from "fastify";
import { getAllProducts } from "./product-service";
import { TRUE } from "../../constants";

export async function getAllProductsHandler(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { featured } = req.query as any;

    const queryObj = {} as any;

    if (featured) {
      queryObj.featured = featured === TRUE ? true : false;
    }
    const products = await getAllProducts(queryObj);
    return reply.code(200).send(products);
  } catch (err) {
    logger.error(err, "getAllProducts: Error getting products");
    return reply.code(400).send({ message: "Error getting products" });
  }
}
