'use client'

import { useEffect, useState } from 'react'

import Announcement from './Announcement'
import { AnnouncementSelect } from '@/server/db/schema'

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementSelect[]>([])

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const res = await fetch('/api/announcement')
      const data = await res.json()
      setAnnouncements(data)
    }

    fetchAnnouncements()
  }, [])

  return (
    <div className="flex flex-col gap-2">
      {announcements?.map((announcement) => (
        <Announcement
          key={announcement.id}
          title={announcement.title}
          description={announcement.description}
          action={announcement.action}
        />
      ))}
    </div>
  )
}

export default Announcements
