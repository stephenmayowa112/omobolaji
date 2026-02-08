import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "UI / UX Design", percentage: 95 },
  { name: "Development", percentage: 90 },
  { name: "Graphic Design", percentage: 85 },
  { name: "WordPress", percentage: 78 },
]

export function SkillsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-2xl font-bold">{skill.percentage}%</span>
              </div>
              <Progress value={skill.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
