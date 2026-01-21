"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { getArticleBySlug, getRecentArticles } from "./newsData";
import Breadcrumb from "./Breadcrumb";
import NewsCard from "./NewsCard";
import EmailModal from "./EmailModal";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const recentArticles = article
    ? getRecentArticles(article.id).slice(0, 3)
    : [];
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  if (!article) {
    return (
      <div className="min-h-screen bg-news-gradient">
        <div className="max-w-[1200px] mx-auto px-4 pb-12 md:px-8 md:pb-16">
          <p>Article not found</p>
          <Link href="/news" className="text-primary hover:underline">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: article.title },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      <div className="min-h-screen bg-news-gradient">
        <div className="max-w-[1200px] mx-auto px-4 pb-12 md:px-8 md:pb-16">
          <Breadcrumb items={breadcrumbItems} />

          <article className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 mb-8">
            <div className="order-1 md:order-none">
              <h1 className="text-2xl md:text-3xl font-bold leading-tight text-primary mb-4">
                {article.title}
              </h1>

              {article.subtitle && (
                <p className="text-base text-foreground mb-4 leading-relaxed">
                  {article.subtitle}
                </p>
              )}

              {article.author && (
                <p className="text-[15px] text-foreground mb-3">
                  {article.author}
                </p>
              )}

              <div className="flex items-center gap-1.5 text-[13px] text-news-date mb-3">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{article.date}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2.5 py-1 text-[11px] font-medium border border-news-tag-border rounded-full bg-card text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-transparent text-primary hover:underline"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  Copy Link
                </button>
                <button
                  onClick={() => setIsEmailModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-transparent text-primary hover:underline"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email
                </button>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden order-0 md:order-none">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover min-h-[250px]"
              />
            </div>
          </article>

          <div className="max-w-[800px] mx-auto mb-12 pt-8 border-t border-border">
            {article.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-[15px] leading-[1.7] text-foreground mb-5"
              >
                {paragraph}
              </p>
            ))}

            {article.tags.includes("Article") && (
              <p className="mt-6 italic text-[15px] text-foreground">
                Read the full article from "Water Finance & Management"{" "}
                <a href="#" className="text-primary hover:underline">
                  here
                </a>
                .
              </p>
            )}
          </div>

          {recentArticles.length > 0 && (
            <section className="mt-8">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
                  Explore Recent Articles
                </h2>
                <div className="flex-1 h-px bg-border"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentArticles.map((recentArticle) => (
                  <NewsCard
                    key={recentArticle.id}
                    id={recentArticle.id}
                    slug={recentArticle.slug}
                    title={recentArticle.title}
                    date={recentArticle.date}
                    tags={recentArticle.tags}
                    image={recentArticle.image}
                    excerpt={recentArticle.excerpt}
                    author={recentArticle.author}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        articleTitle={article.title}
      />
    </>
  );
};

export default ArticleDetail;
