import {
  CalendarIcon,
  CloudIcon,
  FlameIcon,
  HexagonIcon,
  UsersIcon,
} from 'lucide-react'

import SideNavLink from './SideNavLink'

const SideNav: React.FC = () => {
  return (
    <nav className="grid items-start">
      <SideNavLink title="Feed" icon={FlameIcon} path="feed" />
      <SideNavLink title="Bridge" icon={HexagonIcon} path="bridge" />
      <SideNavLink title="Calendar" icon={CalendarIcon} path="calendar" />
      <SideNavLink title="Teems" icon={UsersIcon} path="teems" />
      <SideNavLink title="Cloud" icon={CloudIcon} path="cloud" />
    </nav>
  )
}

export default SideNav
