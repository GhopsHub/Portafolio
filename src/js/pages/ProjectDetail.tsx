import { useParams } from 'react-router-dom'
import { workData } from '../../data/workData'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = workData.find(p => p.slug === slug)

  if (!project) {
    return <div>Proyecto no encontrado</div>
  }

  return (
    <div className="p-5">
      <h1 className="text-4xl font-champion mb-4">{project.name}</h1>
      <div className='border-b border-white mb-10' />

      <p><strong>Tipo:</strong> {project.type}</p>
      <p><strong>Tecnologías:</strong> {project.tecnologies}</p>
      <p><strong>Año:</strong> {project.year}</p>

      {/* Imagen de portada */}
      {project.cover && (
        <img
          src={project.cover}
          alt={`Portada de ${project.name}`}
          className="rounded-xl shadow-md my-6 w-full max-h-[500px] object-cover"
          loading="lazy"
        />
      )}

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
  )
}
