import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

type SideNavLinkProps = {
  title: string
  icon: LucideIcon
  path: string
}

const SideNavLink: React.FC<SideNavLinkProps> = ({
  title,
  icon: SideNavLinkIcon,
  path,
}) => {
  return (
    <Link
      href={path}
      className="flex items-center gap-2 p-2 hover:text-primary hover:font-medium transition-all hover:bg-muted rounded-full cursor-pointer"
    >
      <SideNavLinkIcon className="w-6 aspect-auto" />
      <span>{title}</span>
    </Link>
  )
}

export default SideNavLink
