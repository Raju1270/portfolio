import type { heroConfig } from '@/config/Hero'

export const parseTemplate = (template: string, skills: typeof heroConfig.skills) => {
  const parts = template.split(/(\{skills:\d+\})/)

  return parts.flatMap((part, index): any[] => {
    const skillMatch = part.match(/\{skills:(\d+)\}/)
    if (skillMatch) {
      const skillIndex = parseInt(skillMatch[1], 10)
      const skill = skills[skillIndex]
      if (skill) {
        return {
          type: 'skill',
          skill: skill,
          key: index,
        }
      }
    }

    const boldParts = part.split(/(<b>.*?<\/b>)/)
    return boldParts.map((boldPart, boldIndex) => {
      if (boldPart.startsWith('<b>') && boldPart.endsWith('</b>')) {
        return {
          type: 'bold',
          text: boldPart.slice(3, -4),
          key: `${index}-${boldIndex}`,
        }
      }
      return {
        type: 'text',
        text: boldPart,
        key: `${index}-${boldIndex}`,
      }
    })
  })
}
