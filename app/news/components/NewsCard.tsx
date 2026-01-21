import Link from "next/link";

interface NewsCardProps {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  image: string;
  excerpt?: string;
  author?: string;
}

const NewsCard = ({
  slug,
  title,
  date,
  tags,
  image,
  excerpt,
  author,
}: NewsCardProps) => {
  return (
    <article className="bg-card rounded-lg overflow-hidden shadow-sm flex flex-col h-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <Link
        href={`/news/${slug}`}
        className="block aspect-[4/3] overflow-hidden"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-xs text-news-date mb-2">
          <svg
            className="w-3.5 h-3.5"
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

        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-0.5 text-[11px] font-medium border border-news-tag-border rounded-full bg-card text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-[15px] font-semibold leading-snug mb-2 text-primary">
          <Link href={`/news/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>

        {excerpt && (
          <p className="text-[13px] text-foreground leading-relaxed mb-2 flex-1">
            {excerpt}
          </p>
        )}
        {author && (
          <p className="text-xs text-muted-foreground mb-3">{author}</p>
        )}

        <Link
          href={`/news/${slug}`}
          className="inline-flex items-center gap-1 text-[13px] font-medium text-news-link mt-auto self-end hover:underline"
        >
          Read More
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;
