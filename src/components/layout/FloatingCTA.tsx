"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="tel:7199302059"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-tan text-green-dark flex items-center justify-center shadow-lg shadow-tan/30 hover:bg-tan-light hover:scale-110 transition-all"
          aria-label="Call (719) 930-2059"
        >
          <Phone className="w-6 h-6" />
          {/* Pulsing dot */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tan-light opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-tan" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
