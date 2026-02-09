import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { getArticleBySlug } from "@/lib/getArticleBySlug";
import { getStrapiImage } from "@/lib/getStrapiImage";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params; // 🔥 FIX

  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const imageUrl = article.featuredImage
    ? getStrapiImage(article.featuredImage)
    : null;

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {imageUrl && (
        <div className="relative w-full h-[420px] mb-8 rounded-xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={article.featuredImage?.alternativeText ?? article.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <h1 className="text-4xl font-bold text-gray-900 mb-2">{article.title}</h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
        {article.author?.fullName && <span>By {article.author.fullName}</span>}
        {article.publishedAt && (
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        )}
      </div>

      {article.contentTags?.length ? (
        <div className="flex flex-wrap gap-2 mb-8">
          {article.contentTags.map((tag) => (
            <span
              key={tag.id}
              className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full"
            >
              {tag.title}
            </span>
          ))}
        </div>
      ) : null}

      {article.content && (
        <div className="prose max-w-none text-gray-700">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      )}
    </article>
  );
}
