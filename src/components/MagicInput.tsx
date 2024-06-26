'use client'

import { Input } from './ui/input'
import { useRouter } from 'next/navigation'

const MagicInput = () => {
  const router = useRouter()

  return (
    <Input
      className="absolute bottom-8 px-12 text-xl text-muted-foreground left-0 right-0 mx-auto w-2/3 h-12 rounded-full border bg-muted shadow-md hover:shadow-lg shadow-primary/20 hover:shadow-primary/50 transition-all"
      type="text"
      placeholder="Feel the Magic"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          // change next js route to home
          router.push('/')
        }
      }}
    />
  )
}

export default MagicInput
