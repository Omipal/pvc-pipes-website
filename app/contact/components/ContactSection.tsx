"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactSection() {
  const [region, setRegion] = useState("any");
  const [productCategory, setProductCategory] = useState("any");

  const departments = [
    { name: "Corporate Office", phone: "(310) 693-8200" },
    { name: "Waterworks", phone: "(310) 693-8411" },
    { name: "Electrical", phone: "(310) 693-8412" },
    { name: "Plumbing", phone: "(310) 693-8413" },
    { name: "Irrigation", phone: "(310) 693-8414" },
    { name: "Retail", phone: "(310) 693-8415" },
  ];

  return (
    <section className="section-padding bg-[#f8f8f8]">
      <div className="container">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-[rgb(11,58,96)]">
            Contact
          </h1>
        </div>

        {/* Filter Section */}
        <div className="flex justify-center gap-10 mb-[60px] flex-wrap">
          {/* Region */}
          <div>
            <label className="block mb-2 font-medium text-[#333]">Region</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="min-w-[150px] px-3 py-2 text-sm bg-white border border-gray-300 rounded
                         cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0066cc]"
            >
              <option value="any">- Any -</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
            </select>
          </div>

          {/* Product Category */}
          <div>
            <label className="block mb-2 font-medium text-[#333]">
              Product Category
            </label>
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              className="min-w-[150px] px-3 py-2 text-sm bg-white border border-gray-300 rounded
                         cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0066cc]"
            >
              <option value="any">- Any -</option>
              <option value="waterworks">Waterworks Pipe</option>
              <option value="hdpe">HDPE Pressure Pipe</option>
              <option value="plumbing">Plumbing Pipe</option>
              <option value="irrigation">Irrigation</option>
              <option value="electrical">Electrical</option>
            </select>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex justify-center flex-wrap gap-[30px] mb-10">
          {departments.map((dept) => (
            <div key={dept.name} className="text-center">
              <p className="text-sm font-medium text-[#333] mb-2">
                {dept.name}:
              </p>
              <Link
                href={`tel:${dept.phone.replace(/[^0-9]/g, "")}`}
                className="text-sm font-medium text-[#0066cc] transition-colors duration-200 hover:text-[#004999]"
              >
                {dept.phone}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
