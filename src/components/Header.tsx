import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Header: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl font-medium">HR Next</h1>
      <Avatar className="cursor-pointer shadow-lg hover:shadow-green-500/50 border border-white hover:border-green-500">
        <AvatarImage src="https://github.com/dvsource1.png" />
        <AvatarFallback>DV</AvatarFallback>
      </Avatar>
    </>
  )
}

export default Header
