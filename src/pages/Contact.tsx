import charactercontact from "../assets/images/Characters/charactercontact.webp";
import { ButtonPages } from "../components/ButtonPages";
import { Instagram, Mail, MapPin, Music2 } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <section className="retro-hero">
        <div className="retro-shell grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="retro-card p-5 sm:p-8">
            <span className="retro-label mb-5">hablemos</span>
            <h1 className="retro-heading font-champion text-6xl uppercase leading-none sm:text-7xl lg:text-8xl">
              Comencemos.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed sm:text-xl">
              Si tienes una idea, una pagina por mejorar o un proyecto en pausa,
              podemos darle forma con una interfaz clara y funcional.
            </p>
          </div>

          <div className="retro-visual">
            <span className="retro-big-word">hola</span>
            <img
              src={charactercontact}
              alt="contact"
              decoding="async"
              className="w-[230px] sm:w-[290px] lg:w-[350px]"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="retro-shell grid gap-4 py-10 md:grid-cols-3">
        <article className="retro-card p-5">
          <Mail className="mb-4 h-7 w-7 text-[var(--orange)]" />
          <h2 className="font-champion text-4xl uppercase">Email</h2>
          <a className="mt-3 block break-words font-bold" href="mailto:julianbecerra432@gmail.com">
            julianbecerra432@gmail.com
          </a>
        </article>

        <article className="retro-card p-5">
          <MapPin className="mb-4 h-7 w-7 text-[var(--cyan)]" />
          <h2 className="font-champion text-4xl uppercase">Ubicacion</h2>
          <p className="mt-3 font-bold">Chia, Cundinamarca</p>
        </article>

        <article className="retro-card p-5">
          <Instagram className="mb-4 h-7 w-7 text-[var(--plum)]" />
          <h2 className="font-champion text-4xl uppercase">Social</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/ghops_ing/"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-chip flex items-center gap-2 font-black uppercase"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@ghops_ongs"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-chip flex items-center gap-2 font-black uppercase"
            >
              <Music2 className="h-4 w-4" />
              TikTok
            </a>
          </div>
        </article>
      </section>

      <ButtonPages
        left={{ to: "/about", label: "sobre mi" }}
        right={{ to: "/", label: "inicio" }}
      />
    </div>
  );
}
