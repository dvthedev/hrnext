import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Button } from './ui/button'

type AnnouncementProps = {
  title: string
  description: string
  action: string
}

const Announcement: React.FC<AnnouncementProps> = ({
  title,
  description,
  action,
}) => {
  return (
    <Card>
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
        <Button size="sm" className="w-full rounded-full">
          {action}
        </Button>
      </CardContent>
    </Card>
  )
}

export default Announcement
