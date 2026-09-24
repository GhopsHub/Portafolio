import { ButtonPages } from "../components/ButtonPages";
import { ListProjects } from "../components/ListProjects";
import ProjectScrollFlight from "../components/ProjectScrollFlight";
import { workData } from "../data/workData";
import characterprojects from "../assets/images/Characters/characterprojects.webp";

const technologyCount = new Set(workData.flatMap(({ technologies }) => technologies.split(/[~·,]/).map((name) => name.trim()).filter(Boolean))).size;
const latestYear = 2026;

const metrics = [
  { value: String(workData.length).padStart(2, "0"), label: "Proyectos", note: "En el archivo" },
  { value: String(technologyCount).padStart(2, "0"), label: "Tecnologías", note: "En uso y exploración" },
  { value: String(latestYear), label: "Último año", note: "Proyectos recientes" },
];

export default function Projects() {
  return (
    <main className="projects-page projects-redesign">
      <ProjectScrollFlight />
      <section className="projects-dashboard-hero">
        <div className="projects-dashboard-copy">
          <span className="project-paper-label">PANEL DE TRABAJO · PORTAFOLIO</span>
          <h1 className="page-display-title">Mis<br /><span className="title-accent">proyectos.</span></h1>
          <p>Una vista general de ideas, herramientas y productos que he construido con código.</p>
          <span className="projects-live-status"><i /> ARCHIVO ACTUALIZADO · {latestYear}</span>
        </div>
        <div className="projects-dashboard-character">
          <img src={characterprojects} alt="Ilustración original de Julián trabajando" className="character-original" fetchPriority="high" />
          <span className="project-hero-spark project-hero-spark-one" aria-hidden="true">✦</span>
          <span className="project-hero-spark project-hero-spark-two" aria-hidden="true">✳</span>
        </div>
      </section>

      <section className="projects-metrics" aria-label="Resumen de proyectos">
        {metrics.map((metric, index) => (
          <article className={`projects-metric projects-metric-${index}`} key={metric.label}>
            <strong>{metric.value}</strong>
            <div><h2>{metric.label}</h2><span>{metric.note}</span></div>
          </article>
        ))}
      </section>

      <section className="projects-showcase" aria-labelledby="projects-heading">
        <div className="projects-showcase-heading">
          <div><span className="project-paper-label">ÍNDICE DE TRABAJO</span><h2 id="projects-heading" className="page-section-title">Mis proyectos</h2></div>
          <span className="projects-list-count">{String(workData.length).padStart(2, "0")} FICHAS</span>
        </div>
        <ListProjects data={workData} />
      </section>

      <ButtonPages left={{ to: "/", label: "inicio" }} right={{ to: "/edits/", label: "videos" }} />
    </main>
  );
}
