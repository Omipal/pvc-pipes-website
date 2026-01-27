import Image from "next/image";
import Link from "next/link";
import { FeaturedArticlesBlock } from "@/types/featured-articles";

type Props = {
  data: FeaturedArticlesBlock;
};

const FeaturedArticles = ({ data }: Props) => {
  if (!data.articles?.length) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
          Featured Articles
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {data.articles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              {article.featuredImage && (
                <div className="relative h-48">
                  <Image
                    src={article.featuredImage.url}
                    alt={article.featuredImage.alternativeText || article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {article.title}
                </h3>

                <p className="text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>

                {article.author && (
                  <span className="text-xs text-gray-500">
                    By {article.author.fullName}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
