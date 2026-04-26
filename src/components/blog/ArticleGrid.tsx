"use client";

import ArticleCard from "@/components/blog/ArticleCard";
import type { Article } from "@/types";

interface ArticleGridProps {
  articles: Article[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-cream-dark/50 text-lg">No articles found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <ArticleCard key={article.slug} article={article} index={index} />
      ))}
    </div>
  );
}
