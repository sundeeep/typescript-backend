// src/config/env.ts
import dotenv from "dotenv";

// Load .env file into process.env before anything else reads it
dotenv.config();

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${key}\n` +
      `Make sure it is defined in your .env file.`
    );
  }
  return value;
}

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: parseInt(requireEnv("PORT"), 10),
  DATABASE_URL: requireEnv("DATABASE_URL"),
  CORS_ORIGIN: requireEnv("CORS_ORIGIN")
} as const;

// Type helper — lets you check the environment anywhere
export type NodeEnv = "development" | "production" | "testing" | "staging";
export const isDevelopment = env.NODE_ENV === "development";
export const isProduction = env.NODE_ENV === "production";
export const isTesting = env.NODE_ENV === "testing";
export const isStaging = env.NODE_ENV === "staging";

