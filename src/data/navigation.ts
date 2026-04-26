import type { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "About", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export const sectionIds = [
  "hero",
  "problem",
  "how-it-works",
  "benefits",
  "stats",
  "testimonials",
  "team",
  "faq",
  "articles",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
