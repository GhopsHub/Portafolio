import { useState } from "react";
import { useParams } from "react-router-dom";
import { skillsData } from "../../../data/skillsData";
// import ClipDefs from "../../components/Animations/ImageMask/ImageMask"
import type { LucideIcon } from "lucide-react";

export default function SkillDetail() {
  const { slug } = useParams();
  const skill = skillsData.find((s) => s.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!skill) return <div>Habilidad no encontrada</div>;

  const Icon = skill.icon as LucideIcon;

  return (
    <>
      {/* <ClipDefs /> */}

      {/* Modal de imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Vista ampliada"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}

      <section className="w-full p-4 sm:p-6 md:p-10 lg:p-16">
        {/* CABECERA */}
        <section className="w-full mx-auto px-4 py-8">
          <div className="w-full text-4xl font-champion mb-8 border-b border-white">
            <h1 className="mb-2 flex items-center gap-2">
              <Icon className="w-6 h-6 text-neutral-400" />
              {skill.title}
            </h1>
          </div>

          {/* Descripción principal */}
          <p className="text-lg text-neutral-300 max-w-3xl text-justify leading-relaxed">
            {skill.description}
          </p>
        </section>

        {/* SECCIONES */}
        {skill.sections?.map((section, index) => (
          <div
            key={index}
            className="px-4 md:px-10 lg:px-32 py-16 max-w-7xl mx-auto"
          >
            {section.title && (
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">
                {section.title}
              </h2>
            )}

            {section.description && (
              <p className="mb-6 text-justify max-w-3xl mx-auto leading-relaxed text-lg text-neutral-300">
                {section.description}
              </p>
            )}

            {Array.isArray(section.images) && section.images.length > 0 && (
              <div className="flex flex-col items-center gap-8">
                {section.images.map((img, i) => (
                  <div key={i} className="w-full max-w-3xl">
                    <img
                      src={img}
                      alt={`Imagen ${i + 1}`}
                      className="w-full h-auto object-cover rounded-md shadow-lg mt-[50px] sm:mt-[70px] md:mt-[70px] lg:mt-[40px] xl:mt-[100px] cursor-pointer transition-transform hover:scale-105"
                      loading="lazy"
                      onClick={() => setSelectedImage(img)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
