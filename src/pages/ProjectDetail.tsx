import { useState } from "react";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { workData } from "../data/workData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = workData.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return <div className="retro-shell retro-card my-20 p-8">Proyecto no encontrado</div>;
  }

  return (
    <>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Vista ampliada"
            className="max-h-[90%] max-w-[90%] border-2 border-[var(--cream)] shadow-[8px_8px_0_var(--orange)]"
          />
        </div>
      )}

      <section className="retro-shell py-16">
        <div className="retro-card-alt mb-12 p-6 text-center">
          <span className="retro-label mb-4">proyecto</span>
          <h1 className="font-champion text-6xl uppercase sm:text-7xl">{project.name}</h1>
          <p className="mt-3 font-bold uppercase text-[var(--yellow)]">
            {project.type} / {project.year}
          </p>
        </div>

        {project.sections
          ?.filter((section) =>
            ["description", "technologies", "history"].includes(section.type)
          )
          .map((section, index) => (
            <article key={index} className="retro-card mx-auto mb-10 max-w-5xl p-5 sm:p-8">
              {section.title && (
                <h2 className="mb-6 text-center font-champion text-5xl uppercase">
                  {section.title}
                </h2>
              )}

              {section.description && (
                <p className="mx-auto mb-8 max-w-3xl text-center text-lg font-semibold leading-relaxed">
                  {section.description}
                </p>
              )}

              {section.url && (
                <div className="mb-8 text-center">
                  <a
                    href={section.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-link inline-block px-5 py-3 font-black uppercase"
                  >
                    Ver sitio
                  </a>
                </div>
              )}

              {section.type === "technologies" &&
                Array.isArray(section.icons) &&
                section.icons.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-4">
                    {section.icons.map((icon, i) => (
                      <div
                        key={icon}
                        className="retro-chip grid h-16 w-16 place-items-center bg-white"
                      >
                        <Icon
                          icon={icon}
                          aria-label={`Tecnologia ${i + 1}`}
                          className="h-10 w-10"
                        />
                      </div>
                    ))}
                  </div>
                )}

              {section.type !== "technologies" &&
                Array.isArray(section.images) &&
                section.images.length > 0 && (
                  <div className="space-y-8">
                    {section.images.map((img, i) => (
                      <button
                        type="button"
                        key={i}
                        className="mx-auto block w-full max-w-3xl border-2 border-[var(--line)] bg-[var(--paper)] p-2 text-left shadow-[6px_6px_0_var(--ink)]"
                        onClick={() => setSelectedImage(img)}
                      >
                        <img
                          src={img}
                          alt={`Imagen ${i + 1}`}
                          className="h-auto w-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}
            </article>
          ))}
      </section>
    </>
  );
}
