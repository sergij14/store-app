import { signals } from "./constants";
import { config } from "./utils/config";
import { connectDB, disconnectDB } from "./utils/connectDB";
import { createServer } from "./utils/createServer";
import { logger } from "./utils/logger";

async function gracefulShutdown({
  signal,
  server,
}: {
  signal: typeof signals[number];
  server: Awaited<ReturnType<typeof createServer>>;
}) {
  logger.info(`got signal ${signal}, bye!`);
  await server.close();
  await disconnectDB();
  process.exit(0);
}

async function startServer() {
  const server = await createServer();
  server.listen({
    port: config.PORT,
    host: config.HOST,
  });

  await connectDB();

  logger.info("app started");

  signals.forEach((signal) => {
    process.on(signal, () => {
      gracefulShutdown({ signal: signal, server });
    });
  });
}

startServer();
