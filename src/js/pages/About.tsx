import characterabout from "../../assets/images/Characters/characterabout.webp";
import { ButtonPages } from "../components/UI/buttonPages";

// Importaciones del Timeline
import Timeline from "../components/UI/timeLine";
import type { TimelineItem } from "../components/UI/timeLine";

export default function About() {
  const aboutTimeline: TimelineItem[] = [
    {
      id: 1,
      date: "2022 - 2023",
      title: "Estudios de programación",
      subtitle: "SENA",
      description:
        "Estudie en el SENA, donde adquirí conocimientos básicos en desarrollo web, adesde el levantamiento y entendimiento de requerimientos, hasta el desarrollo de sitios web utilizando HTML, CSS, JavaScript y PHP. Y la estructura de bases de datos con MySQL.",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      icon: "study",
    },
    {
      id: 2,
      date: "2024",
      title: "Primer trabajo como desarrollador",
      subtitle: "Puesto como desarrollador web junior",
      description:
        "En mi primer trabajo en practicas, trabajé en una empresa ayuadando con la automaticacion de pruebas con phpunit, tambien colaboré con otros desarrolladores y grupos para poder identificar y resolver problemas tanto en el frontend como en el backend, aprendiendo a trabajar con Laravel y Vue.js, y a utilizar herramientas de control de versiones como Git.",
      tags: ["UI", "UX", "Laravel", "Vue.js", "Git"],
      icon: "work",
    },
    {
      id: 3,
      date: "2025",
      title: "Freelance y proyectos personales",
      subtitle: "Desarrollo de proyectos personales y freelance",
      description:
        "Me he dedicao a aprender nuevas tecnologías y a desarrollar proyectos personales y freelance, utilizando Laravel y React para crear aplicaciones web completas, desde el diseño de la interfaz de usuario hasta la implementación del backend, la creacion de estos proyectos me ha permitido mejorar mis habilidades en el desarrollo web y aprender a trabajar con herramientas como Filament, Tailwind y Bootstrap para crear interfaces atractivas y funcionales. Tambien para mejorar la logica de mis proyectos y la calidad de mi codigo.",
      tags: [
        "Laravel",
        "React",
        "Vue.js",
        "Git",
        "Filament",
        "Tailwind",
        "Bootstrap",
      ],
      icon: "code",
    },
  ];

  return (
    <div>
      {/* Sección principal */}
      <section className="min-h-[calc(100vh-52px)] flex items-center justify-center px-4 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-10 p-10">
          <div className="w-full md:w-1/2 text-center">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] xl:text-[55px] mb-6 uppercase font-champion leading-tight">
              Quien soy...?
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0"></p>
          </div>

          <div className="relative w-full md:w-1/2 flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px]">
            <span className="absolute inset-0 flex items-center justify-center font-champion uppercase text-[130px] sm:text-[200px] md:text-[150px] lg:text-[240px] clr-g z-0 select-none pointer-events-none animate__animated animate__rubberBand">
              ?????
            </span>

            <img
              src={characterabout}
              alt="about"
              decoding="async"
              className="relative z-10 w-[180px] sm:w-[230px] md:w-[270px] lg:w-[300px] xl:w-[300px] h-auto"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline items={aboutTimeline} align="alternate" />

      {/* Paginación */}
      <ButtonPages
        left={{ to: "/projects/", label: "work" }}
        right={{ to: "/contact/", label: "contact" }}
      />
    </div>
  );
}
