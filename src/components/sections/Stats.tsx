"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import StatsCounter from "@/components/ui/StatsCounter";
import AnimatedText from "@/components/ui/AnimatedText";

const stats = [
  { value: 10, suffix: "+", label: "Years of Financial Planning Experience" },
  { value: 500, suffix: "+", label: "Families Empowered" },
  { value: 50, suffix: "M+", label: "In Personal Banking Systems Built" },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate" },
];

export default function Stats() {
  return (
    <SectionWrapper id="stats" bg="darker">
      <AnimatedText className="text-center mb-16">
        <p className="text-tan font-medium tracking-widest uppercase text-sm mb-4">
          Our Impact
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream">
          Trusted by <span className="text-tan">Hundreds</span> of Families
        </h2>
      </AnimatedText>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat) => (
          <StatsCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
