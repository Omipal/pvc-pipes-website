import Image from "next/image";
import Link from "next/link";
import { FeaturedProductsBlock } from "../../../types/product";
import { SectionHeadingBlock } from "@/types/section-heading";
import ReactMarkdown from "react-markdown";

type ProductsSectionProps = {
  data: FeaturedProductsBlock;
  showViewAllButton?: boolean;
  heading?: SectionHeadingBlock;
};

export default function ProductsSection({
  data,
  heading,
  showViewAllButton = true,
}: ProductsSectionProps) {
  const products = data.products;

  return (
    <section className="section-padding bg-gray-100">
      <div className="container">
        {/* Header */}
        <div className="section-box">
          {heading?.heading && <h2>{heading.heading}</h2>}

          {heading?.sub_heading && (
            <p className="text-[#ff6100]] text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
              {heading.sub_heading}
            </p>
          )}

          {heading?.description && (
            <div className="paragraph">
              <ReactMarkdown>{heading.description}</ReactMarkdown>
            </div>
          )}
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const image = product.images?.[0];

            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="relative overflow-hidden group rounded-lg shadow-md"
              >
                {image && (
                  <Image
                    src={image.url}
                    alt={image.alternativeText || product.name}
                    width={800}
                    height={504}
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white font-bold text-center leading-5">
                    {product.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
        {showViewAllButton && (
          <div className="flex justify-center mt-8">
            <Link href="/products" className="btn-orange">
              View All Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
