import { Card, CardContent } from "@/components/ui/card"

interface Skill {
  id: string
  name: string
  icon: string
  category: string
}

interface SkillBadgeProps {
  skill: Skill
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <Card className="overflow-hidden border border-primary/20 bg-card/80 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(186,104,200,0.3)] hover:-translate-y-1">
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className="w-12 h-12 flex items-center justify-center text-2xl mb-2 text-primary">{skill.icon}</div>
        <h3 className="font-medium">{skill.name}</h3>
      </CardContent>
    </Card>
  )
}
