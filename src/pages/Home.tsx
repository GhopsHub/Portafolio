import charactermain from "../assets/images/Characters/charactermain.webp";

import { ButtonPages } from "../components/ButtonPages";
import MarqueeText from "../components/Marquee";
import { Skills } from "../components/Skills";

export default function Home() {
  return (
    <>
      <section className="retro-hero">
        <div className="retro-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="retro-card p-5 sm:p-8">
            <span className="retro-label mb-5">
              Full stack junior / Colombia
            </span>
            <h1 className="retro-heading font-champion text-6xl uppercase leading-none sm:text-7xl lg:text-8xl">
              Tu idea, mi codigo.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed sm:text-xl">
              Soy Julián, desarrollador full stack. Diseño y construyo
              experiencias web funcionales, escalables y visualmente cuidadas.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonPages
                to="/projects/"
                direction="right"
                className="sm:w-fit"
              >
                ver proyectos
              </ButtonPages>
              <ButtonPages
                to="/contact/"
                direction="right"
                className="sm:w-fit"
              >
                contacto
              </ButtonPages>
            </div>
          </div>

          <div className="retro-visual">
            <img
              src={charactermain}
              alt="home"
              className="w-[210px] sm:w-[270px] lg:w-[330px]"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <div className="border-y-2 border-[var(--line)] bg-[var(--ink)] py-2 font-champion uppercase text-[var(--yellow)]">
        <MarqueeText baseVelocity={-1}>
          • Fullstack • React • Laravel • Tailwind •
        </MarqueeText>
        <MarqueeText baseVelocity={1}>
          • portfolio • presentacion • Junior Developer • Colombia •
        </MarqueeText>
      </div>

      <div className="retro-section-title">
        <h2 className="retro-heading font-champion text-5xl uppercase sm:text-6xl">
          Conocimientos y Herramientas
        </h2>
        <span className="retro-label">stack actual</span>
      </div>

      <Skills
        items={[
          {
            icons: [
              "logos:php",
              "logos:laravel",
              "logos:vue",
              "logos:react",
              "logos:tailwindcss-icon",
              "logos:css-3",
              "logos:typescript-icon",
              "logos:mysql-icon",
              "logos:prettier",
            ],
            title: "Stack principal",
            subtitle:
              "Herramientas y tecnologías que forman mi entorno principal de desarrollo.",
          },
          {
            icons: [
              "logos:nodejs-icon",
              "logos:threejs",
              "logos:docker-icon",
              "logos:ubuntu",
              "logos:jwt-icon",
            ],
            title: "Exploracion tecnologica",
            subtitle:
              "Herramientas utilizadas en prototipos, pruebas técnicas y desarrollo asistido por IA.",
          },
          {
            icons: ["devicon:canva", "skill-icons:wordpress", "logos:figma"],
            title: "Herramientas de diseno y maquetacion",
            subtitle:
              "Herramientas orientadas a la creación de interfaces, prototipos y estructuras visuales.",
          },
          {
            icons: [
              "uil:windows",
              "logos:visual-studio-code",
              "logos:discord-icon",
              "logos:zoom-icon",
            ],
            title: "Entorno de trabajo",
            subtitle:
              "Herramientas y servicios que utilizo para desarrollar, colaborar y gestionar proyectos.",
          },
          {
            icons: ["material-icon-theme:python"],
            title: "Skills en desarrollo",
            subtitle:
              "Profundizando en Python y tecnologías enfocadas en automatización y desarrollo técnico.",
          },
          {
            icons: ["simple-icons:openai", "simple-icons:claude"],
            title: "Asistencia con IA",
            subtitle:
              "Uso de inteligencia artificial como apoyo en procesos de desarrollo, automatización y productividad.",
          },
          {
            icons: [
              "logos:adobe-premiere",
              "logos:adobe-after-effects",
              "logos:adobe-photoshop",
            ],
            title: "Herramientas de edicion digital",
            subtitle:
              "Experiencia básica en edición de imagen y video para contenido digital y recursos visuales.",
          },
        ]}
      />

      <ButtonPages
        left={{ to: "/contact", label: "contacto" }}
        right={{ to: "/projects/", label: "proyectos" }}
      />
    </>
  );
}
