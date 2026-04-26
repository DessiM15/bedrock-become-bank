import type { Metadata } from "next";
import BlogPageContent from "@/components/blog/BlogPageContent";
import { getPublishedArticles, getAllCategories } from "@/lib/articles";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, strategies, and education about the Infinite Banking Concept, personal finance, and building generational wealth.",
};

export default function BlogPage() {
  const articles = getPublishedArticles();
  const categories = getAllCategories();

  return <BlogPageContent articles={articles} categories={categories} />;
}
