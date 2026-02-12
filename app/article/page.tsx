import Article from "@/components/Home/Article/Article";
import { getPageBySlug } from "@/lib/getPageBySlug";
import { FeaturedArticlesBlock } from "@/types/featured-articles";

export default async function ArticlePage() {
  const page = await getPageBySlug("article");

  if (!page || !page.blocks) return null;

  const featuredArticlesBlock = page.blocks.find(
    (block): block is FeaturedArticlesBlock =>
      block.__component === "blocks.featured-articles",
  );

  if (!featuredArticlesBlock) return null;

  return (
    <main>
      <Article data={featuredArticlesBlock} showViewAllButton={false} />
    </main>
  );
}
