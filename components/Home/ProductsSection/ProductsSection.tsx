// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { productData } from "@/data/products";
// const products = productData; // Declare the products variable

// export default function ProductsSection() {
//   return (
//     <section className="section-padding bg-white">
//       <div className="container">
//         {/* Header */}
//         <div className="section-box">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-[rgb(11,58,96)] mb-3">
//             Products
//           </h1>

//           <div className="section-content">
//             <p>
//               JM Eagle offers the most comprehensive line of plastic pipes on
//               the planet. Whether it's our PVC, Polyvinyl Chloride, Polyethylene
//               or ABS Unoincorporate Butadiene Styrene, JM Eagle products are the
//               very best for their application. In addition to meeting the
//               required specifications, JM Eagle and our industry leading team
//               also guarantees the best quality and performance over time.
//               Because they are plastic, they will not corrode or become brittle.
//               The best plastic pipe and is also a member of the US Green
//               Building Council (USGBC).
//             </p>
//             {/* USGBC Badge */}
//             <div className="flex justify-center">
//               <div className="text-center">
//                 <div className="inline-block">
//                   <span className="text-[#00a35a] font-bold text-sm uppercase tracking-wide">
//                     USGBC
//                   </span>
//                   <p className="text-xs text-gray-600 mt-1">Certified</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
//           {productData.slice(0, 8).map((product) => (
//             <Link
//               key={product.slug}
//               href={`/products/${product.slug}`}
//               className="relative overflow-hidden group cursor-pointer bg-gray-100 min-h-[150px] sm:min-h-[180px] md:min-h-[220px] rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             >
//               <Image
//                 src={product.image || "/placeholder.svg"}
//                 alt={product.title}
//                 width={800}
//                 height={504}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
//                 <h3 className="text-white font-bold text-center px-4 text-sm sm:text-base md:text-lg text-balance">
//                   {product.title}
//                 </h3>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* View All Products Button */}
//         <div className="flex justify-center mt-8">
//           <Link
//             href="/products"
//             className="inline-block px-6 py-3 bg-[rgb(11,58,96)] text-white font-semibold rounded-lg hover:bg-[rgb(8,45,75)] transition-colors"
//           >
//             View All Products
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { FeaturedProductsBlock } from "../../../types/product";

type ProductsSectionProps = {
  data: FeaturedProductsBlock;
};

export default function ProductsSection({ data }: ProductsSectionProps) {
  const products = data.products;

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="section-box">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-[rgb(11,58,96)] mb-3">
            Products
          </h1>

          <div className="section-content">
            <p>
              JM Eagle offers the most comprehensive line of plastic pipes on
              the planet. Whether it's our PVC, Polyethylene or ABS products, JM
              Eagle guarantees the best quality and performance.
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => {
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
                  <h3 className="text-white font-bold text-center">
                    {product.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/products"
            className="px-6 py-3 bg-[rgb(11,58,96)] text-white rounded-lg"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
