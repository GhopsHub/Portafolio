import { ArrowUpRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { WorkItem } from "../data/workData";

type Props = { data: WorkItem[] };

export const ListProjects = ({ data }: Props) => (
  <div className="project-board-list">
    {data.map((item, index) => (
      <Link
        key={item.slug}
        to={`/projects/${item.slug}`}
        className={`project-board-card project-board-card-${index % 4}${index === 0 ? " project-board-card-featured" : ""}`}
        style={{ animationDelay: `${Math.min(index * 75, 525)}ms` }}
      >
        <div className="project-board-card-top">
          <h3>{item.name}</h3>
          <Star aria-hidden="true" />
        </div>
        <div className="project-board-card-content">
          <div className="project-board-cover">
            {item.cover ? <img src={item.cover} alt={`Vista de ${item.name}`} loading="lazy" /> : <span>{item.name.slice(0, 1)}</span>}
            <span className="project-board-index">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="project-board-info">
            <div className="project-board-meta"><span>{item.type}</span><span>{item.year}</span></div>
            <div className="project-board-techs">
              {item.technologies.split(/[~·,]/).map((technology) => technology.trim()).filter(Boolean).map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <span className="project-board-open">Explorar ficha <ArrowUpRight aria-hidden="true" size={19} /></span>
          </div>
        </div>
      </Link>
    ))}
  </div>
);
