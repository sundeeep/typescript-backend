import { boolean, index, pgTable, serial, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    fullname: varchar("fullname", {length: 100}).notNull(),
    email: varchar("email", {length: 100}).notNull().unique(),
    mobile: varchar("mobile", {length: 10}).notNull().unique(),
    countyCode: varchar("country_code", {length: 10}).notNull(),
    bio: text("bio"),
    isActive: boolean("is_active").notNull().default(true),
    // timestamp() with timezone — always store timestamps with TZ
    // defaultNow() automatically sets the value on INSERT
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),

    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
}, 
    // The third argument (optional) — table-level constraints and indexes
  (table) => [
    // A named index on the email column for fast lookups
    uniqueIndex("users_email_unique_idx").on(table.email),
    index("users_fullname_idx").on(table.fullname),
    uniqueIndex("users_mobile_unique_idx").on(table.mobile)
])

// ─── Inferred TypeScript Types ──────────────────────────────────────────────
//
// These are the most important lines in the schema file.
// You never write User or NewUser manually — Drizzle infers them
// directly from the schema above. If you add a column to the schema,
// the type automatically gets updated everywhere.

// SelectUser: the shape of a row you SELECT from the database.
// All columns are present, with their correct TypeScript types.
export type SelectUser = typeof users.$inferSelect;

// InsertUser: the shape of data you INSERT into the database.
// id, createdAt, updatedAt are omitted because the DB generates them.
export type InsertUser = typeof users.$inferInsert;
