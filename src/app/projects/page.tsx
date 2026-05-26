import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  alternates: {
    canonical: '/projects',
  },
}

const page = () => {
  return <div>Project page</div>
}

export default page
