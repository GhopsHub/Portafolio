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
  sections?: {
    title?: string
    icon?: string[]
    experience?: string
    description?: string
    images?: string[]
  }[]
}

export const skillsData: SkillItem[] = [
  {
    title: "Frontend",
    shortDescription: "Desarrollo de interfaces modernas con React, Vue y Tailwind.",
    description:
      "Experiencia creando interfaces modernas, responsivas y accesibles usando tecnologías como React, Vue, TailwindCSS, Bootstrap, y Blade. Capacidad para convertir diseños en experiencias reales y fluidas.",
    icon: AppWindow,
    slug: "frontend",
    sections: [
      {
        title: "Interfaces React/Vue",
        description: "He desarrollado componentes reutilizables y layouts responsivos para múltiples proyectos utilizando React, Vue e Inertia.js.",
        images: ["/images/skills/frontend1.png", "/images/skills/frontend2.png"]
      }
    ]
  },
  {
    title: "Backend",
    shortDescription: "APIs con Laravel y MySQL.",
    description:
      "Construcción de APIs RESTful y sistemas backend robustos con Laravel, utilizando bases de datos relacionales como MySQL. Implementación de autenticación, validación y lógica de negocio.",
    icon: Database,
    slug: "backend",
    sections: [
      {
        title: "Laravel + MySQL",
        description: "Uso de Laravel para crear APIs limpias, seguras y organizadas, trabajando con controladores, migraciones, y relaciones complejas.",
        images: ["/images/skills/backend1.png"]
      }
    ]
  },
  {
    title: "Testing",
    shortDescription: "Pruebas automatizadas con PEST y Postman.",
    description:
      "Implementación de pruebas automatizadas eficientes usando PEST para código PHP y Postman para pruebas de endpoints. Aseguramiento de calidad y estabilidad del software en cada release.",
    icon: Hammer,
    slug: "testing",
    sections: [
      {
        title: "Cobertura con PEST",
        description: "Validación de funcionalidades clave mediante pruebas automatizadas en entornos reales usando PEST.",
        images: ["/images/skills/testing1.png"]
      }
    ]
  },
  {
    title: "Diseño UI/UX",
    shortDescription: "Interfaces intuitivas centradas en el usuario.",
    description:
      "Diseño de interfaces limpias y funcionales centradas en la experiencia del usuario. Aplicación de principios de usabilidad, accesibilidad y coherencia visual para una interacción óptima.",
    icon: Brush,
    slug: "ui-ux",
    sections: [
      {
        title: "Wireframes & Prototipos",
        description: "Experiencia creando maquetas funcionales y prototipos de interfaz para mejorar la experiencia de usuario.",
        images: ["/images/skills/uiux1.png"]
      }
    ]
  },
  {
    title: "Contenido digital",
    shortDescription: "Creación de videos para internet.",
    description:
      "Producción y edición de contenido audiovisual para plataformas digitales. Uso de herramientas de edición para comunicar ideas de forma clara, creativa y atractiva.",
    icon: Play,
    slug: "contenido",
    sections: [
      {
        title: "Edición audiovisual",
        description: "He creado y editado videos para redes sociales con enfoque visual atractivo y mensaje claro.",
        images: ["/images/skills/contenido1.png"]
      }
    ]
  },
  {
    title: "Otros",
    shortDescription: "Conocimientos generales en otras áreas.",
    description:
      "Conocimientos complementarios en diversas áreas del desarrollo y la tecnología, incluyendo control de versiones con Git, metodologías ágiles como Scrum, y herramientas como Mailpit y Docker (Básico).",
    icon: Plus,
    slug: "otros",
    sections: [
      {
        title: "Extras técnicos",
        description: "Experiencia básica con herramientas y flujos como Git, Docker, Scrum, Mailpit, entre otras.",
        images: ["/images/skills/otros1.png"]
      }
    ]
  }
]
