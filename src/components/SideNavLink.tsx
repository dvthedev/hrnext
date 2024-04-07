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
      className={`flex items-center gap-2 p-2 hover:text-primary hover:font-medium transition-all hover:bg-muted rounded-full cursor-pointer ${
        activePath === `/${path}` ? 'text-primary font-medium' : ''
      }`}
    >
      <SideNavLinkIcon className="w-6 aspect-auto" />
      <span>{title}</span>

      {badge && (
        <Badge className="ml-auto flex h-6 shrink-0 items-center justify-center rounded-full">
          {badge}
        </Badge>
      )}
    </Link>
  )
}

export default SideNavLink
