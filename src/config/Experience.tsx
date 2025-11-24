import AWS from '@/components/technologies/AWS'
import Bun from '@/components/technologies/Bun'
import CSS from '@/components/technologies/CSS'
import ExpressJs from '@/components/technologies/ExpressJs'
import Figma from '@/components/technologies/Figma'
import JavaScript from '@/components/technologies/JavaScript'
import MongoDB from '@/components/technologies/MongoDB'
import NextJs from '@/components/technologies/NextJs'
import NodeJs from '@/components/technologies/NodeJs'
import PostgreSQL from '@/components/technologies/PostgreSQL'
import Postman from '@/components/technologies/Postman'
import ReactIcon from '@/components/technologies/ReactIcon'
import TailwindCss from '@/components/technologies/TailwindCss'
import TypeScript from '@/components/technologies/TypeScript'
import Vercel from '@/components/technologies/Vercel'

export type ExperienceType = {
  isCurrent: boolean
  isBlur?: boolean
  company: string
  position: string
  location: string
  image: string
  description: string[]
  startDate: string
  endDate: string
  website: string
  technologies: {
    name: string
    href: string
    icon: React.ReactNode
  }[]
}

export const experiences: ExperienceType[] = [
  {
    isCurrent: true,
    isBlur: true,
    company: 'Manthan IT Solutions Pvt. Ltd.',
    position: 'Full Stack Developer',
    location: 'New Delhi (On-Site)',
    image: '/company/promote.png',
    description: [
      'Architect and build scalable, user-centric web applications using the MERN stack and the modern React/Next.js ecosystem, ensuring clean architecture and long-term maintainability.',
      'Develop and maintain structured RESTful APIs using Node.js and Express, along with performance-oriented microservices in Go using the Gin framework.',
      'Design, model, and optimize database systems (MongoDB and SQL) to support high-throughput backend operations with strong data integrity and scalability.',
      'Automate and streamline deployment pipelines using Docker and Jenkins for backend services, and deploy Next.js applications on Vercel for smooth CI/CD workflows.',
    ],
    startDate: 'February 2025',
    endDate: 'Present',
    website: 'https://manthanitsolutions.com',
    technologies: [
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'TypeScript', href: 'https://typescriptlang.org/', icon: <TypeScript /> },
      {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: <JavaScript />,
      },
      { name: 'Node.js', href: 'https://nodejs.org', icon: <NodeJs /> },
      { name: 'Express.js', href: 'https://expressjs.com', icon: <ExpressJs /> },
      { name: 'Go (Gin)', href: 'https://gin-gonic.com/', icon: <Bun /> }, // replace with GO icon if you add one
      { name: 'MongoDB', href: 'https://mongodb.com', icon: <MongoDB /> },
      { name: 'PostgreSQL', href: 'https://postgresql.org', icon: <PostgreSQL /> },
      { name: 'Docker', href: 'https://www.docker.com/', icon: <AWS /> }, // replace when you add Docker icon
      { name: 'Jenkins', href: 'https://www.jenkins.io/', icon: <Postman /> }, // replace when you add Jenkins icon
      { name: 'Tailwind CSS', href: 'https://tailwindcss.com/', icon: <TailwindCss /> },
      { name: 'Vercel', href: 'https://vercel.com/', icon: <Vercel /> },
      { name: 'AWS', href: 'https://aws.amazon.com/', icon: <AWS /> },
    ],
  },

  {
    isCurrent: false,
    company: 'Self-employed',
    position: 'Front-End Developer (Freelancer)',
    location: 'Remote',
    image: '/company/promote.png',
    description: [
      'Developed responsive and high-performance websites using React, ensuring clean UI, smooth animations, and consistent visual design across devices.',
      'Collaborated closely with designers and backend teams to transform concepts into intuitive user experiences and deliver projects on time.',
      'Optimized and debugged front-end applications to improve performance, SEO, accessibility, and overall UX quality.',
    ],
    startDate: 'June 2022',
    endDate: 'January 2023',
    website: 'https://raju1270.github.io',
    technologies: [
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: <JavaScript />,
      },
      { name: 'TypeScript', href: 'https://typescriptlang.org/', icon: <TypeScript /> },
      { name: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: <CSS /> },
      { name: 'Tailwind CSS', href: 'https://tailwindcss.com/', icon: <TailwindCss /> },
      { name: 'Figma', href: 'https://figma.com/', icon: <Figma /> },
    ],
  },
]
