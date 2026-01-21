"use client";

import { useState } from "react";

interface Distributor {
  id: number;
  name: string;
  address: string;
  phone: string;
  fax: string;
  products: string[];
}

// Sample distributor data
const distributors: Distributor[] = [
  {
    id: 1,
    name: "WATER-RITE PRODUCTS",
    address: "4807 RIO LINDA BLVD\nSACRAMENTO, CA 95838",
    phone: "(916) 925-3629",
    fax: "(916) 925-4035",
    products: [
      "HDPE Pressure Pipe (IPS & DIPS)",
      "Sewer Pipe and Fittings (Coupled-in gasket)",
      "Plumbing Pipe (PVC Solvent Welds)",
      "Electrical Conduit",
    ],
  },
  {
    id: 2,
    name: "4-D PLASTIC SALES LLC",
    address: "878 FEDERAL ROAD\nBROOKFIELD, CT 6804",
    phone: "(203) 994-4492",
    fax: "(203) 775-1462",
    products: ["HDPE Pressure Pipe (IPS & DIPS)"],
  },
  {
    id: 3,
    name: "A & B PIPE AND SUPPLY CO.",
    address: "P.O. BOX 3367\nHIALEAH, FL 33013",
    phone: "(305) 691-5000",
    fax: "(305) 696-6810",
    products: [
      "Waterworks Pipe (C900 & C905)",
      "HDPE Pressure Pipe (IPS & DIPS)",
      "Irrigation and 2:1 Pressure Rated Pipe (IPS)",
      "Sewer Pipe and Fittings (Locked-in gasket)",
    ],
  },
  {
    id: 4,
    name: "A & S IRRIGATION",
    address: "8 BUTTE ROAD\nJERONE, DE 19333",
    phone: "(208) 324-9551",
    fax: "(208) 324-9553",
    products: [
      "Irrigation and 2:1 Pressure Rated Pipe (IPS)",
      "Plumbing Pipe (PVC Solvent Welds)",
    ],
  },
  {
    id: 5,
    name: "A-1 IRRIGATION & TECHNICAL",
    address: "1 MILE N. HWY 1 HWY 873\nBROOKS, ALBERTA, AB T1R 1-1",
    phone: "(403) 362-7651",
    fax: "(403) 362-7629",
    products: [
      "Irrigation and 2:1 Pressure Rated Pipe (IPS)",
      "Plumbing Pipe (PVC Solvent Welds)",
    ],
  },
  {
    id: 6,
    name: "AAA ELECTRIC SUPPLY INC.",
    address: "1014 5 MONTEBELLO BLVD\nMONTEBELLO, CA 90640",
    phone: "(323) 721-2700",
    fax: "(123) 721-5437",
    products: ["Electrical Conduit"],
  },
  {
    id: 7,
    name: "ANNONSON SPRINKLER",
    address: "19170 GOLDEN STATE BLVD\nMADERA, CA 93637",
    phone: "(559) 673-4261",
    fax: "(559) 674-4078",
    products: [
      "Irrigation and 2:1 Pressure Rated Pipe (IPS)",
      "Plumbing Pipe (PVC Solvent Welds)",
    ],
  },
  {
    id: 8,
    name: "ACT PIPE & SUPPLY",
    address: "6950 W SAM HOUSTON PKWY N\nHOUSTON, TX 77041",
    phone: "(800) 231-9808",
    fax: "(713) 937-6006",
    products: [
      "Waterworks Pipe (C900 & C905)",
      "HDPE Pressure Pipe (IPS & DIPS)",
      "Irrigation and 2:1 Pressure Rated Pipe (IPS)",
      "Sewer Pipe and Fittings (Locked-in gasket)",
    ],
  },
  {
    id: 9,
    name: "ACT PIPE & SUPPLY",
    address: "4719 DODGE STREET\nSAN ANTONIO, TX 78217",
    phone: "(210) 546-6969",
    fax: "(210) 546-7075",
    products: [
      "Waterworks Pipe (C900 & C905)",
      "HDPE Pressure Pipe (IPS & DIPS)",
      "Irrigation and 2:1 Pressure Rated Pipe (IPS)",
      "Sewer Pipe and Fittings (Locked-in gasket)",
    ],
  },
  {
    id: 10,
    name: "ACT PIPE & SUPPLY",
    address: "2585 N.E. 28TH STREET\nFT. WORTH, TX 76111",
    phone: "(817) 831-1663",
    fax: "(817) 831-1953",
    products: [
      "Waterworks Pipe (C900 & C905)",
      "HDPE Pressure Pipe (IPS & DIPS)",
      "Irrigation and 2:1 Pressure Rated Pipe (IPS)",
      "Sewer Pipe and Fittings (Locked-in gasket)",
    ],
  },
  {
    id: 11,
    name: "ACT PIPE & SUPPLY",
    address: "1400 GRAND AVENUE PKWY\nPFLUGERVILLE, TX 78660",
    phone: "(512) 252-7030",
    fax: "(512) 252-7026",
    products: [
      "Waterworks Pipe (C900 & C905)",
      "HDPE Pressure Pipe (IPS & DIPS)",
      "Irrigation and 2:1 Pressure Rated Pipe (IPS)",
      "Sewer Pipe and Fittings (Locked-in gasket)",
    ],
  },
  {
    id: 12,
    name: "ACT PIPE & SUPPLY",
    address: "5817 SO.GENERAL BRUCE DR\nTEMPLE, TX 76502",
    phone: "(254) 742-0888",
    fax: "(254) 742-0900",
    products: [
      "Waterworks Pipe (C900 & C905)",
      "HDPE Pressure Pipe (IPS & DIPS)",
      "Irrigation and 2:1 Pressure Rated Pipe (IPS)",
      "Sewer Pipe and Fittings (Locked-in gasket)",
    ],
  },
];

const ITEMS_PER_PAGE = 12;

export default function DistributorLocator() {
  const [distance, setDistance] = useState("10");
  const [origin, setOrigin] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(distributors.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentDistributors = distributors.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleApply = () => {
    setCurrentPage(1);
  };

  const productTypes = [
    "Waterworks Pipe (C900 & C905)",
    "HDPE Pressure Pipe (IPS & DIPS)",
    "Irrigation and 2:1 Pressure Rated Pipe (IPS)",
    "Sewer Pipe and Fittings (Locked-in gasket)",
    "Plumbing Pipe (PVC Solvent Welds)",
    "Electrical Conduit",
  ];

  return (
    <div className="section-padding min-h-screen bg-white">
      {/* Search Filters Section */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Distance Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Distance from location
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded"
              />
              <select
                defaultValue="miles"
                className="px-3 py-2 border border-gray-300 rounded bg-white"
              >
                <option value="miles">Miles</option>
                <option value="km">Kilometers</option>
              </select>
            </div>
          </div>

          {/* Origin Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              from
            </label>
            <input
              type="text"
              placeholder="Origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          {/* Product Type Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Type
            </label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded bg-white"
            >
              <option value="">Select product...</option>
              {productTypes.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>

          {/* Apply Button */}
          <div className="flex items-center justify-center">
            <button
              className="btn-green"
              onClick={handleApply}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#16a34a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#22c55e";
              }}
            >
              APPLY
            </button>
          </div>
        </div>
      </div>

      {/* Results Grid Section */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentDistributors.map((distributor) => (
            <div
              key={distributor.id}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-sm font-bold text-teal-600 mb-2">
                {distributor.name}
              </h3>
              <p className="text-xs text-gray-600 mb-3 whitespace-pre-line">
                {distributor.address}
              </p>
              <div className="text-xs text-gray-600 mb-3">
                <p className="font-semibold">Phone: {distributor.phone}</p>
                <p className="font-semibold">Fax: {distributor.fax}</p>
              </div>
              <ul className="text-xs text-gray-600 space-y-1">
                {distributor.products.map((product, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-teal-600">•</span>
                    <span>{product}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12 flex-wrap">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
            style={{
              padding: "8px 12px",
              fontSize: "14px",
              border: "1px solid #d1d5db",
              backgroundColor: currentPage === 1 ? "#f3f4f6" : "white",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              borderRadius: "4px",
              opacity: currentPage === 1 ? 0.5 : 1,
            }}
          >
            PREV
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              style={{
                padding: "8px 12px",
                fontSize: "14px",
                border: "1px solid #d1d5db",
                backgroundColor: currentPage === page ? "#2563eb" : "white",
                color: currentPage === page ? "white" : "#374151",
                cursor: "pointer",
                borderRadius: "4px",
                fontWeight: currentPage === page ? "600" : "400",
              }}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            style={{
              padding: "8px 12px",
              fontSize: "14px",
              border: "1px solid #d1d5db",
              backgroundColor: currentPage === totalPages ? "#f3f4f6" : "white",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              borderRadius: "4px",
              opacity: currentPage === totalPages ? 0.5 : 1,
            }}
          >
            NEXT
          </button>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
            style={{
              padding: "8px 12px",
              fontSize: "14px",
              border: "1px solid #d1d5db",
              backgroundColor: currentPage === totalPages ? "#f3f4f6" : "white",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              borderRadius: "4px",
              opacity: currentPage === totalPages ? 0.5 : 1,
              marginLeft: "8px",
            }}
          >
            LAST
          </button>
        </div>
      </div>
    </div>
  );
}
