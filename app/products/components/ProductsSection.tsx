"use client";

import Image from "next/image";

const products = [
  {
    title: "PVC",
    image: "/products/PVCpipes_0.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "PE",
    image: "/products/PEcables02_0.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "ABS",
    image: "/products/abs.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Water/Sewer",
    image: "/products/n_PVCwaterandsewer.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Wastewater",
    image: "/products/n_HDPEWaterandSewer.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Plumbing",
    image: "/products/plumbing_small.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Storm/Drainage",
    image: "/products/n_PVCplumbing.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Irrigation",
    image: "/products/n_PEstormDrain.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Gas/Fittings",
    image: "/products/n_PVCirrgiation.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Electrical/Communications",
    image: "/products/n_gas.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Polyethylene Fittings",
    image: "/products/n_PVCelectricalfittings.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "HDPE Pressure Pipe",
    image: "/products/n_PEfittings.jpg",
    span: "col-span-1 row-span-1",
  },
];

export default function ProductsSection() {
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
              the planet. Whether it's our PVC, Polyvinyl Chloride, Polyethylene
              or ABS Unoincorporate Butadiene Styrene, JM Eagle products are the
              very best for their application. In addition to meeting the
              required specifications, JM Eagle and our industry leading team
              also guarantees the best quality and performance over time.
              Because they are plastic, they will not corrode or become brittle.
              The best plastic pipe and is also a member of the US Green
              Building Council (USGBC).
            </p>
            {/* USGBC Badge */}
            <div className="flex justify-center">
              <div className="text-center">
                <div className="inline-block">
                  <span className="text-[#00a35a] font-bold text-sm uppercase tracking-wide">
                    USGBC
                  </span>
                  <p className="text-xs text-gray-600 mt-1">Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${product.span} relative overflow-hidden group cursor-pointer bg-gray-100 min-h-[150px] sm:min-h-[180px] md:min-h-[220px] rounded-lg shadow-md hover:shadow-lg transition-shadow`}
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={800}
                height={504}
              />
              <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <h3 className="text-white font-bold text-center px-4 text-sm sm:text-base md:text-lg text-balance">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
