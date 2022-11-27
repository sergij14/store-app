import { Static, Type } from "@sinclair/typebox";
import { envSchema } from "env-schema";

const schema = Type.Object({
  PORT: Type.Number({
    default: 8000,
  }),
  HOST: Type.String({
    default: "0.0.0.0",
  }),
  DB_URI: Type.String(),
  DB_PASSWORD: Type.String(),
});

type Env = Static<typeof schema>;

export const config = envSchema<Env>({
  schema,
  dotenv: true,
});
