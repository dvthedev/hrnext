CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"external_id" char(100) NOT NULL,
	"username" text,
	"email" text,
	"first_name" text,
	"last_name" text,
	"gender" text,
	"image_url" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"status" text NOT NULL
);
