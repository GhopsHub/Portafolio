import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { workData } from '../../../data/workData';
import ClipDefs from '../../components/Animations/ImageMask/ImageMask';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = workData.find(p => p.slug === slug);

  // Estado para la imagen ampliada
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <>
      <ClipDefs />

      {/* Modal para ampliar imagen */}
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
            <h1 className="mb-2">{project.name}</h1>
          </div>

          {/* Portada con sombra blanca */}
          {project.cover && (
            <div className="relative w-fit mx-auto mb-10 after:content-[''] after:absolute after:inset-0 after:rounded-3xl after:shadow-[8px_8px_0px_white] after:-z-10 after:translate-x-2 after:translate-y-2">
              <img
                src={project.cover}
                alt={`Portada de ${project.name}`}
                className="w-[300px] sm:w-[350px] md:w-[350px] lg:w-[400px] xl:w-[600px] h-auto object-cover"
                style={{ clipPath: 'url(#clip-pattern2)' }}
                fetchPriority="high"
              />
            </div>
          )}
        </section>

        {/* Secciones */}
        {project.sections
          ?.filter(s => ['description', 'technologies', 'history'].includes(s.type))
          .map((section, index) => (
            <div key={index} className="px-4 md:px-10 lg:px-32 py-16 max-w-7xl mx-auto">
              {section.title && (
                <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">{section.title}</h2>
              )}
              {section.description && (
                <p className="mb-6 text-justify max-w-3xl mx-auto leading-relaxed text-lg">
                  {section.description}
                </p>
              )}

              {Array.isArray(section.images) && section.images.length > 0 && (
                <div
                  className={`${section.type === 'technologies'
                      ? 'flex justify-center gap-6 flex-wrap'
                      : 'flex flex-col items-center gap-8'
                    }`}
                >
                  {section.images.map((img, i) => (
                    <div
                      key={i}
                      className={`${section.type === 'technologies' ? 'w-16 h-16' : 'w-full max-w-3xl'
                        }`}
                    >
                      <img
                        src={img}
                        alt={`Imagen ${i + 1}`}
                        className={`${section.type === 'technologies'
                            ? 'w-full h-full object-contain'
                            : 'w-full h-auto object-cover mt-[50px] sm:mt-[70px] md:mt-[70px] lg:mt-[40px] xl:mt-[100px]'
                          }`}
                        loading="lazy"
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
