import { useState } from "react";
import { useParams } from "react-router-dom";
import { workData } from "../../../data/workData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = workData.find((p) => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <>
      {/* Modal simple, sin animaciones */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Vista ampliada"
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </div>
      )}

      <section className="w-full px-4 sm:px-8 md:px-16 py-16 bg-neutral-950 text-neutral-200">
        {project.sections
          ?.filter((s) =>
            ["description", "technologies", "history"].includes(s.type)
          )
          .map((section, index) => (
            <div
              key={index}
              className="max-w-4xl mx-auto mb-24 border-b border-neutral-800 pb-16"
            >
              {/* Título limpio */}
              {section.title && (
                <h2 className="text-3xl font-semibold text-center mb-10">
                  {section.title}
                </h2>
              )}

              {/* Descripción ordenada */}
              {section.description && (
                <p className="text-lg leading-relaxed text-neutral-300 mb-12 text-center">
                  {section.description}
                </p>
              )}

              {/* Link */}
              {section.url && (
                <div className="text-center mb-12">
                  <a
                    href={section.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 border border-neutral-600 rounded-md text-neutral-200 hover:bg-neutral-800 transition"
                  >
                    Ver sitio
                  </a>
                </div>
              )}

              {/* CONTENIDO VISUAL */}
              {Array.isArray(section.images) && section.images.length > 0 && (
                <>
                  {/* Tecnologías: fila muy limpia */}
                  {section.type === "technologies" ? (
                    <div className="flex flex-wrap justify-center gap-10">
                      {section.images.map((img, i) => (
                        <div key={i} className="w-14 h-14 opacity-80">
                          <img
                            src={img}
                            alt={`Tecnología ${i + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Imágenes de proyecto: enfoque limpio sin efectos */
                    <div className="space-y-20">
                      {section.images.map((img, i) => (
                        <div
                          key={i}
                          className="w-full max-w-3xl mx-auto cursor-pointer"
                          onClick={() => setSelectedImage(img)}
                        >
                          <img
                            src={img}
                            alt={`Imagen ${i + 1}`}
                            className="w-full h-auto rounded-lg object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
      </section>
    </>
  );
}
