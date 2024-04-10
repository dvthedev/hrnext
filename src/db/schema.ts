import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

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
