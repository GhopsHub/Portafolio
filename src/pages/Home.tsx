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
              Soy Julian, desarrollador full stack en formacion. Construyo
              interfaces claras, funcionales y con personalidad para proyectos
              web.
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
              "Conjunto de tecnologias que conforman mi base principal de desarrollo como programador junior, con un enfoque en el desarrollo web full stack.",
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
              "Herramientas que he utilizado en pruebas, prototipos y ejercicios asistidos por IA.",
          },
          {
            icons: ["devicon:canva", "skill-icons:wordpress", "logos:figma"],
            title: "Herramientas de diseno y maquetacion",
            subtitle:
              "Experiencia en el uso de herramientas para estructurar y visualizar ideas de manera alineada al proyecto final.",
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
              "Ecosistema de herramientas que uso para colaborar, desarrollar y organizar proyectos.",
          },
          {
            icons: ["material-icon-theme:python"],
            title: "Skills en desarrollo",
            subtitle:
              "Actualmente estoy ampliando mis conocimientos en Python y otras tecnologías enfocadas en automatización, desarrollo backend y herramientas modernas para la web.",
          },
          {
            icons: ["simple-icons:openai", "simple-icons:claude"],
            title: "Asistencia con IA",
            subtitle:
              "Uso de inteligencia artificial para optimizar procesos y mejorar la productividad en mis proyectos.",
          },
          {
            icons: [
              "logos:adobe-premiere",
              "logos:adobe-after-effects",
              "logos:adobe-photoshop",
            ],
            title: "Herramientas de edicion digital",
            subtitle:
              "Conocimientos basicos en edicion de video e imagenes para contenido digital.",
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
