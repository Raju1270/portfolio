'use client'

import { usePathname } from 'next/navigation'
import { useTransitionRouter } from 'next-view-transitions'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

interface TransitionLinkProps {
  href: string
  children: ReactNode
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
}

const slideInOut = () => {
  document.documentElement.animate(
    [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0.2, transform: 'translateY(-35%)' },
    ],
    {
      duration: 1500,
      easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-old(root)',
    }
  )

  document.documentElement.animate(
    [
      { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' },
      { clipPath: 'polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)' },
    ],
    {
      duration: 1500,
      easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-new(root)',
    }
  )
}

export const TransitionLink = ({ href, children, ...buttonProps }: TransitionLinkProps) => {
  const router = useTransitionRouter()
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (pathname === href) {
      return
    }

    router.push(href, {
      onTransitionReady: slideInOut,
    })
  }

  return (
    <Button
      onClick={handleClick}
      {...buttonProps}
      variant={buttonProps.variant || 'default'}
      className='cursor-pointer text-base font-medium hover:opacity-80 transition-all duration-200'
    >
      {children}
    </Button>
  )
}
