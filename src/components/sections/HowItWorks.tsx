"use client";

import { motion } from "motion/react";
import { Building2, ArrowRightLeft, PiggyBank, TrendingUp } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedText from "@/components/ui/AnimatedText";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Build Your Foundation",
    description:
      "We design a personal banking system tailored specifically to your financial goals, income, and timeline. This is your foundation — structured to maximize growth and flexibility from day one.",
  },
  {
    number: "02",
    icon: PiggyBank,
    title: "Fund Your System",
    description:
      "Redirect money you're already spending — savings, premiums, even loan payments — into your own banking system. No drastic lifestyle changes required. You're simply changing where your dollars go.",
  },
  {
    number: "03",
    icon: ArrowRightLeft,
    title: "Borrow From Yourself",
    description:
      "Need to finance a car, a home renovation, or an investment? Borrow from your own system. No credit checks, no bank approval, no penalties. Access your money anytime, tax-free.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow Uninterrupted",
    description:
      "Here's the magic: your money keeps compounding even when you borrow against it. Every dollar continues earning as if it never left. You use your money AND grow it simultaneously.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" bg="dark">
      <AnimatedText className="text-center mb-16">
        <p className="text-tan font-medium tracking-widest uppercase text-sm mb-4">
          The Process
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream">
          How Becoming Your Own
          <br />
          <span className="text-tan">Bank Works</span>
        </h2>
        <p className="mt-6 text-cream-dark/70 max-w-2xl mx-auto text-lg">
          Four steps to financial freedom. No jargon. No gimmicks. Just a
          proven system that puts you in control.
        </p>
      </AnimatedText>

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-tan/0 via-tan/30 to-tan/0 hidden md:block" />

        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Step number circle */}
              <div className="hidden md:flex absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-green-dark border-2 border-tan items-center justify-center z-10">
                <span className="font-heading text-tan font-bold text-lg">
                  {step.number}
                </span>
              </div>

              {/* Content card */}
              <div
                className={`w-full lg:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                }`}
              >
                <div
                  className={`p-8 rounded-2xl bg-green-dark-light border border-tan/10 hover:border-tan/20 transition-colors ${
                    index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                  } max-w-xl`}
                >
                  <div
                    className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? "lg:justify-end" : ""
                    }`}
                  >
                    <span className="md:hidden font-heading text-tan font-bold text-2xl">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-tan/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-tan" />
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-cream mb-3">
                    {step.title}
                  </h3>
                  <p className="text-cream-dark/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden lg:block w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
