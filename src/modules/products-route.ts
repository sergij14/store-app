import { FastifyInstance } from "fastify";
import { FastifyPluginOptions } from "fastify";

export function productsRoute(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.post("/", {}, (req, reply) => reply.send("data"));
  done();
}
