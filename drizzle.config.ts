import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv'
dotenv.config()

if (!process.env.DRIZZLE_DATABASE_URL) {
  throw new Error('DRIZZLE_DATABASE_URL environment variable is not set')
}

export default defineConfig({
  schema: './src/server/db/schema.ts',
  out: './src/server/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DRIZZLE_DATABASE_URL,
  },
})
