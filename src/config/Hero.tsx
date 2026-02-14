import { Phone } from 'lucide-react'
import Github from '@/components/svgs/Github'
import LinkedIn from '@/components/svgs/LinkedIn'
import Mail from '@/components/svgs/Mail'
import Bun from '@/components/technologies/Bun'
import JavaScript from '@/components/technologies/JavaScript'
import MongoDB from '@/components/technologies/MongoDB'
import NextJs from '@/components/technologies/NextJs'
import NodeJs from '@/components/technologies/NodeJs'
import PostgreSQL from '@/components/technologies/PostgreSQL'
import Prisma from '@/components/technologies/Prisma'
import ReactIcon from '@/components/technologies/ReactIcon'
import TypeScript from '@/components/technologies/TypeScript'

export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
}

export const heroConfig = {
  name: 'Raju Maurya',
  title: 'A Full Stack web developer.',
  image: '/Raju-square.png',
  skills: [
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Bun',
      href: 'https://bun.sh/',
      component: 'Bun',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
  ],

  description: {
    template:
      'I build interactive web apps using{skills:0},{skills:1},{skills:2},{skills:3}and{skills:4}. With a focus on<b>UI</b>design. Enthusiastic about<b>GSAP</b>and<b>Three.js ,</b> driven by a keen eye for design.',
  },

  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
}

export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raju306/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/raju1270',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:rajuweb7@gmail.com',
    icon: <Mail />,
  },
  {
    name: 'Phone',
    href: 'tel:+919501235412',
    icon: <Phone />,
  },
]
