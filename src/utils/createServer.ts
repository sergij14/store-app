import fastify from "fastify";
import swagger from "@fastify/swagger";
import { todoRoute } from "../modules/todo/todo-route";
import { version } from "../../package.json";

export async function createServer() {
  const app = fastify();

  app.register(swagger, {
    routePrefix: "/docs",
    swagger: {
      tags: [
        {
          name: "products",
        },
      ],
      info: {
        title: "Store API",
        description: "store api",
        version,
      },
    },
    staticCSP: true,
    exposeRoute: true,
  });
  app.register(todoRoute, { prefix: "/api/v1/products" });

  return app;
}
