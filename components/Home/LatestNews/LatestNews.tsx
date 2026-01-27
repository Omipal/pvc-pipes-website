import Link from "next/link";
import NewsCard from "../../../app/news/components/NewsCard";
import { getRecentArticles } from "../../../app/news/components/newsData";

export default function LatestNews() {
  const articles = getRecentArticles().slice(0, 3);

  return (
    <section className="w-full py-16 md:py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-3">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Latest News
            </h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          <p className="text-base text-muted-foreground">
            Stay updated with the latest news and announcements from our company
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View All News
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
