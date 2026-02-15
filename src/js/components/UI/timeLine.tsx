import type { FC } from "react";
import { motion } from "framer-motion";
import { Book, Briefcase, Code, CheckCircle } from "lucide-react";

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
    <div className="relative mx-auto max-w-4xl py-20 px-4">
      {/* Línea central DESKTOP */}
      <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-neutral-700/40" />

      <div className="space-y-16 relative z-10">
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

  // Lógica de alineación solo para escritorio
  const isLeft =
    align === "left" ? true : align === "right" ? false : index % 2 === 0;

  return (
    <div
      className={`
        flex flex-col items-center gap-6

        /* Desktop alternado */
        lg:flex-row
        ${
          isLeft
            ? "lg:flex-row-reverse lg:pr-12 lg:text-right"
            : "lg:flex-row lg:pl-12 lg:text-left"
        }
      `}
    >
      {/* Icono */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center h-12 w-12 rounded-full bg-neutral-900 ring-2 ring-neutral-700 z-10"
      >
        <Icon className="h-6 w-6 text-red-400" />
      </motion.div>

      {/* Tarjeta */}
      <motion.div
        className="
          w-full p-6 rounded-xl bg-neutral-900/60
          border border-neutral-700/40
          shadow-lg backdrop-blur-lg
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-xl font-bold text-white">{item.title}</h3>

        {item.subtitle && (
          <p className="text-sm text-red-400">{item.subtitle}</p>
        )}

        <p className="mt-3 text-neutral-300">{item.description}</p>

        <span className="mt-4 inline-block text-sm font-medium text-red-400">
          {item.date}
        </span>

        {item.tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Timeline;
