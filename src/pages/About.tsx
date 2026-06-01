import characterabout from "../assets/images/Characters/characterabout.webp";
import { ButtonPages } from "../components/ButtonPages";
import Timeline from "../components/Timeline";
import type { TimelineItem } from "../components/Timeline";

export default function About() {
  const aboutTimeline: TimelineItem[] = [
    {
      id: 1,
      date: "2022 - 2023",
      title: "Formación en desarrollo de software",
      subtitle: "SENA",
      description:
        "Durante mi formación adquirí fundamentos de programación, análisis de requerimientos, desarrollo web y gestión de bases de datos. Trabajé con tecnologías como HTML, CSS, JavaScript, PHP y MySQL, participando en proyectos que fortalecieron mi capacidad para diseñar y construir aplicaciones funcionales.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      icon: "study",
    },
    {
      id: 2,
      date: "2024",
      title: "Primer experiencia profesional",
      subtitle: "Desarrollador Web Junior",
      description:
        "Realicé mis prácticas profesionales colaborando en el desarrollo y mantenimiento de aplicaciones web. Participé en la automatización de pruebas, resolución de incidencias frontend y backend, control de versiones con Git y trabajo en equipo utilizando Laravel y Vue.js.",
      tags: ["Laravel", "Vue.js", "PHPUnit", "Git"],
      icon: "work",
    },
    {
      id: 3,
      date: "2025",
      title: "Proyectos freelance y desarrollo continuo",
      subtitle: "Aprendizaje y construcción de soluciones",
      description:
        "He desarrollado proyectos personales y freelance enfocados en fortalecer mis conocimientos y explorar nuevas tecnologías. He trabajado en el diseño de interfaces, lógica de negocio, desarrollo backend e implementación de herramientas modernas como React, Laravel, Filament y Tailwind CSS.",
      tags: ["Laravel", "React", "Filament", "Tailwind", "Git"],
      icon: "code",
    },
    {
      id: 4,
      date: "2026 - Actualidad",
      title: "Profundización en Python",
      subtitle: "Aprendizaje autodidacta",
      description:
        "Comencé a ampliar mis conocimientos en Python mediante proyectos personales, explorando automatización, estructuras de datos y desarrollo de aplicaciones.",
      tags: ["Python"],
      icon: "study",
    },
  ];

  return (
    <div>
      <section className="retro-hero">
        <div className="retro-shell grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="retro-card p-5 sm:p-8">
            <span className="retro-label mb-5">perfil</span>
            <h1 className="retro-heading font-champion text-6xl uppercase leading-none sm:text-7xl lg:text-8xl">
              Quien soy?
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed sm:text-xl">
              Soy una persona curiosa y constante que disfruta aprender,
              resolver problemas y convertir ideas en proyectos reales.
              Actualmente estoy construyendo mi camino como desarrollador,
              fortaleciendo mis habilidades a través de la práctica y la
              creación de soluciones tecnológicas que me permiten crecer y
              enfrentar nuevos desafíos.
            </p>
          </div>

          <div className="retro-visual">
            <img
              src={characterabout}
              alt="about"
              decoding="async"
              className="w-[210px] sm:w-[270px] lg:w-[330px]"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <div className="retro-section-title">
        <h2 className="retro-heading font-champion text-5xl uppercase sm:text-6xl">
          Ruta de aprendizaje
        </h2>
        <span className="retro-label">timeline</span>
      </div>

      <Timeline items={aboutTimeline} align="alternate" />

      <ButtonPages
        left={{ to: "/projects/", label: "proyectos" }}
        right={{ to: "/contact/", label: "contacto" }}
      />
    </div>
  );
}
