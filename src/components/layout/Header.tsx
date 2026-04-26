"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-green-dark/90 backdrop-blur-lg shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <Image
            src="/images/logo-white.png"
            alt="Bedrock Financial Planning"
            width={200}
            height={48}
            className="h-10 w-auto group-hover:opacity-90 transition-opacity"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-cream/80 hover:text-tan transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:7199302059"
            className="flex items-center gap-2 text-tan hover:text-tan-light transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            (719) 930-2059
          </a>
          <Button href="#contact" size="sm">
            Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-cream hover:text-tan transition-colors p-2"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-green-dark/98 backdrop-blur-lg border-t border-tan/10 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-1">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-cream/80 hover:text-tan hover:bg-cream/5 transition-colors py-3 px-4 rounded-lg text-lg font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-tan/10 flex flex-col gap-3">
                <a
                  href="tel:7199302059"
                  className="flex items-center gap-2 text-tan py-3 px-4 text-lg font-medium"
                >
                  <Phone className="w-5 h-5" />
                  (719) 930-2059
                </a>
                <Button href="#contact" onClick={() => setIsMobileOpen(false)}>
                  Free Consultation
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
