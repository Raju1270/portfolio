import type { Metadata } from 'next'

import Container from '@/components/common/Container'
import About from '@/components/landing/About'
import Experience from '@/components/landing/Experience'
import Hero from '@/components/landing/Hero'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function page() {
  return (
    <Container className='min-h-screen py-16'>
      <Hero />
      <Experience />
      <About />
      {/* <Work /> */}
      {/* <Github /> */}
      {/* <Blog /> */}
      {/* <CTA /> */}
      {/* <Setup /> */}
      {/* <Journey /> */}
    </Container>
  )
}
