import { useParams } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { skillsData } from "../data/skillsData";

export default function SkillDetail() {
  const { slug } = useParams();
  const skill = skillsData.find((s) => s.slug === slug);

  if (!skill) {
    return <div className="retro-shell retro-card my-20 p-8">Habilidad no encontrada</div>;
  }

  const Icon = skill.icon as LucideIcon;

  return (
      <section className="retro-shell py-16">
        <header className="retro-card-alt relative mb-12 p-6 pr-24 sm:p-8 sm:pr-28">
          <span className="retro-label mb-4">habilidad</span>
          <h1 className="page-display-title skill-page-display-title">
            <Icon className="h-9 w-9 text-[var(--yellow)]" />
            {skill.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed">
            {skill.description}
          </p>
        </header>

        {skill.sections?.map((section, index) => (
          <article key={section.title ?? index} className="retro-card mx-auto mb-10 max-w-5xl p-5 sm:p-8">
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
          </article>
        ))}
      </section>
  );
}
