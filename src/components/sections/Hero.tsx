"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient background (replace with image/video later) */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-dark via-green-dark-light to-green-dark" />
        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(163,141,109,0.5) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-green-dark/50 via-transparent to-green-dark" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-tan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-tan/3 rounded-full blur-3xl" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-tan/30 bg-tan/10 text-tan text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-tan animate-pulse" />
          The Infinite Banking Concept
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.95] tracking-tight"
        >
          Stop Banking.
          <br />
          <span className="text-tan">Start Building.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 text-lg sm:text-xl md:text-2xl text-cream-dark/80 max-w-3xl mx-auto leading-relaxed"
        >
          Your money should work for you — not for a bank. Build a personal
          banking system with uninterrupted growth, tax-free access, and true
          financial independence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#contact" size="lg">
            Start Your Journey
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <Button href="#how-it-works" variant="outline" size="lg">
            Learn How It Works
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#problem"
          className="flex flex-col items-center gap-2 text-cream/40 hover:text-tan transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
