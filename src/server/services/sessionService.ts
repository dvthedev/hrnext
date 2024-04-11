import { SessionInsert, sessionTable } from '../db/schema'

import { SessionJSON } from '@clerk/nextjs/server'
import db from '../db/drizzle'

export const createSesstion = async (data: SessionJSON, eventType: string) => {
  const {
    client_id,
    user_id,
    status,
    created_at,
    updated_at,
    expire_at,
    abandon_at,
    last_active_at,
  } = data

  const newSession: SessionInsert = {
    clientId: client_id,
    userId: user_id,
    status: status as 'active' | 'ended' | 'removed' | 'revoked',
    lastActiveAt: new Date(last_active_at),
    expireAt: new Date(expire_at),
    abandonAt: new Date(abandon_at),
    createdAt: new Date(created_at),
    updatedAt: new Date(updated_at),
    eventType,
  }
  await db.insert(sessionTable).values(newSession)
}
