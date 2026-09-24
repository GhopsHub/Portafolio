import { ButtonPages } from "../components/ButtonPages";
import characterabout from "../assets/images/Characters/characterabout.webp";
import me6 from "../assets/images/me6.png";

const chapters = [
  { year: "2022 — 2023", title: "Formación en desarrollo de software", place: "SENA", detail: "Fundamentos de programación, desarrollo web y bases de datos.", tags: "HTML · CSS · JavaScript · PHP · MySQL", color: "mint" },
  { year: "2024", title: "Primera experiencia profesional", place: "Desarrollador web junior", detail: "Aplicaciones web, pruebas, resolución de incidencias y trabajo en equipo.", tags: "Laravel · Vue.js · PHPUnit · Git", color: "coral" },
  { year: "2025", title: "Proyectos freelance y desarrollo continuo", place: "Aprendizaje en acción", detail: "Interfaces, lógica de negocio y soluciones full stack para proyectos reales.", tags: "Laravel · React · Filament · Tailwind", color: "blue" },
  { year: "2026 — HOY", title: "Profundizando en Python", place: "Aprendizaje autodidacta", detail: "Automatización, estructuras de datos y nuevas aplicaciones.", tags: "Python · Curiosidad · Práctica", color: "yellow" },
];

export default function About() {
  return (
    <main className="about-page about-scrapbook">
      <div className="about-scrapbook-stack" aria-hidden="true"><i /><i /><i /></div>
      <section className="about-resume-sheet">
        <div className="about-sheet-top"><span>PERFIL CREATIVO · DESARROLLO WEB</span><span className="about-date-stamp">2026<br />ACTUAL</span></div>
        <div className="about-nameplate">
          <span className="about-section-kicker">Un poco sobre mí</span>
          <h1 className="page-display-title">Sobre <em className="title-accent">mí.</em></h1>
          <p>Desarrollador web · Colombia</p>
        </div>

        <div className="about-intro-grid">
          <figure className="about-portrait-frame">
            <span className="about-tape" aria-hidden="true" />
            <img src={characterabout} alt="Ilustración original de Julián" className="character-original" fetchPriority="high" />
            <figcaption>Julián Becerra <span>— construyendo ideas</span></figcaption>
          </figure>
          <div className="about-bio-card">
            <h2 className="about-bio-title">Hola, soy Julián</h2>
            <p>Soy una persona curiosa y constante que disfruta aprender, resolver problemas y convertir ideas en proyectos reales. Actualmente construyo mi camino como desarrollador, fortaleciendo mis habilidades con práctica y soluciones tecnológicas.</p>
            <div className="about-traits"><span>Creativo</span><span>Autodidacta</span><span>Constante</span></div>
            <span className="about-scribble" aria-hidden="true">Mmm…</span>
          </div>
        </div>

        <div className="about-sheet-divider"><span>MI RECORRIDO</span><i /></div>
        <section className="about-chapters" aria-label="Experiencia y formación">
          {chapters.map((chapter, index) => (
            <article className={`about-chapter about-chapter-${chapter.color}`} key={chapter.year} style={{ animationDelay: `${index * 110}ms` }}>
              <span className="about-chapter-year">{chapter.year}</span>
              <h2>{chapter.title}</h2>
              <strong>{chapter.place}</strong>
              <p>{chapter.detail}</p>
              <span className="about-chapter-tags">{chapter.tags}</span>
            </article>
          ))}
        </section>

        <div className="about-sheet-bottom"><span>APRENDER · CREAR · COMPARTIR</span><span>PORTAFOLIO PERSONAL <b>✳</b></span><img src={me6} alt="" aria-hidden="true" className="about-me6-decoration" /></div>
      </section>
      <div className="about-floating-sticker about-sticker-star" aria-hidden="true">✳</div>
      <div className="about-floating-sticker about-sticker-smile" aria-hidden="true">☺</div>
      <ButtonPages left={{ to: "/edits/", label: "videos" }} right={{ to: "/contact/", label: "contacto" }} />
    </main>
  );
}
