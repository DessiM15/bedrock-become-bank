"use client";

import { useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

export function useParallax(rate: number = 0.3): {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [rate * -100, rate * 100]);

  return { ref, y };
}
