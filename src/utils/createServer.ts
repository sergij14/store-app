import fastify from "fastify";
import swagger from "@fastify/swagger";
import { version } from "../../package.json";
import { productRoute } from "../modules/product/product-route";

export async function createServer() {
  const app = fastify();

  app.register(swagger, {
    routePrefix: "/docs",
    swagger: {
      tags: [
        {
          name: "product",
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
  app.register(productRoute, { prefix: "/api/v1/products" });

  return app;
}
