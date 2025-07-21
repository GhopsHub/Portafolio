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
  description: string
  icon: LucideIcon
  slug: string
}

export const skillsData: SkillItem[] = [
  {
    title: "Frontend",
    description: "Desarrollo de interfaces modernas con React, Vue y Tailwind.",
    icon: AppWindow,
    slug: "frontend",
  },
  {
    title: "Backend",
    description: "APIs con Laravel y MySQL.",
    icon: Database,
    slug: "backend",
  },
  {
    title: "Testing",
    description: "Pruebas automatizadas con PEST y Postman.",
    icon: Hammer,
    slug: "testing",
  },
  {
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas centradas en el usuario.",
    icon: Brush,
    slug: "ui-ux",
  },
  {
    title: "Contenido digital",
    description: "Creación de videos para internet.",
    icon: Play,
    slug: "contenido",
  },
  {
    title: "Otros",
    description: "Conocimientos generales en otras áreas.",
    icon: Plus,
    slug: "otros",
  },
]
