import { cn } from "../../../lib/utils"
import { skillsData } from "../../../data/skillsData"
import type { SkillItem } from "../../../data/skillsData"
import { Link } from "react-router-dom"

export function ListSkills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center mb-15">
      {skillsData.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  shortDescription,
  icon: Icon,
  index,
  slug,
}: SkillItem & { index: number }) => {
  return (
    <Link to={`/skill/${slug}`} className="block">
      <div
        className={cn(
          "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 cursor-pointer",
          (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
          index < 4 && "lg:border-b dark:border-neutral-800"
        )}
      >
        <div
          className={cn(
            "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full pointer-events-none",
            index < 4
              ? "bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent"
              : "bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent"
          )}
        />
        <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
          <Icon className="w-6 h-6" />
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-white transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
            {title}
          </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {shortDescription}
        </p>
      </div>
    </Link>
  )
}
