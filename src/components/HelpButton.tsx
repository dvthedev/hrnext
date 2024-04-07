'use client'

import { HelpCircleIcon } from 'lucide-react'

const HelpButton = () => {
  return (
    <button className="fixed bottom-4 right-4 flex justify-center items-center w-8 h-8  z-50 bg-accent rounded-full shadow-sm hover:shadow-primary">
      <HelpCircleIcon className="w-4 aspect-auto" />
    </button>
  )
}

export default HelpButton
