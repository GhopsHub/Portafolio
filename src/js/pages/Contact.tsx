import charactercontact from "../../assets/images/Characters/charactercontact.webp";
import { ButtonPages } from "../components/UI/buttonPages";
import { UnderLine } from "../components/Animations/UnderLine/underLine";

import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div>
      {/* Sección principal */}
      <section className="min-h-[calc(100vh-52px)] flex items-center justify-center px-4 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-10 p-10">
          <div className="w-full md:w-1/2 text-center">
            <h1 className="text-[40px] sm:text-[50px] md:text-[60px] xl:text-[60px] mb-6 uppercase font-champion leading-tight">
              ¡Comencemos!
            </h1>
          </div>
          <div className="relative w-full md:w-1/2 flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px]">
            <span className="absolute inset-0 flex items-center justify-center font-champion uppercase text-[130px] sm:text-[200px] md:text-[150px] lg:text-[240px] clr-g z-0 select-none pointer-events-none animate__animated animate__rubberBand">
              hola!!
            </span>
            <img
              src={charactercontact}
              alt="contact"
              decoding="async"
              className="relative z-10 w-[250px] sm:w-[250px] md:w-[290px] lg:w-[320px] xl:w-[320px] h-auto"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Sección de contacto */}
      <section className="flex justify-center px-4 py-16">
        <div className="flex flex-col gap-8 w-full max-w-2xl text-white">
          {/* Info de contacto */}
          <div className="p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-champion mb-4 border-b border-white pb-2">
              Contact
            </h2>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              julianbecerra432@gmail.com
            </p>
          </div>

          {/* Ubicación */}
          <div className="p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-champion mb-4 border-b border-white pb-2">
              Location
            </h2>
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Chía, Cundinamarca
            </p>
          </div>

          {/* Redes */}
          <div className="p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-champion mb-4 border-b border-white pb-2">
              Socials
            </h2>
            <ul className="flex gap-6 mt-2 text-white text-base">
              <li>
                <UnderLine>
                  <a
                    href="https://www.tiktok.com/@ghops_ongs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    TikTok
                  </a>
                </UnderLine>
              </li>
              <li>
                <UnderLine>
                  <a
                    href="https://www.instagram.com/ghops_ing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    Instagram
                  </a>
                </UnderLine>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Paginación */}
      <ButtonPages
        left={{ to: "/about", label: "about" }}
        right={{ to: "/", label: "home" }}
      />
    </div>
  );
}
