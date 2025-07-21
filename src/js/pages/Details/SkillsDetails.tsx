// src/js/pages/skills/SkillDetail.tsx
import { useParams } from "react-router-dom"
import { skillsData } from "../../../data/skillsData"
import type { LucideIcon } from "lucide-react"

export default function SkillDetail() {
  const { slug } = useParams()
  const skill = skillsData.find(s => s.slug === slug)

  if (!skill) {
    return <div>Habilidad no encontrada</div>
  }

  const Icon = skill.icon as LucideIcon

  return (
    <section className="min-h-[calc(100vh-52px)] flex items-center justify-center px-4 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        {/* Título */}
        <div className="w-full text-4xl font-champion mb-8 border-b border-white">
          <h1 className="mb-2 flex items-center gap-2">
            <Icon className="w-6 h-6 text-neutral-400" />
            {skill.title}
          </h1>
        </div>

        {/* Descripción */}
        <p className="text-lg text-neutral-300">{skill.description}</p>
      </div>
    </section>
  )
}
