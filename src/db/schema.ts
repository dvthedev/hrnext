import { char, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const sessionTable = pgTable('sessions', {
  id: serial('id').primaryKey(),
  clientId: char('client_id', { length: 100 }).notNull(),
  userId: char('user_id', { length: 100 }).notNull(),
  status: text('status', {
    enum: ['active', 'ended', 'removed', 'revoked'],
  }).notNull(),
  lastActiveAt: timestamp('last_active_at').notNull(),
  expireAt: timestamp('expire_at').notNull(),
  abandonAt: timestamp('abandon_at').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  eventType: text('event_type'),
})

export type SessionSelect = typeof sessionTable.$inferSelect
export type SessionInsert = typeof sessionTable.$inferInsert

export const announcementTable = pgTable('announcements', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  action: text('action').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export type AnnouncementSelect = typeof announcementTable.$inferSelect
export type AnnouncementInsert = typeof announcementTable.$inferInsert
