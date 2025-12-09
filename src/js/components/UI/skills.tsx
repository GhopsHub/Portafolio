import React from "react";

interface SkillsProps {
  items: {
    image?: string; // una imagen
    images?: string[]; // muchas imagenes
    title: string;
    subtitle?: string;
  }[];
  className?: string;
}

export function Skills({ items, className }: SkillsProps) {
  const [index, setIndex] = React.useState(0);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, items.length - 1));

  return (
    <div className={`relative w-full max-w-xl mx-auto ${className || ""}`}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="min-w-full px-6 py-10 text-center">
              {/* una sola imagen*/}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="mx-auto h-12 w-auto mb-4"
                />
              )}

              {/* Varias imagenes */}
              {item.images && (
                <div className="flex flex-wrap justify-center gap-7 mb-16">
                  {item.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${item.title}-${idx}`}
                      className="h-12 w-auto"
                    />
                  ))}
                </div>
              )}

              <h3 className="text-2xl font-semibold">{item.title}</h3>
              {item.subtitle && <p className="text-lg mt-2">{item.subtitle}</p>}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        disabled={index === 0}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full disabled:opacity-40"
      >
        ‹
      </button>

      <button
        onClick={next}
        disabled={index === items.length - 1}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full disabled:opacity-40"
      >
        ›
      </button>
    </div>
  );
}
