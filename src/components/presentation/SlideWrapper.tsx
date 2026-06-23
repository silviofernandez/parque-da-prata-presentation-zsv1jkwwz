import React from 'react'
import { cn } from '@/lib/utils'

interface SlideWrapperProps {
  isActive: boolean
  children: React.ReactNode
  className?: string
}

export function SlideWrapper({ isActive, children, className }: SlideWrapperProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out flex items-center justify-center p-6 lg:p-24',
        isActive
          ? 'opacity-100 z-10 translate-y-0'
          : 'opacity-0 z-0 translate-y-8 pointer-events-none',
        className,
      )}
    >
      {isActive && children}
    </div>
  )
}

export function SlideContent({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div
      className={cn('animate-fade-in-up opacity-0', className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
