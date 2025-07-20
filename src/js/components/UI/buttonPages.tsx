import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { UnderLine } from "../Animations/UnderLine/underLine";

interface SingleLink {
  to: string;
  label: string;
}

interface NextButtonProps {
  to?: string;
  direction?: "left" | "right";
  children?: React.ReactNode;
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
}: NextButtonProps) => {
  // Modo doble
  if (left && right) {
    return (
      <div className="w-full flex justify-center mb-16 font-champion uppercase">
        <div className="w-full max-w-6xl flex items-center justify-between px-4 sm:px-10 md:px-20 py-6 box-border">
          <ButtonPages to={left.to} direction="left" className={className}>
            {left.label}
          </ButtonPages>
          <ButtonPages to={right.to} direction="right" className={className}>
            {right.label}
          </ButtonPages>
        </div>
      </div>
    );
  }

  // Modo individual
  if (!to || !children) return null;

  return (
    <Link to={to} className="flex items-center gap-2 group text-2xl p-10">
      {direction === "left" && (
        <ArrowLeft className="text-primary group-hover:-translate-x-1 transition-transform duration-300" />
      )}
      <UnderLine className={className}>{children}</UnderLine>
      {direction === "right" && (
        <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform duration-300" />
      )}
    </Link>
  );
};


// USO

// Dos botones
{/* <NextButton
  left={{ to: "/about", label: "About" }}
  right={{ to: "/", label: "Home" }}
/>

// Un solo botón
<NextButton to="/about" direction="left">
  About
</NextButton> */}
