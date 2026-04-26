"use client";

import { motion } from "motion/react";
import { sectionIds } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionLabels: Record<string, string> = {
  hero: "Home",
  problem: "Problem",
  "how-it-works": "How It Works",
  benefits: "Benefits",
  stats: "Stats",
  testimonials: "Testimonials",
  team: "Team",
  faq: "FAQ",
  articles: "Articles",
  contact: "Contact",
};

export default function DotNavigation() {
  const activeSection = useActiveSection();

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3"
      aria-label="Section navigation"
    >
      {sectionIds.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center justify-end gap-3"
          aria-label={sectionLabels[id]}
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-cream/70 font-medium whitespace-nowrap">
            {sectionLabels[id]}
          </span>
          <motion.span
            className={`block rounded-full transition-colors ${
              activeSection === id
                ? "bg-tan w-3 h-3"
                : "bg-cream/30 w-2 h-2 group-hover:bg-cream/60"
            }`}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </a>
      ))}
    </nav>
  );
}
