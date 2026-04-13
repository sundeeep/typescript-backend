CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"fullname" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"mobile" varchar(10) NOT NULL,
	"country_code" varchar(10) NOT NULL,
	"bio" text,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_mobile_unique" UNIQUE("mobile")
);
--> statement-breakpoint
CREATE UNIQUE INDEX "users_email_unique_idx" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "users_fullname_idx" ON "users" USING btree ("fullname");--> statement-breakpoint
CREATE UNIQUE INDEX "users_mobile_unique_idx" ON "users" USING btree ("mobile");