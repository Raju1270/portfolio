import { type ExperienceType, experiences } from '@/config/Experience'

import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { ExperienceCard } from '../experience/ExperienceCard'

export default function Experience() {
  return (
    <Container className='mt-20'>
      <SectionHeading subHeading='Featured' heading='Experience' />
      <div className='mt-4 flex flex-col gap-8'>
        {experiences.slice(0, 2).map((experience: ExperienceType) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </Container>
  )
}
