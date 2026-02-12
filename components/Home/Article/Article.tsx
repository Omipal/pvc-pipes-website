import Image from "next/image";
import Link from "next/link";
import { FeaturedArticlesBlock } from "@/types/featured-articles";
import { getStrapiImage } from "@/lib/getStrapiImage";
import { SectionHeadingBlock } from "@/types/section-heading";
import ReactMarkdown from "react-markdown";

type Props = {
  data: FeaturedArticlesBlock;
  showViewAllButton?: boolean;
  heading?: SectionHeadingBlock;
};

export default function Article({
  data,
  heading,
  showViewAllButton = true,
}: Props) {
  const { title, articles } = data;

  if (!articles?.length) return null;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="section-box">
          {heading?.heading && <h2>{heading.heading}</h2>}

          {heading?.sub_heading && (
            <p className="text-blue-600 text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
              {heading.sub_heading}
            </p>
          )}

          {heading?.description && (
            <div className="paragraph">
              <ReactMarkdown>{heading.description}</ReactMarkdown>
            </div>
          )}
        </div>
        {title && (
          <h3 className="text-3xl font-bold mb-8 text-center">{title}</h3>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => {
            const imageUrl = article.featuredImage
              ? getStrapiImage(article.featuredImage)
              : null;

            return (
              <div
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                {imageUrl && (
                  <div className="relative h-48">
                    <Image
                      src={imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-5">
                  {/* TITLE */}
                  <h4 className="text-lg font-semibold mb-1 text-black">
                    {article.title}
                  </h4>

                  {/* AUTHOR */}
                  {article.author?.fullName && (
                    <p className="text-xs text-[#ff6100] mb-2">
                      By {article.author.fullName}
                    </p>
                  )}

                  {/* TAGS */}
                  {article.contentTags?.length ? (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.contentTags.map((tag) => (
                        <span
                          key={tag.id}
                          className="text-xs bg-[#eae2b7] text-[#ff6100] px-2 py-1 rounded"
                        >
                          {tag.title}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {/* DESCRIPTION */}
                  {article.description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                      {article.description}
                    </p>
                  )}

                  {/* READ MORE */}
                  <Link
                    href={`/article/${article.slug}`}
                    className="text-[#ff6100] font-medium text-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {showViewAllButton && (
          <div className="flex justify-center mt-8">
            <Link href="/article" className="btn-orange">
              View All News
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
