import characterabout from "../../assets/images/Characters/characterabout.png";
import { ButtonPages } from "@/js/components/UI/buttonPages";

export default function About() {

  return (
    <div>
      {/* Sección principal */}
      <section className="min-h-[calc(100vh-52px)] flex items-center justify-center px-4 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-10 p-10">

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] xl:text-[55px] mb-6 uppercase font-champion leading-tight">
              Aprendiendo con práctica.
            </h1>
          </div>
          <div className="relative w-full md:w-1/2 flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px]">
            <img
              src={characterabout}
              alt="about"
              decoding="async"
              className="relative z-10 w-[180px] sm:w-[230px] md:w-[270px] lg:w-[300px] xl:w-[300px] h-auto"
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
