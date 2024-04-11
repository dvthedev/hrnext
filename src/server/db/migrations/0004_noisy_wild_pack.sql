ALTER TABLE "users" ALTER COLUMN "external_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "user_id" char(100) NOT NULL;