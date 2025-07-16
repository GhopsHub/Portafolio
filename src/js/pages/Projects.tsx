import characterprojects from "../../assets/images/Characters/characterprojects.png"
import { ButtonPages } from "@/components/UI/buttonPages";

export default function Projects() {
  return (
    <div>
      <section className="min-h-[calc(100vh-52px)] flex items-center justify-center px-4 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-10">

          {/* Texto descriptivo */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] xl:text-[55px] mb-6 uppercase font-champion leading-tight">
             Código con resultado.
            </h1>
          </div>

          {/* Imagen sobre texto GHOPS */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px]">
            {/* Imagen encima */}
            <img
              src={characterprojects}
              alt="Mi foto"
              className="relative z-10 w-[180px] sm:w-[230px] md:w-[270px] lg:w-[300px] xl:w-[300px] h-auto"
            />
          </div>
        </div>
      </section>

      <div>
        <h2>SakuraRent</h2>
      </div>

      <div>
        <h2>SakuraRent Movil</h2>
      </div>

      <div>
        <h3>GhopStore</h3>
      </div>

      <div>
        <h3>StamPurr</h3>
      </div>

      {/* Paginacion */}
      <ButtonPages
        left={{ to: "/", label: "home" }}
        right={{ to: "/about/", label: "about" }}
      />

    </div>
  )
}
