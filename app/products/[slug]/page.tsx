// import Image from "next/image";
// import Link from "next/link";
// import { productData } from "@/data/products";
// import { notFound } from "next/navigation";

// export default async function ProductPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const product = productData.find((p) => p.slug === slug);

//   if (!product) {
//     notFound();
//   }

//   // Get related products based on applications
//   const relatedProducts = productData
//     .filter((p) => p.slug !== product.slug)
//     .filter((p) =>
//       product.applications?.some((app) => p.applications?.includes(app)),
//     )
//     .slice(0, 8);

//   // If no related products found, show other products
//   const displayedRelated =
//     relatedProducts.length > 0
//       ? relatedProducts
//       : productData.filter((p) => p.slug !== product.slug).slice(0, 8);

//   return (
//     <main className="min-h-screen bg-white">
//       {/* Product Header Section */}
//       <section className="max-w-6xl mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-2 gap-8 items-start">
//           {/* Product Image */}
//           <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden min-h-[400px] md:min-h-[500px]">
//             <Image
//               src={product.image || "/placeholder.svg"}
//               alt={product.title}
//               width={600}
//               height={600}
//               className="w-full h-full object-cover"
//               priority
//             />
//           </div>

//           {/* Product Info */}
//           <div className="flex flex-col justify-start">
//             <h1 className="text-4xl md:text-5xl font-bold text-[rgb(11,58,96)] mb-4">
//               {product.title}
//             </h1>

//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               {product.description}
//             </p>

//             {/* Applications */}
//             {product.applications && product.applications.length > 0 && (
//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold text-[rgb(11,58,96)] mb-4">
//                   Applications
//                 </h3>
//                 <div className="flex flex-wrap gap-3">
//                   {product.applications.map((app) => (
//                     <span
//                       key={app}
//                       className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
//                     >
//                       {app}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* CTA Buttons */}
//             <div className="flex gap-4 flex-wrap">
//               <Link
//                 href="/contact"
//                 className="px-8 py-3 bg-[rgb(11,58,96)] text-white font-semibold rounded-lg hover:bg-[rgb(8,45,75)] transition-colors"
//               >
//                 Request a Quote
//               </Link>
//               <Link
//                 href="/products"
//                 className="px-8 py-3 border-2 border-[rgb(11,58,96)] text-[rgb(11,58,96)] font-semibold rounded-lg hover:bg-gray-50 transition-colors"
//               >
//                 View All Products
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Products Section */}
//       <section className="bg-gray-50 py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-[rgb(11,58,96)] mb-12">
//             Related Products
//           </h2>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
//             {displayedRelated.map((relatedProduct) => (
//               <Link
//                 key={relatedProduct.slug}
//                 href={`/products/${relatedProduct.slug}`}
//                 className="relative overflow-hidden group cursor-pointer bg-gray-100 min-h-[150px] sm:min-h-[180px] md:min-h-[220px] rounded-lg shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <Image
//                   src={relatedProduct.image || "/placeholder.svg"}
//                   alt={relatedProduct.title}
//                   width={300}
//                   height={300}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
//                   <h3 className="text-white font-bold text-center px-4 text-sm sm:text-base md:text-lg text-balance">
//                     {relatedProduct.title}
//                   </h3>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/getProductBySlug";
import { getRelatedProducts } from "@/lib/getRelatedProducts";
import ProductDetail from "../../../components/Products/ProductDetail";
import RelatedProducts from "../../../components/Products/RelatedProducts";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const primaryCategory = product.categories?.[0]?.name;

  const relatedProducts = primaryCategory
    ? await getRelatedProducts(primaryCategory, slug)
    : [];

  return (
    <>
      <ProductDetail product={product} />
      {relatedProducts.length > 0 && (
        <RelatedProducts products={relatedProducts} />
      )}
    </>
  );
}
