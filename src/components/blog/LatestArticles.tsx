"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedText from "@/components/ui/AnimatedText";
import ArticleCard from "@/components/blog/ArticleCard";
import Button from "@/components/ui/Button";
import type { Article } from "@/types";

interface LatestArticlesProps {
  articles: Article[];
}

export default function LatestArticles({ articles }: LatestArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <SectionWrapper id="articles" bg="dark">
      <AnimatedText className="text-center mb-16">
        <p className="text-tan font-medium tracking-widest uppercase text-sm mb-4">
          Resources
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream">
          Latest <span className="text-tan">Articles</span>
        </h2>
        <p className="mt-6 text-cream-dark/70 max-w-2xl mx-auto text-lg">
          Insights, strategies, and education to help you take control of your
          financial future.
        </p>
      </AnimatedText>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href="/blog" variant="outline">
          View All Articles
        </Button>
      </div>
    </SectionWrapper>
  );
}
