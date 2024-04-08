'use client'

import FloatingIconButton from './FloatingIconButton'
import { HelpCircleIcon } from 'lucide-react'

const HelpButton = () => {
  return (
    <FloatingIconButton
      className="fixed bottom-4 right-4"
      icon={HelpCircleIcon}
    />
  )
}

export default HelpButton
