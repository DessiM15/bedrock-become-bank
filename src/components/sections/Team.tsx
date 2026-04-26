"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Phone } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedText from "@/components/ui/AnimatedText";
import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <SectionWrapper id="team" bg="cream">
      <AnimatedText className="text-center mb-16">
        <p className="text-tan-dark font-medium tracking-widest uppercase text-sm mb-4">
          Our Team
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-green-dark">
          Meet Your <span className="text-tan-dark">Financial Partners</span>
        </h2>
        <p className="mt-6 text-green-dark-light/70 max-w-2xl mx-auto text-lg">
          Dedicated professionals committed to helping you build lasting
          financial independence.
        </p>
      </AnimatedText>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-tan/10 transition-all group border border-cream-dark"
          >
            <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-green-dark to-green-dark-light">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-green-dark/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-6">
              <h3 className="font-heading text-2xl font-semibold text-green-dark">
                {member.name}
              </h3>
              <p className="text-tan-dark font-medium text-sm mt-1">
                {member.role}
              </p>
              <p className="text-green-dark-light/70 text-sm leading-relaxed mt-4">
                {member.bio}
              </p>
              {member.phone && (
                <a
                  href={`tel:${member.phone.replace(/\D/g, "")}`}
                  className="mt-4 inline-flex items-center gap-2 text-tan-dark hover:text-tan font-medium text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
