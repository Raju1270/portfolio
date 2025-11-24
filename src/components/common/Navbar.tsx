'use client'

import { navbarConfig } from '@/config/Navbar'
import { TransitionLink } from '@/hooks/useTransition'
import { ModeToggle } from '../toggle-theme'
import Container from './Container'

const Navbar = () => {
  return (
    <Container className='sticky top-0 z-20 py-4 flex justify-between items-center backdrop-blur-sm bg- rounded-md'>
      <div className='flex items-center gap-6'>
        <nav className='flex items-center gap-4'>
          {navbarConfig.navItems.map((item) => (
            <TransitionLink key={item.label} href={item.href} variant='link'>
              {item.label}
            </TransitionLink>
          ))}
        </nav>
      </div>

      <ModeToggle />
    </Container>
  )
}

export default Navbar
