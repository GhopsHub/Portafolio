import { cn } from "../../../../lib/utils";
import React from "react";

interface AnimatedUnderlineLineProps {
  className?: string;
  children: React.ReactNode;
}

export const UnderLine = ({
  className,
  children,
}: AnimatedUnderlineLineProps) => {
  return (
    <span
      className={cn(
        "relative after:absolute after:bg-yellow-50 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};
