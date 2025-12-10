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

  // ========= MEJOR SWIPE MÓVIL =============
  const startX = React.useRef(0);
  const startY = React.useRef(0);
  const isDragging = React.useRef(false);
  const isHorizontalSwipe = React.useRef(false);

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

    // Detectamos si la intención es vertical
    if (!isHorizontalSwipe.current) {
      if (Math.abs(dy) > Math.abs(dx)) {
        // scroll vertical → dejar pasar
        isDragging.current = false;
        return;
      } else if (Math.abs(dx) > 10) {
        // swipe horizontal detectado
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

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className={`relative w-full max-w-xl mx-auto ${className || ""}`}>
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
              className="min-w-full px-6 py-10 text-center flex flex-col items-center justify-center"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="mx-auto h-14 w-auto mb-6"
                />
              )}

              {item.images && (
                <div className="flex flex-wrap justify-center gap-7 mb-8">
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
              {item.subtitle && (
                <p className="text-lg mt-2 opacity-80">{item.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* BOTONES SOLO DESKTOP */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
        bg-black/10 hover:bg-black/20 backdrop-blur p-2 rounded-full transition"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
        bg-black/10 hover:bg-black/20 backdrop-blur p-2 rounded-full transition"
      >
        ›
      </button>

      {/* INDICADORES (DOTS) SOLO MÓVIL */}
      <div className="flex md:hidden justify-center gap-2 mt-4">
        {items.map((_, i) => {
          const isActive = index === i + 1;
          return (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition ${
                isActive ? "bg-gray-900 scale-110" : "bg-gray-400"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
