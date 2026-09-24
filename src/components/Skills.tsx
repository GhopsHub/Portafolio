import { Icon } from "@iconify/react";

interface SkillGroup {
  icons: string[];
  title: string;
  subtitle?: string;
}

interface SkillsProps {
  items: SkillGroup[];
  className?: string;
}

const iconLabel = (value: string) => {
  const raw = value.split(":").pop() ?? value;
  const aliases: Record<string, string> = {
    php: "PHP", laravel: "Laravel", vue: "Vue.js", react: "React",
    "tailwindcss-icon": "Tailwind CSS", "css-3": "CSS 3", "typescript-icon": "TypeScript", "mysql-icon": "MySQL",
    "nodejs-icon": "Node.js", "jwt-icon": "JWT", "threejs": "Three.js", "docker-icon": "Docker",
    ubuntu: "Ubuntu", canva: "Canva", wordpress: "WordPress", figma: "Figma", python: "Python",
    "adobe-premiere": "Premiere",
    "adobe-after-effects": "After Effects", "adobe-photoshop": "Photoshop",
    "visual-studio-code": "VS Code",
    "windows": "Windows", "openai": "OpenAI",
  };
  return aliases[raw] ?? raw.replace(/-icon$/, "").replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
};

export function Skills({ items, className }: SkillsProps) {
  return (
    <div className={`skills-board ${className ?? ""}`}>
      {items.map((group, index) => {
        const tools = group.icons;
        return (
          <article className={`skills-group skills-group-${index % 4}${index === 0 ? " skills-group-featured" : ""}`} key={group.title}>
            <header className="skills-group-heading">
              <span className="skills-group-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{group.title}</h3>
                {group.subtitle && <p>{group.subtitle}</p>}
              </div>
              <span className="skills-group-count">{String(tools.length).padStart(2, "0")}</span>
            </header>
            <div className="skills-tool-list">
              {tools.map((tool) => (
                <div className="skills-tool" key={tool}>
                  <span className="skills-tool-icon"><Icon icon={tool} aria-hidden="true" /></span>
                  <span>{iconLabel(tool)}</span>
                </div>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
