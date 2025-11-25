export type SkillDef = {
  name: string
  href: string
  component: string
}

export type ParsePart =
  | { type: 'skill'; skill: SkillDef; key: string }
  | { type: 'bold'; text: string; key: string }
  | { type: 'text'; text: string; key: string }

export const parseTemplate = (template: string, skills: SkillDef[]): ParsePart[] => {
  const parts = template.split(/(\{skills:\d+\})/)

  return parts.flatMap<ParsePart>((part, index) => {
    const skillMatch = part.match(/\{skills:(\d+)\}/)
    if (skillMatch) {
      const skillIndex = parseInt(skillMatch[1], 10)
      const skill = skills[skillIndex]
      if (skill) {
        return [
          {
            type: 'skill',
            skill,
            key: `${index}-${skillIndex}`,
          },
        ]
      }
      return []
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
