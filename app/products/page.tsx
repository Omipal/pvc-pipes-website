import ProductsSection from "@/components/Home/ProductsSection/ProductsSection";
import CategorySidebar from "@/components/Products/CategorySidebar";
import { getPageBySlug } from "@/lib/getPageBySlug";
import { FeaturedProductsBlock, Product } from "@/types/product";
import { extractProductCategories } from "@/lib/extractProductCategories";

type ProductsPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  // ✅ MUST unwrap searchParams
  const resolvedSearchParams = await searchParams;

  const rawCategory = resolvedSearchParams?.category;

  // ✅ FIX category=null bug
  const activeCategory =
    rawCategory && rawCategory !== "null"
      ? decodeURIComponent(rawCategory)
      : undefined;

  // 🔵 fetch Strapi page
  const page = await getPageBySlug("products");
  if (!page || !page.blocks) return null;

  const featuredProductsBlock = page.blocks.find(
    (block): block is FeaturedProductsBlock =>
      block.__component === "blocks.featured-products",
  );

  if (!featuredProductsBlock) return null;

  const allProducts = featuredProductsBlock.products;

  // 🔵 extract sidebar categories
  const categories = extractProductCategories(allProducts);

  // 🔵 filter products
  const filteredProducts: Product[] = activeCategory
    ? allProducts.filter((product) =>
        product.categories.some((cat) => cat.slug === activeCategory),
      )
    : allProducts;

  return (
    <section className="section-padding bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        {/* LEFT SIDEBAR */}
        <CategorySidebar
          categories={categories}
          activeCategory={activeCategory}
        />

        {/* RIGHT PRODUCTS */}
        <ProductsSection
          data={{
            ...featuredProductsBlock,
            products: filteredProducts,
          }}
          showViewAllButton={false}
        />
      </div>
    </section>
  );
}
