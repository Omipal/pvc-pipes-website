"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { getFeaturedArticle, getPaginatedArticles } from "./newsData";
import Breadcrumb from "./Breadcrumb";
import FeaturedArticle from "./FeaturedArticle";
import NewsCard from "./NewsCard";
import Pagination from "./Pagination";

const NewsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const featuredArticle = getFeaturedArticle();
  const { articles, totalPages, totalArticles } = getPaginatedArticles(
    currentPage,
    9
  );

  const handlePageChange = (page: number) => {
    router.push(`/news?page=${page}`);
  };

  return (
    <div className="min-h-screen bg-news-gradient py-10">
      <div className="max-w-[1200px] mx-auto px-4 pb-12 md:px-8 md:pb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          News
        </h1>

        {featuredArticle && (
          <FeaturedArticle
            slug={featuredArticle.slug}
            title={featuredArticle.title}
            date={featuredArticle.date}
            tags={featuredArticle.tags}
            image={featuredArticle.image}
            author={featuredArticle.author}
          />
        )}

        <section className="mt-4">
          <div className="flex items-center gap-4 mb-3">
            <h2 className="text-xl md:text-2xl font-bold text-primary">
              Recent News
            </h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <p className="text-[13px] text-muted-foreground mb-5">
            {totalArticles} Articles
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <NewsCard
                key={article.id}
                id={article.id}
                slug={article.slug}
                title={article.title}
                date={article.date}
                tags={article.tags}
                image={article.image}
                excerpt={article.excerpt}
                author={article.author}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      </div>
    </div>
  );
};

export default NewsPage;
