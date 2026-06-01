import { Link } from "react-router-dom";

type WorkItem = {
  name: string;
  type: string;
  technologies: string;
  year: string;
  slug: string;
};

type Props = {
  data: WorkItem[];
};

export const ListProjects = ({ data }: Props) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="hidden w-full border-separate border-spacing-y-3 md:table">
        <thead>
          <tr className="text-left text-xs font-black uppercase tracking-[0.18em]">
            <th className="px-4 pb-2">Proyecto</th>
            <th className="px-4 pb-2">Tipo</th>
            <th className="px-4 pb-2">Tecnologias</th>
            <th className="px-4 pb-2">Año</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              className="group bg-[var(--cream)] text-[var(--ink)] shadow-[6px_6px_0_var(--ink)] transition-transform duration-200  hover:translate-y-1 hover:shadow-[2px_2px_0_var(--ink)]"
            >
              <td className="border-y-2 border-l-2 border-[var(--line)] px-4 py-5 font-champion text-3xl uppercase lg:text-4xl">
                <Link
                  to={`/projects/${item.slug}`}
                  className="group-hover:text-[var(--orange)]"
                >
                  {item.name}
                </Link>
              </td>

              <td className="border-y-2 border-[var(--line)] px-4 py-5 font-bold">
                {item.type}
              </td>
              <td className="border-y-2 border-[var(--line)] px-4 py-5">
                {item.technologies}
              </td>
              <td className="border-y-2 border-r-2 border-[var(--line)] px-4 py-5 font-black">
                {item.year}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="grid gap-4 md:hidden">
        {data.map((item, idx) => (
          <article key={idx} className="retro-card p-4 text-sm">
            <div className="mb-3 font-champion text-3xl uppercase">
              <Link to={`/projects/${item.slug}`}>{item.name}</Link>
            </div>
            <div className="grid gap-2">
              <p>
                <span className="font-black uppercase">Tipo:</span> {item.type}
              </p>
              <p>
                <span className="font-black uppercase">Tecnologias:</span>{" "}
                {item.technologies}
              </p>
              <p>
                <span className="font-black uppercase">Año:</span> {item.year}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
