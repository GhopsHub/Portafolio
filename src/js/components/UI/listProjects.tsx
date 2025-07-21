import { Link } from 'react-router-dom'

type WorkItem = {
  name: string
  type: string
  technologies: string
  year: string
  slug: string
}

type Props = {
  data: WorkItem[]
}

export const ListProjects = ({ data }: Props) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="hidden md:table w-full border-collapse">
        <thead>
          <tr className="border-b text-white text-sm text-left ">
            <th>Projects</th>
            <th>Type</th>
            <th>Technologies</th>
            <th>Year</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              className="border-b last:border-none hover:bg-lg hover:text-black transition-colors duration-200"
            >
              <td className="py-5 px-4 text-2xl lg:text-3xl font-champion uppercase">
                <Link to={`/projects/${item.slug}`} className="hover:underline">
                  {item.name}
                </Link>
              </td>

              <td className="py-5 px-4 ">{item.type}</td>
              <td className="py-5 px-4 ">{item.technologies}</td>
              <td className="py-5 px-4 ">{item.year}</td>
            </tr>
          ))}
        </tbody>

      </table>

      {/* Mobile version */}
      <div className="md:hidden flex flex-col divide-y divide-gray-300">
        {data.map((item, idx) => (
          <div key={idx} className="py-6 px-4 text-white text-sm">
            <div className="text-xl font-champion antialiased mb-2">
              <Link to={`/projects/${item.slug}`}>
                {item.name}
              </Link>
            </div>
            <div>
              <span className="font-semibold">Type:</span> {item.type}
            </div>
            <div>
              <span className="font-semibold">Technologies:</span> {item.technologies}
            </div>
            <div>
              <span className="font-semibold">Year:</span> {item.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
