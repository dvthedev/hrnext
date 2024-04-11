import * as schema from './schema'

import dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'

dotenv.config()

if (!process.env.DRIZZLE_DATABASE_URL) {
  throw new Error('DRIZZLE_DATABASE_URL environment variable is not set')
}

const sql = neon(process.env.DRIZZLE_DATABASE_URL!)
const db = drizzle(sql, { schema })

export default db
