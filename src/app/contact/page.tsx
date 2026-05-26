import type { Metadata } from 'next'

import Container from '@/components/common/Container'
import ContactForm from '@/components/contact/ContactForm'
import { Separator } from '@/components/ui/separator'
import { contactConfig } from '@/config/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <Container className='py-16'>
      <div className='space-y-8'>
        <div className='space-y-4 text-center'>
          <h1 className='text-4xl font-bold tracking-tight'>{contactConfig.title}</h1>
          <p className='mx-auto max-w-2xl text-base text-muted-foreground'>
            {contactConfig.description}
          </p>
        </div>
        <Separator />

        <div className='mx-auto max-w-2xl'>
          <ContactForm />
        </div>
      </div>
    </Container>
  )
}
