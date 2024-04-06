'use client'

import { Toaster } from './ui/toaster'
import { TooltipProvider } from './ui/tooltip'

type AppProviderProps = {
  children: React.ReactNode
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <TooltipProvider>
      {children}
      <Toaster />
    </TooltipProvider>
  )
}

export default AppProvider
