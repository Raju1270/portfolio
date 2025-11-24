import Container from '@/components/common/Container'
import About from '@/components/landing/About'
import Experience from '@/components/landing/Experience'
import Hero from '@/components/landing/Hero'

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
