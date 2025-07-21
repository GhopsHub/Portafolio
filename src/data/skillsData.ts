import {
  Database,
  Hammer,
  AppWindow,
  Brush,
  Plus,
  Play,
  type LucideIcon,
} from "lucide-react"

export type SkillItem = {
  title: string
  shortDescription: string
  description: string
  icon: LucideIcon
  slug: string
}

export const skillsData: SkillItem[] = [
  {
    title: "Frontend",
    shortDescription: "Desarrollo de interfaces modernas con React, Vue y Tailwind.",
    description: "Desarrollo de interfaces modernas con React, Vue y Tailwind.",
    icon: AppWindow,
    slug: "frontend",
  },
  {
    title: "Backend",
    shortDescription:"APIs con Laravel y MySQL.",
    description: "Desarrollo de interfaces modernas con React, Vue y Tailwind.",
    icon: Database,
    slug: "backend",
  },
  {
    title: "Testing",
    shortDescription:"Pruebas automatizadas con PEST y Postman.",
    description: "Desarrollo de interfaces modernas con React, Vue y Tailwind.",
    icon: Hammer,
    slug: "testing",
  },
  {
    title: "Diseño UI/UX",
    shortDescription:"Interfaces intuitivas centradas en el usuario.",
    description: "Desarrollo de interfaces modernas con React, Vue y Tailwind.",
    icon: Brush,
    slug: "ui-ux",
  },
  {
    title: "Contenido digital",
    shortDescription:"Creación de videos para internet.",
    description: "Desarrollo de interfaces modernas con React, Vue y Tailwind.",
    icon: Play,
    slug: "contenido",
  },
  {
    title: "Otros",
    shortDescription: "Conocimientos generales en otras áreas.",
    description: "Desarrollo de interfaces modernas con React, Vue y Tailwind.",
    icon: Plus,
    slug: "otros",
  },
]
