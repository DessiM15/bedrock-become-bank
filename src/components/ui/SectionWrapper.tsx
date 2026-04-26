"use client";

import { cn } from "@/lib/utils";

type SectionBackground = "dark" | "darker" | "cream" | "cream-dark";

interface SectionWrapperProps {
  id?: string;
  bg?: SectionBackground;
  className?: string;
  children: React.ReactNode;
  narrow?: boolean;
}

const bgStyles: Record<SectionBackground, string> = {
  dark: "bg-green-dark text-cream",
  darker: "bg-green-dark-light text-cream",
  cream: "bg-cream text-green-dark",
  "cream-dark": "bg-cream-dark text-green-dark",
};

export default function SectionWrapper({
  id,
  bg = "dark",
  className,
  children,
  narrow = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 lg:py-32", bgStyles[bg], className)}
    >
      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          narrow ? "max-w-4xl" : "max-w-7xl"
        )}
      >
        {children}
      </div>
    </section>
  );
}
