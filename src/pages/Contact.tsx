import { ButtonPages } from "../components/ButtonPages";
import { motion } from "framer-motion";
import { Clipboard, Instagram, Mail, MapPin, Send } from "lucide-react";

const contactEmail = "julianbecerra432@gmail.com";

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="retro-hero">
        <div className="retro-shell contact-hero-layout">
          <div className="retro-visual contact-character-scene">
            <div className="contact-hanging-phone" role="img" aria-label="Teléfono retro colgando de un cable">
              <svg viewBox="0 0 240 540" aria-hidden="true">
                <path className="phone-cord" d="M120 0v14c0 12-20 12-20 24s20 12 20 24-20 12-20 24 20 12 20 24-20 12-20 24 20 12 20 24-20 12-20 24 20 12 20 24-20 12-20 24 20 12 20 24-11 15-11 29v17" />
                <g className="contact-phone-body">
                  <path d="M91 269c-24-7-39-25-39-49 0-25 17-44 43-50l12-3c9-3 18-4 27-4s18 1 27 4l12 3c26 6 43 25 43 50 0 24-15 42-39 49l-13 4v151l13 4c24 7 39 25 39 49 0 25-17 44-43 50l-12 3c-9 3-18 4-27 4s-18-1-27-4l-12-3c-26-6-43-25-43-50 0-24 15-42 39-49l13-4V273Z" transform="translate(0 -24)" fill="#ed4149" stroke="#30242a" strokeWidth="9" strokeLinejoin="round" />
                  <path d="M103 185c6-3 18-5 28-5s22 2 28 5M103 443c6 3 18 5 28 5s22-2 28-5" fill="none" stroke="#ff8580" strokeWidth="8" strokeLinecap="round" />
                  <path d="M103 259v157" fill="none" stroke="#c52236" strokeWidth="12" strokeLinecap="round" />
                  <path d="M112 270v133" fill="none" stroke="#ff7478" strokeWidth="4" strokeLinecap="round" opacity=".8" />
                  <circle cx="120" cy="222" r="3" fill="#30242a"/><circle cx="132" cy="222" r="3" fill="#30242a"/><circle cx="144" cy="222" r="3" fill="#30242a"/>
                  <circle cx="120" cy="426" r="3" fill="#30242a"/><circle cx="132" cy="426" r="3" fill="#30242a"/><circle cx="144" cy="426" r="3" fill="#30242a"/>
                </g>
              </svg>
              <span className="phone-ring phone-ring-one" />
              <span className="phone-ring phone-ring-two" />
              <span className="phone-spark phone-spark-one" aria-hidden="true">✦</span>
              <span className="phone-spark phone-spark-two" aria-hidden="true">✳</span>
            </div>
          </div>
          <div className="retro-card contact-hero-copy p-5 sm:p-8">
            <span className="retro-label mb-5">hablemos</span>
            <h1 className="page-display-title">
              Comencemos.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed sm:text-xl">
              Estoy abierto a nuevos desafíos, colaboraciones y oportunidades
              para seguir creciendo. Si tienes una idea o proyecto en mente,
              conversemos y exploremos cómo hacerlo realidad.
            </p>
          </div>

        </div>
      </section>

      <section className="retro-shell py-12">
        <motion.div
          className="retro-card-alt mb-8 grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div>
            <span className="retro-label mb-4">canal principal</span>
            <h2 className="font-champion text-5xl uppercase leading-none text-[var(--cream)] sm:text-6xl">
              Escribeme por correo
            </h2>
            <p className="mt-4 max-w-2xl font-semibold leading-relaxed text-[var(--cream)]/85">
              Cuéntame la idea, el problema o el tipo de colaboración que tienes
              en mente. Si puedo ayudarte, te responderé con el siguiente paso.
            </p>
          </div>

          <a
            href={`mailto:${contactEmail}`}
            className="retro-link inline-flex items-center justify-center gap-3 px-5 py-4 font-black uppercase"
          >
            <Send className="h-5 w-5" />
            Enviar email
          </a>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.article
            className="retro-card p-5 sm:p-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="mb-5 flex items-start justify-between gap-4 border-b-2 border-[var(--line)] pb-5">
              <div>
                <span className="retro-label mb-4">contacto</span>
                <h2 className="font-champion text-5xl uppercase leading-none">Datos directos</h2>
              </div>
              <Mail className="h-8 w-8 text-[var(--orange)]" />
            </div>

            <div className="grid gap-4">
              <a
                href={`mailto:${contactEmail}`}
                className="group border-2 border-[var(--line)] bg-[var(--paper)] p-4 transition hover:bg-[var(--yellow)]"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--orange)]">Email</p>
                <p className="mt-2 break-words text-lg font-black group-hover:underline">
                  {contactEmail}
                </p>
              </a>

              <div className="border-2 border-[var(--line)] bg-[var(--paper)] p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--orange)]">Ubicacion</p>
                <p className="mt-2 flex items-center gap-2 text-lg font-black">
                  <MapPin className="h-5 w-5" />
                  Chia, Cundinamarca
                </p>
              </div>
            </div>
          </motion.article>

          <motion.aside
            className="grid gap-5"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <article className="retro-card p-5">
              <span className="retro-label mb-4">social</span>
              <h2 className="font-champion text-5xl uppercase leading-none">Redes</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href="https://www.instagram.com/ghops_ing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-link flex items-center justify-between gap-3 px-4 py-3 font-black uppercase"
                >
                  Instagram
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${contactEmail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-link flex items-center justify-between gap-3 px-4 py-3 font-black uppercase"
                >
                  Gmail
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </article>

            <article className="retro-card p-5">
              <span className="retro-label mb-4">respuesta</span>
              <h2 className="font-champion text-5xl uppercase leading-none">Disponible</h2>
              <p className="mt-4 font-semibold leading-relaxed">
                Estoy abierto a proyectos web, prácticas, colaboración freelance
                y oportunidades junior donde pueda seguir aprendiendo y aportar.
              </p>
              <button
                type="button"
                onClick={() => navigator.clipboard?.writeText(contactEmail)}
                className="retro-link mt-5 inline-flex items-center gap-2 px-4 py-3 font-black uppercase"
              >
                <Clipboard className="h-5 w-5" />
                Copiar email
              </button>
            </article>
          </motion.aside>
        </div>
      </section>

      <ButtonPages
        left={{ to: "/about", label: "sobre mi" }}
        right={{ to: "/", label: "inicio" }}
      />
    </div>
  );
}
