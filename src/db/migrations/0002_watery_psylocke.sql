CREATE TABLE IF NOT EXISTS "sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"client_id" char(100) NOT NULL,
	"user_id" char(100) NOT NULL,
	"status" text NOT NULL,
	"last_active_at" timestamp NOT NULL,
	"expire_at" timestamp NOT NULL,
	"abandon_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"event_type" text
);
