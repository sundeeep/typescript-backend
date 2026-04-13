import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema/index.js";
import {Pool} from "pg";

import dotenv from "dotenv"
dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 2_000,
});

export const db = drizzle(pool, {schema})

export type Database = typeof db;