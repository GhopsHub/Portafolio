import { useParams } from 'react-router-dom'
import { workData } from '../../../data/workData'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = workData.find(p => p.slug === slug)

  if (!project) {
    return <div>Proyecto no encontrado</div>
  }

  return (
    <section className="min-h-[calc(100vh-52px)] flex items-center justify-center px-4 overflow-hidden">
      <div className="">

        {/* CABECERA */}
        <section className='container mx-auto px-4 py-8'>

          {/* Título */}
          <div className='w-full text-4xl font-champion mb-8 border-b border-white'>
            <h1 className="mb-2">{project.name}</h1>
          </div>

          {/* Contenido */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

            <div className='flex flex-col w-full'>
              <p><strong>Tipo:</strong> {project.type}</p>
              <p><strong>Tecnologías:</strong> {project.technologies}</p>
              <p><strong>Año:</strong> {project.year}</p>
            </div>

            {/* Imagen */}
            {project.cover && (
              <img
                src={project.cover}
                alt={`Portada de ${project.name}`}
                className="w-[300px] sm:w-[350px] md:w-[350px] lg:w-[400px] xl:w-[600px] h-auto"
                fetchPriority="high"
              />
            )}
          </div>
        </section>

        {/* Secciones opcionales */}
        {project.sections && project.sections.map((section, index) => (
          <div key={index} className="my-10">
            {section.title && <h2 className="text-2xl font-bold mb-2">{section.title}</h2>}
            {section.description && <p className="mb-4">{section.description}</p>}

            {section.images && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.name} sección ${index + 1} imagen ${i + 1}`}
                    className="rounded-xl shadow-md w-full object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
