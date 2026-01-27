import Image from "next/image";
import Link from "next/link";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type Article = {
  id: number;
  title: string;
  description: string;
  slug: string;
  featuredImage?: {
    url: string;
    alternativeText?: string | null;
  };
  author?: {
    fullName: string;
    image?: {
      url: string;
      alternativeText?: string | null;
    };
  };
};

async function getArticles(): Promise<Article[]> {
  const res = await fetch(
    `${STRAPI_URL}/api/articles?populate=featuredImage,author,author.image`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const json = await res.json();
  return json.data;
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-oswald font-semibold text-gray-900 mb-10">
          Articles
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group border rounded-lg overflow-hidden hover:shadow-lg transition bg-white"
            >
              {/* Featured Image */}
              {article.featuredImage?.url && (
                <div className="relative h-56 w-full">
                  <Image
                    src={article.featuredImage.url}
                    alt={article.featuredImage.alternativeText || article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
              )}

              <div className="p-5">
                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {article.title}
                </h2>

                {/* Author */}
                {article.author && (
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                    {article.author.image?.url && (
                      <Image
                        src={article.author.image.url}
                        alt={article.author.fullName}
                        width={24}
                        height={24}
                        className="rounded-full object-cover"
                      />
                    )}
                    <span>{article.author.fullName}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-3">
                  {article.description}
                </p>

                <span className="inline-block mt-4 text-sm font-semibold text-primary">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
