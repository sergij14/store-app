import fastify from "fastify";
import swagger from "@fastify/swagger";
import { version } from "../../package.json";
import { productsRoute } from "../modules/products-route";

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
  app.register(productsRoute, { prefix: "/api/v1/products" });

  return app;
}
