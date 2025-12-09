import characterprojects from "../../assets/images/Characters/characterprojects.webp";
import { ButtonPages } from "../components/UI/buttonPages";
import { ListProjects } from "../components/UI/listProjects";
import { workData } from "../../data/workData";

export default function Projects() {
  return (
    <div>
      <section className="min-h-[calc(100vh-52px)] flex items-center justify-center px-4 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-10 p-10">
          {/* Texto descriptivo */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] xl:text-[55px] mb-6 uppercase font-champion leading-tight">
              Código con resultado.
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
              Aqui algunos de mis proyectos destacados, donde cada línea de
              código refleja mi pasión por el desarrollo y la innovación.
            </p>
          </div>

          {/* Imagen sobre texto GHOPS */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px]">
            {/* Imagen encima */}
            <img
              src={characterprojects}
              alt="projects"
              className="relative z-10 w-[180px] sm:w-[230px] md:w-[270px] lg:w-[300px] xl:w-[300px] h-auto"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <div className="text-center">
        <h2 className="uppercase font-champion mt-20 mb-10 text-[28px] sm:text-[36px] md:text-[48px] xl:text-[55px] ">
          Mis proyectos
        </h2>
      </div>

      {/* Tabla con proyectos */}
      <section className="p-10 max-w-7xl mx-auto ">
        <ListProjects data={workData} />
      </section>

      {/* Paginacion */}
      <ButtonPages
        left={{ to: "/", label: "home" }}
        right={{ to: "/about/", label: "about" }}
      />
    </div>
  );
}
