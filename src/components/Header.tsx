import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { ClerkLoading, UserButton } from '@clerk/nextjs'

const Header: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl font-medium">HR Next</h1>
      <div className="">
        <UserButton afterSignOutUrl='/sign-in' />
      </div>
      <ClerkLoading>
        <Avatar>
          <AvatarImage src="https://github.com/dvsource1.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </ClerkLoading>
    </>
  )
}

export default Header
