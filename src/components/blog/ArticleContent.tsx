"use client";

import ReactMarkdown from "react-markdown";
import { motion } from "motion/react";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Button from "@/components/ui/Button";
import type { Article } from "@/types";

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <article className="min-h-screen bg-green-dark">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-dark via-green-dark/60 to-green-dark/20" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-tan/90 text-green-dark text-xs font-semibold mb-4">
                {article.category}
              </span>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-cream leading-tight mb-4">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-cream-dark/60">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.publishDate)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {article.readTime} min read
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose-bedrock text-lg"
        >
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-2xl bg-green-dark-light border border-tan/20 text-center"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-cream mb-4">
            Ready to Take Control of Your Finances?
          </h3>
          <p className="text-cream-dark/70 mb-8 max-w-xl mx-auto">
            Schedule your free consultation today and discover how becoming your
            own bank can transform your financial future.
          </p>
          <Button href="/#contact" size="lg">
            Book Your Free Consultation
          </Button>
        </motion.div>

        {/* Back link */}
        <div className="mt-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-tan hover:text-tan-light transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Articles
          </a>
        </div>
      </div>
    </article>
  );
}
