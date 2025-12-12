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

      {/* Paginación */}
      <ButtonPages
        left={{ to: "/projects/", label: "work" }}
        right={{ to: "/contact/", label: "contact" }}
      />
    </div>
  );
}
