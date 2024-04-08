'use client'

import FloatingIconButton from './FloatingIconButton'
import { TrashIcon } from 'lucide-react'

const ArchiveButton = () => {
  return (
    <FloatingIconButton className="fixed bottom-4 left-4" icon={TrashIcon} />
  )
}

export default ArchiveButton
