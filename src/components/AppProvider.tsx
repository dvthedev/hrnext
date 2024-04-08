'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from './ui/toaster'
import { TooltipProvider } from './ui/tooltip'

type AppProviderProps = {
  children: React.ReactNode
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ClerkProvider>
      <TooltipProvider>
        {children}
        <Toaster />
      </TooltipProvider>
    </ClerkProvider>
  )
}

export default AppProvider
