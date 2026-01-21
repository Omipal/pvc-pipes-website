"use client";
import Link from "next/link";
import { useState } from "react";
import EmailModal from "./EmailModal";

interface FeaturedArticleProps {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  image: string;
  author?: string;
}

const FeaturedArticle = ({
  slug,
  title,
  date,
  tags,
  image,
  author,
}: FeaturedArticleProps) => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleCopyLink = () => {
    const url = `${window.location.origin}/news/${slug}`;
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-0 bg-card md:bg-transparent rounded-lg mb-12">
        <div className="rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover min-h-[250px]"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary mb-2 uppercase tracking-wide">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            FEATURED
          </div>

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
            <span>{date}</span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold leading-tight text-primary mb-4">
            {title}
          </h2>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2.5 py-1 text-[11px] font-medium border border-news-tag-border rounded-full bg-card text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {author && <p className="text-sm text-foreground mb-5">{author}</p>}

          <div className="flex flex-wrap gap-3 items-center">
            <Link
              href={`/news/${slug}`}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Read More
            </Link>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-primary hover:underline"
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
              className="inline-flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-primary hover:underline"
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
      </section>

      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        articleTitle={title}
      />
    </>
  );
};

export default FeaturedArticle;
