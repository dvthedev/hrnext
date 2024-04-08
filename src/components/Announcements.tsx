import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'

const Announcements: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardHeader className="p-2 pt-0 md:p-4">
          <CardTitle className="text-xl">Upgrade to Pro</CardTitle>
          <CardDescription>
            Unlock all features and get unlimited access to our support team.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
          <Button size="sm" className="w-full rounded-full">
            Upgrade
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-2 pt-0 md:p-4">
          <CardTitle className="text-xl">Introducing New Cloud</CardTitle>
          <CardDescription>
            Get started with our new cloud service and get unlimited storage.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
          <Button size="sm" className="w-full rounded-full">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Announcements
