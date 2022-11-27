import { FastifyInstance } from "fastify";
import { FastifyPluginOptions } from "fastify";

export function productRoute(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.get("/", {}, (req, reply) => reply.send("data"));
  done();
}
