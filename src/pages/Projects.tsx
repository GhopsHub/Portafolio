import characterprojects from "../assets/images/Characters/characterprojects.webp";
import { ButtonPages } from "../components/ButtonPages";
import { ListProjects } from "../components/ListProjects";
import { workData } from "../data/workData";

export default function Projects() {
  return (
    <div>
      <section className="retro-hero">
        <div className="retro-shell grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="retro-card p-5 sm:p-8">
            <span className="retro-label mb-5">seleccion de trabajo</span>
            <h1 className="retro-heading font-champion text-6xl uppercase leading-none sm:text-7xl lg:text-8xl">
              Codigo con resultado.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed sm:text-xl">
              Una recopilacion de proyectos donde combino tecnologia, estructura
              y criterio visual para resolver problemas reales.
            </p>
          </div>

          <div className="retro-visual">
            <span className="retro-big-word">work</span>
            <img
              src={characterprojects}
              alt="projects"
              className="w-[210px] sm:w-[270px] lg:w-[330px]"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <div className="retro-section-title">
        <h2 className="retro-heading font-champion text-5xl uppercase sm:text-6xl">
          Mis proyectos
        </h2>
        <span className="retro-label">{workData.length} casos</span>
      </div>

      <section className="retro-shell">
        <ListProjects data={workData} />
      </section>

      <ButtonPages
        left={{ to: "/", label: "inicio" }}
        right={{ to: "/about/", label: "sobre mi" }}
      />
    </div>
  );
}
