import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  alternates: {
    canonical: '/blog',
  },
}

const page = () => {
  return <div>Blog page</div>
}

export default page
