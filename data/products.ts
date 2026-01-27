export interface Product {
  slug: string;
  title: string;
  description: string;
  image: string;
  applications?: string[];
}

export const productData: Product[] = [
  {
    slug: "pvc",
    title: "PVC",
    description: "Polyvinyl Chloride pipes for various applications",
    image: "/products/PVCpipes_0.jpg",
    applications: ["Plumbing", "Storm Drainage", "Water/Sewer"],
  },
  {
    slug: "pe",
    title: "PE",
    description: "Polyethylene pipes and cables",
    image: "/products/PEcables02_0.jpg",
    applications: ["Water/Sewer", "Irrigation", "Gas/Fittings"],
  },
  {
    slug: "abs",
    title: "ABS",
    description: "Acrylonitrile Butadiene Styrene pipes",
    image: "/products/abs.jpg",
    applications: ["Plumbing", "Wastewater"],
  },
  {
    slug: "water-sewer",
    title: "Water/Sewer",
    description: "Specialized pipes for water and sewer systems",
    image: "/products/n_PVCwaterandsewer.jpg",
    applications: ["Water/Sewer"],
  },
  {
    slug: "wastewater",
    title: "Wastewater",
    description: "HDPE pipes for wastewater management",
    image: "/products/n_HDPEWaterandSewer.jpg",
    applications: ["Wastewater"],
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    description: "Complete plumbing solutions",
    image: "/products/plumbing_small.jpg",
    applications: ["Plumbing"],
  },
  {
    slug: "storm-drainage",
    title: "Storm/Drainage",
    description: "Storm drainage and drainage systems",
    image: "/products/n_PVCplumbing.jpg",
    applications: ["Storm Drainage"],
  },
  {
    slug: "irrigation",
    title: "Irrigation",
    description: "Irrigation system pipes",
    image: "/products/n_PEstormDrain.jpg",
    applications: ["Irrigation"],
  },
  {
    slug: "gas-fittings",
    title: "Gas/Fittings",
    description: "Gas pipes and fittings",
    image: "/products/n_PVCirrgiation.jpg",
    applications: ["Gas/Fittings"],
  },
  {
    slug: "electrical-communications",
    title: "Electrical/Communications",
    description: "Electrical and communications conduit",
    image: "/products/n_gas.jpg",
    applications: ["Electrical/Communications"],
  },
  {
    slug: "polyethylene-fittings",
    title: "Polyethylene Fittings",
    description: "High-quality polyethylene fittings",
    image: "/products/n_PVCelectricalfittings.jpg",
    applications: ["Gas/Fittings"],
  },
  {
    slug: "hdpe-pressure-pipe",
    title: "HDPE Pressure Pipe",
    description: "High-density polyethylene pressure pipes",
    image: "/products/n_PEfittings.jpg",
    applications: ["Water/Sewer", "Irrigation"],
  },
];
