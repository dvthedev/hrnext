import { Badge } from './ui/badge'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

type SideNavLinkProps = {
  title: string
  icon: LucideIcon
  path: string
  activePath: string
  badge?: string
}

const SideNavLink: React.FC<SideNavLinkProps> = ({
  title,
  icon: SideNavLinkIcon,
  path,
  activePath,
  badge,
}) => {
  return (
    <Link
      href={path}
      className={`flex h-full justify-between text-lg items-center py-1 pl-4 hover:text-primary hover:font-medium transition-all hover:bg-muted rounded-full cursor-pointer ${
        activePath === `/${path}` ? 'text-primary font-medium' : ''
      }`}
    >
      <div className="flex gap-2 flex-1 py-1">
        <SideNavLinkIcon className="w-6 aspect-auto" />
        <span>{title}</span>

        {badge && (
          <Badge className="ml-auto mr-2 flex h-6 shrink-0 items-center justify-center rounded-full">
            {badge}
          </Badge>
        )}
      </div>
      <div
        className={`h-full w-1.5 ${
          activePath === `/${path}` && `bg-primary rounded-md`
        }`}
      ></div>
    </Link>
  )
}

export default SideNavLink
