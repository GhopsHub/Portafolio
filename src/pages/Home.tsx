import { Sparkles } from "lucide-react";

import charactermain from "../assets/images/Characters/charactermain.webp";
import cloud1 from "../assets/images/cloud1.png";
import cloud2 from "../assets/images/cloud2.png";
import lightbulb from "../assets/images/character-effects/lightbulb.svg";
import { ButtonPages } from "../components/ButtonPages";
import MarqueeText from "../components/Marquee";
import { Skills } from "../components/Skills";

const skillGroups = [
  {
    icons: ["logos:php", "logos:laravel", "logos:vue", "logos:react", "logos:tailwindcss-icon", "logos:css-3", "logos:typescript-icon", "logos:mysql-icon", "logos:prettier"],
    title: "Stack principal",
    subtitle: "Herramientas y tecnologías que forman mi entorno principal de desarrollo.",
  },
  {
    icons: ["logos:nodejs-icon", "logos:threejs", "logos:docker-icon", "logos:ubuntu", "logos:jwt-icon"],
    title: "Exploración tecnológica",
    subtitle: "Herramientas utilizadas en prototipos, pruebas técnicas y desarrollo asistido por IA.",
  },
  {
    icons: ["devicon:canva", "skill-icons:wordpress", "logos:figma"],
    title: "Herramientas de diseño y maquetación",
    subtitle: "Herramientas orientadas a la creación de interfaces, prototipos y estructuras visuales.",
  },
  {
    icons: ["uil:windows", "logos:visual-studio-code", "logos:discord-icon", "logos:zoom-icon"],
    title: "Entorno de trabajo",
    subtitle: "Herramientas y servicios que utilizo para desarrollar, colaborar y gestionar proyectos.",
  },
  {
    icons: ["material-icon-theme:python"],
    title: "Skills en desarrollo",
    subtitle: "Profundizando en Python y tecnologías enfocadas en automatización y desarrollo técnico.",
  },
  {
    icons: ["simple-icons:openai", "simple-icons:claude"],
    title: "Asistencia con IA",
    subtitle: "Uso de inteligencia artificial como apoyo en procesos de desarrollo, automatización y productividad.",
  },
  {
    icons: ["logos:adobe-premiere", "logos:adobe-after-effects", "logos:adobe-photoshop"],
    title: "Herramientas de edición digital",
    subtitle: "Experiencia básica en edición de imagen y video para contenido digital y recursos visuales.",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-cover">
        <div className="retro-shell home-poster">
          <div className="home-poster-top">
            <span><Sparkles aria-hidden="true" size={15} /> PORTAFOLIO CREATIVO</span>
            <span>JULIÁN BECERRA · COLOMBIA</span>
          </div>

          <div className="home-poster-grid">
            <div className="home-main-column">
              <div className="home-display">
                <span className="home-kicker">Desarrollo web · ideas digitales</span>
                <h1 className="font-champion page-display-title uppercase">
                  Tu idea.<br />
                  <span className="title-accent">Mi código.</span>
                </h1>
              </div>

              <div className="home-art-panel">
                <div className="home-art-caption">
                  <span>Diseño + desarrollo</span>
                  <strong>Ideas con carácter</strong>
                </div>
                <img
                  src={charactermain}
                  alt="Ilustración de Julián"
                  className="character-original home-hero-sprite"
                  fetchPriority="high"
                />
                <img
                  src={lightbulb}
                  alt=""
                  aria-hidden="true"
                  className="character-effect home-lightbulb"
                />
                <span className="home-art-sticker">CREAR<br />Y PROBAR</span>
              </div>
            </div>

            <aside className="home-sidebar">
              <div className="home-note-card">
                <span className="home-note-label">Hola, soy Julián</span>
                <p>
                  Desarrollador full stack. Diseño y construyo experiencias web
                  funcionales, escalables y visualmente cuidadas.
                </p>
                <div className="home-actions">
                  <ButtonPages to="/projects/" direction="right" className="w-full">
                    ver proyectos
                  </ButtonPages>
                  <ButtonPages to="/contact/" direction="right" className="w-full">
                    hablemos
                  </ButtonPages>
                </div>
              </div>

              <article className="home-diorama-card home-forest-diorama">
                <svg className="diorama-scene" viewBox="0 0 480 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  <defs>
                    <linearGradient id="forest-sky" x2="0" y2="1"><stop stopColor="#243658"/><stop offset="1" stopColor="#e38c61"/></linearGradient>
                    <linearGradient id="forest-ground" x2="0" y2="1"><stop stopColor="#527658"/><stop offset="1" stopColor="#202f38"/></linearGradient>
                  </defs>
                  <rect width="480" height="210" fill="url(#forest-sky)" />
                  <circle cx="371" cy="53" r="23" fill="#ffe8a6" />
                  <path d="M0 126Q86 72 166 123T330 112T480 120V210H0Z" fill="#394b50" />
                  <path d="M0 150Q92 100 182 148T358 140T480 145V210H0Z" fill="url(#forest-ground)" />
                  <g className="forest-tree forest-tree-back" fill="#263b3c"><path d="M45 182 82 83l38 99zM100 190l47-119 45 119zM319 190l42-112 42 112zM389 191l39-94 40 94z"/></g>
                  <g className="forest-tree forest-tree-front" fill="#172a2e"><path d="m-5 208 52-133 52 133zM151 211l52-134 50 134zM258 208l52-131 54 131zM375 211l50-129 59 129z"/></g>
                  <g className="forest-fireflies" fill="#ffe58e"><circle cx="139" cy="91" r="2.5"/><circle cx="278" cy="116" r="2"/><circle cx="228" cy="74" r="2.5"/><circle cx="420" cy="81" r="2"/></g>
                </svg>
                <div className="home-diorama-copy"><span>01 · EXPLORACIÓN</span><strong>Ideas en código</strong></div>
              </article>
              <article className="home-diorama-card home-medieval-diorama">
                <svg className="diorama-scene" viewBox="0 0 480 210" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  <defs>
                    <linearGradient id="medieval-sky" x2="0" y2="1"><stop stopColor="#7486b3"/><stop offset=".58" stopColor="#edb58b"/><stop offset="1" stopColor="#f6d69d"/></linearGradient>
                  </defs>
                  <rect width="480" height="210" fill="url(#medieval-sky)" />
                  <circle cx="86" cy="53" r="21" fill="#fff0c2" opacity=".92" />
                  <path d="M0 155 77 124l65 24 90-45 82 41 88-42 78 33v75H0z" fill="#9b8179" />
                  <g fill="#5c4652">
                    <path d="M52 117h48v82H52zM43 117l33-41 34 41zM61 79h12V63h17v16h12v20H61z"/>
                    <path d="M132 99h69v100h-69zM122 99l45-48 45 48zM145 62h13V43h17v19h13v23h-43z"/>
                    <path d="M218 126h43v73h-43zM209 126l30-35 31 35z"/>
                    <path d="M285 105h83v94h-83zM275 105l51-59 52 59zM297 68h15V43h20v25h16v25h-51z"/>
                    <path d="M385 122h54v77h-54zM377 122l35-42 35 42z"/>
                  </g>
                  <g fill="#ffd889"><path d="M66 133h9v15h-9zM84 133h9v15h-9zM149 116h10v16h-10zM174 116h10v16h-10zM302 123h10v17h-10zM340 123h10v17h-10zM403 139h9v15h-9z"/></g>
                  <path d="M0 185q120-14 242 3t238-4v26H0z" fill="#463843" />
                </svg>
                <div className="home-diorama-copy"><span>02 · DESARROLLO</span><strong>Full stack junior</strong></div>
              </article>
            </aside>
          </div>

          <div className="home-poster-foot">
            <span>01 / CREATIVIDAD</span>
            <span>02 / DESARROLLO</span>
            <span>03 / AUTOMATIZACIÓN</span>
          </div>
        </div>
      </section>

      <section className="home-toolkit-section">
        <div className="toolkit-clouds" aria-hidden="true">
          <img className="toolkit-cloud toolkit-cloud-blue" src={cloud2} alt="" />
          <img className="toolkit-cloud toolkit-cloud-sunset" src={cloud1} alt="" />
        </div>
        <div className="home-marquee">
          <MarqueeText baseVelocity={-1}>
            • Fullstack • React • Laravel • Tailwind •
          </MarqueeText>
          <MarqueeText baseVelocity={1}>
            • Portafolio • Presentación • Junior Developer • Colombia •
          </MarqueeText>
        </div>

        <div className="toolkit-intro">
          <span className="toolkit-index">ESTUDIO · 01—07</span>
          <div>
            <span className="home-skills-eyebrow">Mi caja de herramientas</span>
            <h2>Lo que uso<br /><em>para crear.</em></h2>
          </div>
          <p>Un pequeño inventario de tecnologías, ideas y recursos que dan forma a cada proyecto.</p>
        </div>

        <Skills items={skillGroups} className="home-skills-carousel" />
      </section>

      <ButtonPages
        left={{ to: "/contact", label: "contacto" }}
        right={{ to: "/projects/", label: "proyectos" }}
      />
    </main>
  );
}
