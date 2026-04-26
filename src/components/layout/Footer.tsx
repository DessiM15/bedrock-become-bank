"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { navigationItems } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-dark border-t border-tan/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-tan flex items-center justify-center">
                <span className="text-green-dark font-heading font-bold text-lg">B</span>
              </div>
              <span className="font-heading text-xl font-bold text-cream">
                Bedrock<span className="text-tan"> Financial</span>
              </span>
            </a>
            <p className="text-cream-dark/70 text-sm leading-relaxed">
              Empowering families to take control of their financial future
              through personal banking systems built on the Infinite Banking
              Concept.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-cream-dark/70 hover:text-tan transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream mb-4">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:7199302059"
                className="flex items-center gap-3 text-cream-dark/70 hover:text-tan transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-tan shrink-0" />
                (719) 930-2059
              </a>
              <a
                href="mailto:david@financialfreedom-inc.net"
                className="flex items-center gap-3 text-cream-dark/70 hover:text-tan transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-tan shrink-0" />
                david@financialfreedom-inc.net
              </a>
              <div className="flex items-start gap-3 text-cream-dark/70 text-sm">
                <MapPin className="w-4 h-4 text-tan shrink-0 mt-0.5" />
                The Woodlands &amp; Conroe, TX
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream mb-4">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "LinkedIn", "X"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="w-10 h-10 rounded-lg bg-green-dark-light border border-tan/20 flex items-center justify-center text-cream-dark/70 hover:text-tan hover:border-tan transition-all text-xs font-bold"
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-tan/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-dark/50 text-sm">
            &copy; {currentYear} Bedrock Financial. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream-dark/50 hover:text-tan transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-cream-dark/50 hover:text-tan transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
