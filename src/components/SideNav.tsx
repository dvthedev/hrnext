'use client'

import {
  CalendarIcon,
  CloudIcon,
  FlameIcon,
  HexagonIcon,
  UsersIcon,
} from 'lucide-react'
import { useEffect, useState } from 'react'

import SideNavLink from './SideNavLink'
import { usePathname } from 'next/navigation'

const SideNav: React.FC = () => {
  const pathname = usePathname()
  const [activePath, setActivePath] = useState<string>('')

  useEffect(() => {
    setActivePath(pathname)
  }, [pathname])

  return (
    <nav className="grid items-start">
      <SideNavLink
        title="Feed"
        icon={FlameIcon}
        path="feed"
        activePath={activePath}
      />
      <SideNavLink
        title="Bridge"
        icon={HexagonIcon}
        path="bridge"
        activePath={activePath}
      />
      <SideNavLink
        title="Calendar"
        icon={CalendarIcon}
        path="calendar"
        activePath={activePath}
      />
      <SideNavLink
        title="Teems"
        icon={UsersIcon}
        path="teems"
        activePath={activePath}
      />
      <SideNavLink
        title="Cloud"
        icon={CloudIcon}
        path="cloud"
        activePath={activePath}
        badge="New"
      />
    </nav>
  )
}

export default SideNav
