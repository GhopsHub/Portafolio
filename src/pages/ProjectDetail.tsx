import { useEffect, useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Maximize2, X } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { workData } from "../data/workData";
import yarnBall from "../assets/images/scroll-chase/yarn-ball.png";
import chasingCat from "../assets/images/scroll-chase/cat.png";

type ProjectSection = NonNullable<(typeof workData)[number]["sections"]>[number];

const sectionNames: Record<string, string> = {
  description: "Contexto",
  technologies: "Stack tecnico",
  gallery: "Galeria",
  history: "Proceso",
};

function sectionLabel(section: ProjectSection) {
  return section.type ? sectionNames[section.type] ?? section.type : "Seccion";
}

function textParagraphs(text?: string) {
  if (!text) return [];
  return text
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function SectionHeader({ label, title, number, dark = false }: { label: string; title: string; number: string; dark?: boolean }) {
  return (
    <div className={`mb-6 flex flex-col gap-4 border-b-2 pb-5 md:flex-row md:items-end md:justify-between ${dark ? "border-[var(--cream)]" : "border-[var(--line)]"}`}>
      <div>
        <span className="retro-label mb-4">{label}</span>
        <h2 className="font-champion text-5xl uppercase leading-none sm:text-6xl">
          {title}
        </h2>
      </div>
      <span className={`font-champion text-5xl ${dark ? "text-[var(--yellow)]" : "text-[var(--orange)]"}`}>
        {number}
      </span>
    </div>
  );
}

function ScrollChase() {
  const [progress, setProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let stopTimer = 0;

    const updateProgress = (moving: boolean) => {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollable) * 100)) : 0);
      if (moving) {
        setIsScrolling(true);
        window.clearTimeout(stopTimer);
        stopTimer = window.setTimeout(() => setIsScrolling(false), 170);
      }
    };

    const handleScroll = () => updateProgress(true);
    const handleResize = () => updateProgress(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.clearTimeout(stopTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const catPosition = 3 + progress * 0.66;
  const yarnPosition = Math.min(82, catPosition + 13);

  return (
    <div className={`scroll-chase${isScrolling ? " is-moving" : ""}`} aria-hidden="true">
      <span className="scroll-chase-track" />
      <img
        className="scroll-chase-yarn"
        src={yarnBall}
        alt=""
        style={{ top: `${yarnPosition}%` }}
      />
      <img
        className="scroll-chase-cat"
        src={chasingCat}
        alt=""
        style={{ top: `${catPosition}%` }}
      />
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = workData.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const sections = useMemo(() => project?.sections ?? [], [project]);
  const description = sections.find((section) => section.type === "description");
  const technologies = sections.find((section) => section.type === "technologies");
  const history = sections.find((section) => section.type === "history");
  const galleryImages = description?.images?.length ? description.images : project?.cover ? [project.cover] : [];
  const activeImage = galleryImages[activeImageIndex] ?? galleryImages[0];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [slug]);

  if (!project) {
    return (
      <section className="retro-shell py-20">
        <div className="retro-card p-8 text-center">
          <h1 className="page-display-title page-display-title-compact">Proyecto no encontrado</h1>
          <Link to="/projects/" className="retro-link mt-6 inline-flex px-5 py-3 font-black uppercase">
            Volver a proyectos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="project-detail-page">
      <ScrollChase />

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Cerrar imagen"
              onClick={() => setSelectedImage(null)}
              className="retro-link absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              src={selectedImage}
              alt="Vista ampliada"
              className="aspect-video max-h-[86vh] w-full max-w-6xl border-2 border-[var(--cream)] object-contain shadow-[8px_8px_0_var(--orange)]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="retro-shell py-10 sm:py-14">
        <Link
          to="/projects/"
          className="retro-link mb-8 inline-flex items-center gap-2 px-4 py-3 font-black uppercase"
        >
          <ArrowLeft className="h-5 w-5" />
          Proyectos
        </Link>

        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="retro-card-alt relative mb-6 p-6 pr-24 sm:p-8 sm:pr-28">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="retro-label mb-5">Detalles</span>
                <h1 className="page-display-title project-detail-display-title">
                  {project.name}
                </h1>
                <p className="mt-4 font-bold uppercase text-[var(--yellow)]">
                  {project.type} / {project.year}
                </p>
              </div>

            </div>
          </div>

          <div className="retro-card overflow-hidden p-3">
            {project.cover ? (
              <img
                src={project.cover}
                alt={`Portada de ${project.name}`}
                className="aspect-video w-full border-2 border-[var(--line)] object-cover"
                fetchPriority="high"
              />
            ) : (
              <div className="grid aspect-video place-items-center border-2 border-[var(--line)] bg-[var(--paper)] font-black uppercase">
                Sin portada
              </div>
            )}
          </div>
        </motion.header>

        {description?.description && (
          <motion.article
            className="retro-card mb-10 p-6 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionHeader
              label={sectionLabel(description)}
              title={description.title ?? "Resumen del proyecto"}
              number="01"
            />
            <div className="max-w-4xl space-y-5 text-lg font-semibold leading-relaxed">
              {textParagraphs(description.description).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.article>
        )}

        {technologies?.icons?.length && (
          <motion.article
            className="retro-card-alt mb-10 p-6 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionHeader
              label={sectionLabel(technologies)}
              title={technologies.title ?? "Tecnologias"}
              number="02"
              dark
            />
            {technologies.description && (
              <div className="mb-6 max-w-4xl space-y-5 text-lg font-semibold leading-relaxed">
                {textParagraphs(technologies.description).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {technologies.icons.map((icon, index) => (
                <motion.div
                  key={icon}
                  className="retro-chip grid min-h-28 place-items-center bg-white p-4"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Icon icon={icon} aria-label={`Tecnologia ${index + 1}`} className="h-12 w-12" />
                </motion.div>
              ))}
            </div>
          </motion.article>
        )}

        {galleryImages.length > 0 && activeImage && (
          <motion.article
            className="retro-card mb-10 p-6 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
          >
            <SectionHeader label="Galeria" title="Capturas del proyecto" number="03" />

            <button
              type="button"
              className="group block w-full text-left"
              onClick={() => setSelectedImage(activeImage)}
            >
              <div className="relative overflow-hidden border-2 border-[var(--line)] bg-[var(--paper)]">
                <img
                  src={activeImage}
                  alt={`Captura ${activeImageIndex + 1} de ${project.name}`}
                  className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 retro-link grid h-10 w-10 place-items-center bg-[var(--cream)]">
                  <Maximize2 className="h-5 w-5" />
                </span>
              </div>
            </button>

            {galleryImages.length > 1 && (
              <div className="mt-5 grid max-h-[420px] grid-cols-2 gap-4 overflow-y-auto pr-2 sm:grid-cols-3 lg:grid-cols-4">
                {galleryImages.map((image, index) => {
                  const isActive = index === activeImageIndex;
                  return (
                    <button
                      type="button"
                      key={`${image}-${index}`}
                      onClick={() => setActiveImageIndex(index)}
                      className={`border-2 p-1 text-left transition ${
                        isActive
                          ? "border-[var(--orange)] bg-[var(--yellow)] shadow-[4px_4px_0_var(--ink)]"
                          : "border-[var(--line)] bg-[var(--cream)] hover:bg-[var(--yellow)]"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Miniatura ${index + 1} de ${project.name}`}
                        className="aspect-video w-full object-cover"
                        loading="lazy"
                      />
                      <span className="mt-2 block text-xs font-black uppercase tracking-[0.14em]">
                        Captura {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </motion.article>
        )}

        {history?.description && (
          <motion.article
            className="retro-card p-6 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionHeader
              label={sectionLabel(history)}
              title={history.title ?? "Proceso"}
              number="04"
            />
            <div className="max-w-4xl space-y-5 text-lg font-semibold leading-relaxed">
              {textParagraphs(history.description).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.article>
        )}
      </section>
    </main>
  );
}
