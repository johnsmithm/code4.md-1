import React from 'react'
import clsx from 'clsx'

export function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={clsx('container px-3 mx-auto', className)}>
      {children}
    </div>
  )
}