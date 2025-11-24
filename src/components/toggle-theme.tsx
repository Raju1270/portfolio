'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const sunRef = useRef<SVGSVGElement>(null)
  const moonRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLButtonElement>(null)

  // Prevent first-frame icon overlap
  useEffect(() => {
    setMounted(true)
  }, [])

  useGSAP(
    () => {
      if (!mounted) return

      const isDark = theme === 'dark'
      const show = isDark ? moonRef.current : sunRef.current
      const hide = isDark ? sunRef.current : moonRef.current

      gsap.to(hide, {
        scale: 0,
        rotate: -90,
        opacity: 0,
        duration: 0.25,
        ease: 'power1.out',
      })

      gsap.fromTo(
        show,
        { scale: 0, rotate: 90, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.45,
          ease: 'elastic.out(1, 0.5)',
        }
      )
    },
    { dependencies: [theme], scope: containerRef }
  )

  return (
    <Tooltip delayDuration={120}>
      <TooltipTrigger asChild>
        <Button
          ref={containerRef}
          variant='outline'
          size='icon'
          className='relative overflow-hidden cursor-pointer'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <>
              <Sun
                ref={sunRef}
                className='absolute h-[1.2rem] w-[1.2rem]'
                style={{
                  opacity: theme === 'dark' ? 0 : 1,
                  transform: theme === 'dark' ? 'scale(0) rotate(-90deg)' : 'scale(1) rotate(0deg)',
                }}
              />
              <Moon
                ref={moonRef}
                className='absolute h-[1.2rem] w-[1.2rem]'
                style={{
                  opacity: theme === 'dark' ? 1 : 0,
                  transform: theme === 'dark' ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(90deg)',
                }}
              />
            </>
          )}
        </Button>
      </TooltipTrigger>

      <TooltipContent side='top' avoidCollisions={true}>
        Toggle theme
      </TooltipContent>
    </Tooltip>
  )
}
