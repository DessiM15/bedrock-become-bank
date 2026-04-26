"use client";

import { motion } from "motion/react";
import { Clock, User } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <motion.a
      href={`/blog/${article.slug}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group block rounded-2xl overflow-hidden bg-green-dark-light border border-tan/10 hover:border-tan/30 transition-all"
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden bg-green-dark relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-tan/90 text-green-dark text-xs font-semibold">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-cream group-hover:text-tan transition-colors line-clamp-2 mb-3">
          {article.title}
        </h3>
        <p className="text-cream-dark/60 text-sm leading-relaxed line-clamp-2 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-cream-dark/40">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime} min read
            </span>
          </div>
          <span>{formatDate(article.publishDate)}</span>
        </div>
      </div>
    </motion.a>
  );
}
