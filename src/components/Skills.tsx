import React from "react";

interface SkillsProps {
  items: {
    image?: string;
    images?: string[];
    title: string;
    subtitle?: string;
  }[];
  className?: string;
}

export function Skills({ items, className }: SkillsProps) {
  const realLength = items.length;
  const extended = [items[realLength - 1], ...items, items[0]];

  const [index, setIndex] = React.useState(1);
  const [isAnimating, setIsAnimating] = React.useState(true);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const startX = React.useRef(0);
  const startY = React.useRef(0);
  const isDragging = React.useRef(false);
  const isHorizontalSwipe = React.useRef(false);

  const goTo = (i: number) => {
    setIsAnimating(true);
    setIndex(i);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleEnd = () => {
      if (index === 0) {
        setIsAnimating(false);
        setIndex(realLength);
      } else if (index === realLength + 1) {
        setIsAnimating(false);
        setIndex(1);
      }
    };

    el.addEventListener("transitionend", handleEnd);
    return () => el.removeEventListener("transitionend", handleEnd);
  }, [index, realLength]);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
    isHorizontalSwipe.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;

    const dx = e.touches[0].clientX - startX.current;
    const dy = e.touches[0].clientY - startY.current;

    if (!isHorizontalSwipe.current) {
      if (Math.abs(dy) > Math.abs(dx)) {
        isDragging.current = false;
        return;
      }

      if (Math.abs(dx) > 10) {
        isHorizontalSwipe.current = true;
      }
    }

    if (isHorizontalSwipe.current) {
      if (dx > 60) {
        prev();
        isDragging.current = false;
      } else if (dx < -60) {
        next();
        isDragging.current = false;
      }
    }
  };

  return (
    <div className={`retro-card relative mx-auto w-full max-w-3xl p-4 ${className || ""}`}>
      <div
        className="overflow-hidden border-2 border-[var(--line)] bg-[var(--paper)]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => {
          isDragging.current = false;
        }}
      >
        <div
          ref={containerRef}
          className="flex"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: isAnimating ? "transform 0.3s" : "none",
          }}
        >
          {extended.map((item, i) => (
            <div
              key={i}
              className="flex min-w-full flex-col items-center justify-center px-6 py-10 text-center"
            >
              {item.image && (
                <img src={item.image} alt={item.title} className="mx-auto mb-6 h-14 w-auto" />
              )}

              {item.images && (
                <div className="mb-8 flex flex-wrap justify-center gap-4">
                  {item.images.map((img, idx) => (
                    <span key={idx} className="retro-chip grid h-16 min-w-16 place-items-center bg-white">
                      <img src={img} alt={`${item.title}-${idx}`} className="h-10 w-auto" />
                    </span>
                  ))}
                </div>
              )}

              <h3 className="font-champion text-4xl uppercase">{item.title}</h3>
              {item.subtitle && (
                <p className="mt-3 max-w-xl text-base font-semibold leading-relaxed sm:text-lg">
                  {item.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Anterior"
        className="retro-link absolute left-0 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-3xl font-black md:flex"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Siguiente"
        className="retro-link absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center text-3xl font-black md:flex"
      >
        ›
      </button>

      <div className="mt-4 flex justify-center gap-2 md:hidden">
        {items.map((_, i) => {
          const isActive = index === i + 1;
          return (
            <span
              key={i}
              className={`h-2 w-6 border border-[var(--line)] transition ${
                isActive ? "bg-[var(--orange)]" : "bg-[var(--ink)]/20"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
