"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DotNavigation from "@/components/layout/DotNavigation";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import LatestArticles from "@/components/blog/LatestArticles";
import type { Article } from "@/types";

interface HomeContentProps {
  latestArticles: Article[];
}

export default function HomeContent({ latestArticles }: HomeContentProps) {
  return (
    <>
      <Header />
      <DotNavigation />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Benefits />
        <Stats />
        <Testimonials />
        <Team />
        <FAQ />
        <LatestArticles articles={latestArticles} />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
