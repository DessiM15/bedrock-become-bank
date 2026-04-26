"use client";

import { motion } from "motion/react";
import { Landmark, TrendingDown, Lock, Ban } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedText from "@/components/ui/AnimatedText";

const problems = [
  {
    icon: Landmark,
    title: "Banks Profit From YOUR Deposits",
    description:
      "Every dollar you deposit gets lent out at 5-10x your balance. The bank earns massive returns on your money — and gives you a fraction of a percent in interest. You're funding their profits.",
  },
  {
    icon: TrendingDown,
    title: "Inflation Eats Your Savings",
    description:
      "With savings accounts earning 0.01%-0.5% and inflation running at 3-6%, your money loses purchasing power every single day it sits in the bank. You're going backwards.",
  },
  {
    icon: Lock,
    title: "Your Retirement Is Locked Away",
    description:
      "Contribute for decades, but try to touch it before 59½? You'll pay penalties AND taxes. Your own money, held hostage by rules designed to benefit the system — not you.",
  },
  {
    icon: Ban,
    title: "Zero Control Over Your Money",
    description:
      "Banks decide your interest rates, your loan terms, and how your deposits are used. You're a customer in a system that treats your financial freedom as an afterthought.",
  },
];

export default function Problem() {
  return (
    <SectionWrapper id="problem" bg="darker">
      <AnimatedText className="text-center mb-16">
        <p className="text-tan font-medium tracking-widest uppercase text-sm mb-4">
          The Problem
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream">
          Why Traditional Banking
          <br />
          <span className="text-tan">Fails You</span>
        </h2>
        <p className="mt-6 text-cream-dark/70 max-w-2xl mx-auto text-lg">
          The banking system was never designed to help you build wealth. It was
          designed to profit from your deposits.
        </p>
      </AnimatedText>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {problems.map((problem, index) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative p-8 rounded-2xl bg-green-dark border border-tan/10 hover:border-tan/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-tan/10 flex items-center justify-center mb-5 group-hover:bg-tan/20 transition-colors">
              <problem.icon className="w-6 h-6 text-tan" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-cream mb-3">
              {problem.title}
            </h3>
            <p className="text-cream-dark/70 leading-relaxed">
              {problem.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
