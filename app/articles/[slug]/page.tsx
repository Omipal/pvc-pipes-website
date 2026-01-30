import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

/**
 * Author type — EXACT Strapi response ke according
 */
type Author = {
  id: number;
  fullName: string;
  bio?: string;
  image?: {
    url: string;
    alternativeText?: string | null;
  };
};

type Article = {
  id: number;
  title: string;
  slug: string;
  description?: string;
  content?: string;
  featuredImage?: {
    url: string;
    alternativeText?: string | null;
  };
  author?: Author;
  contentTags?: {
    id: number;
    title: string;
    slug: string;
  }[];
};

async function getArticleBySlug(slug: string): Promise<Article | null> {
  const res = await fetch(
    `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=deep`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const json = await res.json();
  return json.data?.[0] ?? null;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="py-16">
      {/* ✅ Breadcrumb title yahin set hoga */}

      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-oswald font-semibold text-gray-900 mb-6">
          {article.title}
        </h1>

        {/* Author */}
        {article.author && (
          <div className="flex items-center gap-3 mb-6 text-sm text-gray-600">
            {article.author.image?.url && (
              <Image
                src={article.author.image.url}
                alt={article.author.fullName}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            )}

            <span>
              By{" "}
              <span className="font-semibold text-gray-900">
                {article.author.fullName}
              </span>
            </span>
          </div>
        )}

        {/* Featured Image */}
        {article.featuredImage?.url && (
          <div className="relative w-full h-[420px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.featuredImage.url}
              alt={article.featuredImage.alternativeText || article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Description */}
        {article.description && (
          <p className="text-lg text-gray-600 mb-6">{article.description}</p>
        )}

        {/* Content */}
        {article.content && (
          <div className="prose prose-lg max-w-none text-gray-800">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        )}

        {/* Tags */}
        {article.contentTags && article.contentTags.length > 0 && (
          <div className="mt-10">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags</h4>

            <div className="flex flex-wrap gap-2">
              {article.contentTags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
                >
                  #{tag.title}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
