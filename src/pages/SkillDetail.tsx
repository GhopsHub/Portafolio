import { useState } from "react";
import { useParams } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { skillsData } from "../data/skillsData";

export default function SkillDetail() {
  const { slug } = useParams();
  const skill = skillsData.find((s) => s.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!skill) {
    return <div className="retro-shell retro-card my-20 p-8">Habilidad no encontrada</div>;
  }

  const Icon = skill.icon as LucideIcon;

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
        <header className="retro-card-alt mb-12 p-6">
          <span className="retro-label mb-4">habilidad</span>
          <h1 className="flex items-center gap-3 font-champion text-6xl uppercase sm:text-7xl">
            <Icon className="h-9 w-9 text-[var(--yellow)]" />
            {skill.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed">
            {skill.description}
          </p>
        </header>

        {skill.sections?.map((section, index) => (
          <article key={index} className="retro-card mx-auto mb-10 max-w-5xl p-5 sm:p-8">
            {section.title && (
              <h2 className="mb-6 text-center font-champion text-5xl uppercase">
                {section.title}
              </h2>
            )}

            {section.description && (
              <p className="mx-auto mb-8 max-w-3xl text-lg font-semibold leading-relaxed">
                {section.description}
              </p>
            )}

            {Array.isArray(section.images) && section.images.length > 0 && (
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
