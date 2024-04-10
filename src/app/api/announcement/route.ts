import { AnnouncementSelect, announcementTable } from '@/db/schema'

import db from '@/db/drizzle'

export const GET = async () => {
  // const announcements: AnnouncementSelect[] = [
  //   {
  //     id: 1,
  //     title: 'Introducing New Cloud',
  //     description:
  //       'Get started with our new cloud service and get unlimited storage.',
  //     action: 'Get Started',
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: 2,
  //     title: 'Upgrade to Pro',
  //     description:
  //       'Unlock all features and get unlimited access to our support team.',
  //     action: 'Upgrade',
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // ]
  const announcements: AnnouncementSelect[] =
    await db.query.announcementTable.findMany()

  // const announcements: AnnouncementSelect[] = await db
  //   .select()
  //   .from(announcementTable)

  return Response.json(announcements)
}
