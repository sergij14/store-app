import pino from "pino";

export const logger = pino({
  timestamp() {
    return `, ${new Date().toUTCString()}`;
  },
  redact: ['hostname']
});
