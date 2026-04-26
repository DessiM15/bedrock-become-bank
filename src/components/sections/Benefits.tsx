"use client";

import { motion } from "motion/react";
import {
  TrendingUp,
  ShieldOff,
  Clock,
  Users,
  Wallet,
  ShieldCheck,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedText from "@/components/ui/AnimatedText";
import { benefits } from "@/data/benefits";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  ShieldOff,
  Clock,
  Users,
  Wallet,
  ShieldCheck,
};

export default function Benefits() {
  return (
    <SectionWrapper id="benefits" bg="cream">
      <AnimatedText className="text-center mb-16">
        <p className="text-tan-dark font-medium tracking-widest uppercase text-sm mb-4">
          Why It Works
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-green-dark">
          The Advantages of Being
          <br />
          <span className="text-tan-dark">Your Own Bank</span>
        </h2>
      </AnimatedText>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {benefits.map((benefit, index) => {
          const Icon = iconMap[benefit.icon];
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="p-8 rounded-2xl bg-white border border-cream-dark hover:border-tan/40 shadow-sm hover:shadow-lg hover:shadow-tan/10 transition-all group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-green-dark/5 flex items-center justify-center mb-6 group-hover:bg-tan/10 transition-colors">
                {Icon && <Icon className="w-7 h-7 text-tan-dark group-hover:text-tan transition-colors" />}
              </div>
              <h3 className="font-heading text-xl font-semibold text-green-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-green-dark-light/80 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
