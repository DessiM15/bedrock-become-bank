"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleGrid from "@/components/blog/ArticleGrid";
import type { Article } from "@/types";

interface BlogPageContentProps {
  articles: Article[];
  categories: string[];
}

export default function BlogPageContent({
  articles,
  categories,
}: BlogPageContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-green-dark pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-tan font-medium tracking-widest uppercase text-sm mb-4">
              Our Blog
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream mb-6">
              Financial <span className="text-tan">Insights</span>
            </h1>
            <p className="text-cream-dark/70 max-w-2xl mx-auto text-lg">
              Education, strategies, and insights to help you understand the
              power of becoming your own bank.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === "All"
                  ? "bg-tan text-green-dark"
                  : "bg-green-dark-light text-cream/60 hover:text-cream border border-tan/10 hover:border-tan/30"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === category
                    ? "bg-tan text-green-dark"
                    : "bg-green-dark-light text-cream/60 hover:text-cream border border-tan/10 hover:border-tan/30"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <ArticleGrid articles={filteredArticles} />
        </div>
      </main>
      <Footer />
    </>
  );
}
