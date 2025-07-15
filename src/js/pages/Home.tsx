import charactermain from "../../assets/images/Characters/charactermain.png";
import MarqueeText from "../components/Animations/Marquee/Marquee";

export default function Home() {
  return (
    <>
      <section className="min-h-[calc(100vh-52px)] flex items-center justify-center px-4 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-10">

          {/* Texto descriptivo */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] xl:text-[55px] mb-6 uppercase font-champion leading-tight">
              Haciendo que las ideas se vean bien en internet
            </h1>

            <p className="font-sans text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
              Soy Julian, un desarrollador full stack en formación que colabora con equipos, ideas y proyectos para crear experiencias web modernas, construir presencia digital y escalar ideas que dejan huella.
            </p>
          </div>

          {/* Imagen sobre texto GHOPS */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px]">
            {/* Texto GHOPS detrás */}
            <span className="absolute inset-0 flex items-center justify-center font-champion uppercase text-[130px] sm:text-[200px] md:text-[200px] lg:text-[240px] clr-g z-0 select-none pointer-events-none animate__animated animate__rubberBand">
              ghops
            </span>

            {/* Imagen encima */}
            <img
              src={charactermain}
              alt="Mi foto"
              className="relative z-10 w-[180px] sm:w-[230px] md:w-[270px] lg:w-[300px] xl:w-[300px] h-auto"
            />
          </div>

        </div>
      </section>

      {/* Seccion de carrusel */}
      <div className="bg-black clr-g uppercase font-champion">
        <MarqueeText baseVelocity={-0.7}>
          Fullstack • React • Laravel • Tailwind •
        </MarqueeText>
        <MarqueeText baseVelocity={0.7}>
          portfolio presentation • Junior Developer • Colombia •
        </MarqueeText>
      </div>


      <div className="bg-red-300" style={{ height: "300vh" }}>
        
    </div>

    </>
  );
}
