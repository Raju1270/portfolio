import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { heroConfig, skillComponents, socialLinks } from '@/config/Hero'
import { TransitionLink } from '@/hooks/useTransition'
import { parseTemplate } from '@/lib/hero'
import Container from '../common/Container'
import Skill from '../common/Skill'
import Chat from '../svgs/Chat'
import CV from '../svgs/CV'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

const buttonIcons = {
  CV: CV,
  Chat: Chat,
}

export default function Hero() {
  const { name, title, buttons } = heroConfig
  return (
    <Container className='mx-auto max-w-5xl'>
      <Image
        src={heroConfig.image}
        alt='hero'
        width={240}
        height={240}
        quality={100}
        className='size-24 object-cover rounded-full dark:bg-yellow-300 bg-blue-300'
      />
      <div className='mt-8 flex flex-col gap-2'>
        <h1 className='text-3xl font-bold'>
          Hi, I&apos;m {name} — <span className='text-secondary'>{title}</span>
        </h1>

        <div className='mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base md:text-md text-neutral-500 whitespace-pre-wrap'>
          <Description />
        </div>
      </div>

      <div className='mt-8 flex gap-4'>
        {buttons.map((button) => {
          const IconComponent = buttonIcons[button.icon as keyof typeof buttonIcons]
          return (
            <TransitionLink
              key={button.href}
              href={button.href}
              variant={button.variant as 'outline' | 'default'}
            >
              {' '}
              {IconComponent && <IconComponent />} {button.text}
            </TransitionLink>
          )
        })}
      </div>

      <div className='mt-8 flex gap-2'>
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                key={link.name}
                className='text-secondary flex items-center gap-2'
              >
                <span className='size-6'>{link.icon}</span>
              </Link>
            </TooltipTrigger>

            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Container>
  )
}

const Description = () => {
  const { skills, description } = heroConfig
  const parts = parseTemplate(description.template, skills)

  return parts.map((part) => {
    if (part.type === 'skill' && 'skill' in part && part.skill) {
      const SkillComponent = skillComponents[part.skill.component as keyof typeof skillComponents]

      return (
        <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
          <SkillComponent />
        </Skill>
      )
    } else if (part.type === 'bold' && 'text' in part) {
      return (
        <b key={part.key} className='whitespace-pre-wrap text-primary'>
          {part.text}
        </b>
      )
    } else if (part.type === 'text' && 'text' in part) {
      return (
        <span key={part.key} className='whitespace-pre-wrap'>
          {part.text}
        </span>
      )
    }

    return null
  })
}
