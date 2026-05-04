// drizzle.config.ts
import type { Config } from "drizzle-kit";
import { env } from "./src/config/env.js";  

export default {
  // Where your Drizzle schema files are located
  schema: "./src/db/schema/index.ts",

  // Where drizzle-kit will write migration SQL files
  out: "./src/db/migrations",

  // Which database driver to use
  dialect: "postgresql",

  dbCredentials: {
    url: env.DATABASE_URL,
  },

  // When true, logs every SQL statement that drizzle-kit runs
  verbose: true,

  // When true, asks for confirmation before running destructive changes
  strict: true,
} satisfies Config;