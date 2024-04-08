'use client'

import { HelpCircleIcon, LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

type FloatingIconButtonProps = {
  icon: LucideIcon
  className?: string
}

const FloatingIconButton: React.FC<FloatingIconButtonProps> = ({
  icon: ButtonIcon,
  className,
}) => {
  return (
    <button
      className={cn(
        'flex justify-center items-center w-8 h-8 z-50 bg-accent rounded-full shadow-sm hover:shadow-primary',
        className
      )}
    >
      <ButtonIcon className="w-4 aspect-auto" />
    </button>
  )
}

export default FloatingIconButton
