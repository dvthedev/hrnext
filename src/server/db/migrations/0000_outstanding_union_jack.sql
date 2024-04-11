CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
