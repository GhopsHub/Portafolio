import type { FC } from "react";
import { motion } from "framer-motion";
import { Book, Briefcase, CheckCircle, Code } from "lucide-react";

export type TimelineItem = {
  id: number;
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  icon?: "study" | "work" | "code" | "done";
};

const iconMap = {
  study: Book,
  work: Briefcase,
  code: Code,
  done: CheckCircle,
} as const;

type TimelineProps = {
  items: TimelineItem[];
  align?: "alternate" | "left" | "right";
};

const Timeline: FC<TimelineProps> = ({ items, align = "alternate" }) => {
  return (
    <div className="retro-shell relative py-12">
      <div className="hidden lg:block absolute left-1/2 top-8 h-[calc(100%-4rem)] w-[3px] -translate-x-1/2 bg-[var(--ink)]" />

      <div className="relative z-10 space-y-10">
        {items.map((item, index) => (
          <TimelineCard key={item.id} item={item} index={index} align={align} />
        ))}
      </div>
    </div>
  );
};

const TimelineCard: FC<{
  item: TimelineItem;
  index: number;
  align: "alternate" | "left" | "right";
}> = ({ item, index, align }) => {
  const Icon = iconMap[item.icon ?? "study"];
  const isLeft =
    align === "left" ? true : align === "right" ? false : index % 2 === 0;

  return (
    <div
      className={`flex flex-col items-start gap-5 lg:flex-row lg:items-center ${
        isLeft ? "lg:flex-row-reverse lg:text-right" : "lg:text-left"
      }`}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.35 }}
        className="z-10 grid h-14 w-14 place-items-center border-2 border-[var(--line)] bg-[var(--yellow)] shadow-[4px_4px_0_var(--ink)] lg:mx-auto"
      >
        <Icon className="h-6 w-6" />
      </motion.div>

      <motion.article
        className="retro-card w-full p-5 lg:w-[calc(50%-3rem)]"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <span className="retro-label mb-4">{item.date}</span>
        <h3 className="font-champion text-4xl uppercase">{item.title}</h3>

        {item.subtitle && (
          <p className="mt-1 font-black uppercase text-[var(--orange)]">{item.subtitle}</p>
        )}

        <p className="mt-3 leading-relaxed">{item.description}</p>

        {item.tags && (
          <div className={`mt-5 flex flex-wrap gap-2 ${isLeft ? "lg:justify-end" : ""}`}>
            {item.tags.map((tag) => (
              <span key={tag} className="retro-chip text-xs font-black uppercase">
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.article>
    </div>
  );
};

export default Timeline;
