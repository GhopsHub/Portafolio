import characterabout from "../../assets/images/Characters/characterabout.webp";
import { ButtonPages } from "../components/UI/buttonPages";

export default function About() {
  return (
    <div>
      {/* Sección principal */}
      <section className="min-h-[calc(100vh-52px)] flex items-center justify-center px-4 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-10 p-10">
          <div className="w-full md:w-1/2 text-center">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] xl:text-[55px] mb-6 uppercase font-champion leading-tight">
              Quien soy...?
            </h1>
          </div>
          <div className="relative w-full md:w-1/2 flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px]">
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

      {/* Sección secundaria */}
      <section className="flex justify-center">
        <div className="max-w-2xl p-6 rounded-md shadow-md mb-16">
          <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed text-center">
            Soy <strong>Julián</strong>, tecnólogo en análisis y desarrollo de
            software. Tengo 6 meses certificados y otros 6 no certificados en
            los que he creado varios sistemas, aplicando buenas prácticas para
            mejorar mis habilidades fullstack.
            <br />
            <br />
            Siempre estoy en constante aprendizaje, explorando nuevas
            tecnologías y herramientas. Me apasiona el desarrollo web y disfruto
            creando aplicaciones funcionales y atractivas.
            <br />
            <br />
            Si buscas a alguien que aprende rápido y construye proyectos reales,{" "}
            <strong>¡aquí estoy!</strong>
          </p>
        </div>
      </section>

      {/* Paginación */}
      <ButtonPages
        left={{ to: "/projects/", label: "work" }}
        right={{ to: "/contact/", label: "contact" }}
      />
    </div>
  );
}
