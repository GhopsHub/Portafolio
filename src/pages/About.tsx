import characterabout from "../assets/images/Characters/characterabout.webp";
import { ButtonPages } from "../components/ButtonPages";
import Timeline from "../components/Timeline";
import type { TimelineItem } from "../components/Timeline";

export default function About() {
  const aboutTimeline: TimelineItem[] = [
    {
      id: 1,
      date: "2022 - 2023",
      title: "Estudios de programacion",
      subtitle: "SENA",
      description:
        "Estudie en el SENA, donde adquiri bases en desarrollo web, levantamiento de requerimientos, HTML, CSS, JavaScript, PHP y estructura de bases de datos con MySQL.",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      icon: "study",
    },
    {
      id: 2,
      date: "2024",
      title: "Primer trabajo como desarrollador",
      subtitle: "Desarrollador web junior",
      description:
        "En practicas apoye automatizacion de pruebas con PHPUnit, resolucion de problemas frontend y backend, trabajo colaborativo, Laravel, Vue.js y Git.",
      tags: ["UI", "UX", "Laravel", "Vue.js", "Git"],
      icon: "work",
    },
    {
      id: 3,
      date: "2025",
      title: "Freelance y proyectos personales",
      subtitle: "Desarrollo y aprendizaje continuo",
      description:
        "He creado proyectos personales y freelance con Laravel y React, cuidando interfaz, logica, backend y herramientas como Filament, Tailwind y Bootstrap.",
      tags: ["Laravel", "React", "Vue.js", "Git", "Filament", "Tailwind", "Bootstrap"],
      icon: "code",
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
              Soy un desarrollador en crecimiento, con enfoque en aprender rapido,
              construir bien y convertir ideas en experiencias web utiles.
            </p>
          </div>

          <div className="retro-visual">
            <span className="retro-big-word">bio</span>
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
