import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SingleLink {
  to: string;
  label: string;
}

interface ButtonPagesProps {
  to?: string;
  direction?: "left" | "right";
  children?: ReactNode;
  className?: string;
  left?: SingleLink;
  right?: SingleLink;
}

export const ButtonPages = ({
  to,
  direction = "right",
  children,
  className,
  left,
  right,
}: ButtonPagesProps) => {
  if (left && right) {
    return (
      <nav className="retro-shell my-16 grid gap-4 sm:grid-cols-2">
        <ButtonPages to={left.to} direction="left" className={className}>
          {left.label}
        </ButtonPages>
        <ButtonPages to={right.to} direction="right" className={className}>
          {right.label}
        </ButtonPages>
      </nav>
    );
  }

  if (!to || !children) return null;

  return (
    <Link
      to={to}
      className={`retro-link flex items-center justify-between gap-3 px-5 py-4 font-champion text-3xl uppercase ${className || ""}`}
    >
      {direction === "left" && <ArrowLeft className="h-6 w-6" />}
      <span>{children}</span>
      {direction === "right" && <ArrowRight className="h-6 w-6" />}
    </Link>
  );
};
