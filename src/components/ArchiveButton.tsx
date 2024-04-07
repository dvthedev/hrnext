'use client'

import { TrashIcon } from 'lucide-react'

const ArchiveButton = () => {
  return (
    <button className="fixed bottom-4 left-4 flex justify-center items-center w-8 h-8 z-50 bg-accent rounded-full shadow-sm hover:shadow-primary">
      <TrashIcon className="w-4 aspect-auto" />
    </button>
  )
}

export default ArchiveButton
