import type { Metadata } from 'next'

import './globals.css'

import { ViewTransitions } from 'next-view-transitions'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import { Quote } from '@/components/common/Quote'
import { ThemeProvider } from '@/components/common/ThemeProviders'
import { LenisProvider } from '@/components/lenis-provider'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Raju - A Full Stack web developer.',
  description:
    'Passionate full stack developer focused on scalable applications, enriching user experiences, and impactful projects. Experienced in MERN Stack, Next.js, Go, and modern web technologies.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'JavaScript',
    'MERN Stack',
    'Go',
    'Web Developer',
  ],
  authors: [{ name: 'Raju' }],
  openGraph: {
    title: 'Raju - Full Stack Developer',
    description: 'Passionate developer creating scalable applications with modern technologies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang='en' suppressHydrationWarning>
        <body className={`font-hanken-grotesk antialiased`} suppressHydrationWarning>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <LenisProvider>
              <Toaster />
              <Navbar />
              {children}
              <Quote />
              <Footer />
            </LenisProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
