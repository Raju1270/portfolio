import type { Metadata } from 'next'

import Container from '@/components/common/Container'
import { Separator } from '@/components/ui/separator'
import { resumeConfig } from '@/config/Resume'

export const metadata: Metadata = {
  title: 'Resume',
  alternates: {
    canonical: '/resume',
  },
}

export default function ResumePage() {
  return (
    <Container className='py-16'>
      <div className='space-y-8'>
        <div className='space-y-4 text-center'>
          <h1 className='text-4xl font-bold tracking-tight lg:text-5xl'>Resume</h1>
        </div>
        <Separator />
        <div className='mx-auto max-w-2xl'>
          <iframe
            src={resumeConfig.url}
            title='Resume'
            className='aspect-210/288 w-full max-w-[210mm] '
          ></iframe>
        </div>
      </div>
    </Container>
  )
}
