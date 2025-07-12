import character6 from "../assets/images/Characters/character6.png"

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-52px)] flex items-center justify-center px-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-4 w-full max-w-5xl">

        {/* Descripcion */}
        <div className="text-center md:text-center md:mr-4">
          <h1 className="text-[22px] mb-2 uppercase font-champion">
            Haciendo que las ideas se vean bien en internet
          </h1>
          <p className="font-sans max-w-md">
            Julian, un desarrollador full stack en formación que colabora con equipos, ideas y proyectos para crear experiencias web modernas, construir presencia digital y escalar ideas que dejan huella.
          </p>
        </div>

        {/* Imagen + texto */}
        <div className="relative flex justify-center items-center h-[300px] sm:h-[350px] md:h-[400px]">
          <span className="absolute font-champion uppercase text-[100px] sm:text-[130px] md:text-[160px] clr-g z-0 select-none pointer-events-none">
            ghops
          </span>

          {/* Imagen encima */}
          <img
            src={character6}
            alt="Mi foto"
            className="relative z-10 w-52 sm:w-60 md:w-72 lg:w-80 h-auto"
          />
        </div>

      </div>
    </div>
  )
}
