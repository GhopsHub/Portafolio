import { useEffect, useState } from "react";
import paperPlane from "../assets/images/character-effects/paper-plane.svg";

const route = [
  [18, 4], [78, 13], [87, 22], [58, 31], [13, 42],
  [45, 53], [88, 64], [64, 75], [12, 85], [39, 93], [82, 96],
] as const;

export default function ProjectScrollFlight() {
  const [flight, setFlight] = useState({ x: 18, y: 4, angle: 48 });

  useEffect(() => {
    const update = () => {
      const section = document.querySelector<HTMLElement>(".projects-redesign");
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, (window.scrollY - sectionTop) / travel));
      const position = progress * (route.length - 1);
      const index = Math.min(Math.floor(position), route.length - 2);
      const local = position - index;
      const start = route[index];
      const end = route[index + 1];
      const dx = end[0] - start[0];
      const dy = end[1] - start[1];
      const radians = Math.atan2(dy, dx);

      setFlight({
        x: start[0] + dx * local,
        y: start[1] + dy * local,
        angle: radians * (180 / Math.PI) + 38,
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="project-flight-layer" aria-hidden="true">
      <svg className="project-flight-route" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M18 4C58 8 91 10 84 21S32 31 13 42 66 56 88 65 42 79 12 85 65 97 82 96" />
      </svg>
      <img
        src={paperPlane}
        alt=""
        className="project-flight-plane"
        style={{ left: `${flight.x}%`, top: `${flight.y}%`, transform: `translate(-50%, -50%) rotate(${flight.angle}deg)` }}
      />
    </div>
  );
}
