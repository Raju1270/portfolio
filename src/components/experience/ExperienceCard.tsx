import Image from 'next/image'
import type { ExperienceType } from '@/config/Experience'
import { cn } from '@/lib/utils'

import Skill from '../common/Skill'

interface ExperienceCardProps {
  experience: ExperienceType
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>')
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className='flex flex-col gap-4'>
      {/* Company Header */}
      <div className='flex flex-col gap-2 md:flex-row md:justify-between'>
        {/* Left Side */}
        <div className='flex items-center gap-4'>
          <Image
            src={experience.image}
            alt={experience.company}
            width={100}
            height={100}
            className='size-12 rounded-md'
          />
          <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <h3
                className={cn('text-lg font-bold', experience.isBlur ? 'blur-[5px]' : 'blur-none')}
              >
                {experience.company}
              </h3>

              {experience.isCurrent && (
                <div className='flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs'>
                  <div className='size-2 rounded-full bg-green-500 animate-pulse'></div>
                  Working
                </div>
              )}
            </div>
            <p>{experience.position}</p>
          </div>
        </div>
        {/* Right Side */}
        <div className='text-secondary flex flex-col md:text-right'>
          <p>
            {experience.startDate} - {experience.isCurrent ? 'Present' : experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h4 className='text-md mt-4 mb-2 font-semibold'>Technologies</h4>
        <div className='flex flex-wrap gap-2'>
          {experience.technologies.map((technology, techIndex: number) => (
            <Skill key={techIndex} name={technology.name} href={technology.href}>
              {technology.icon}
            </Skill>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className='text-secondary flex flex-col'>
        {experience.description.map((description: string) => (
          <p
            key={description}
            dangerouslySetInnerHTML={{
              __html: `• ${parseDescription(description)}`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
