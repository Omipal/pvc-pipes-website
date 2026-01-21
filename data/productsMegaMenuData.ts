export type MenuLink = {
  label: string;
  href: string;
};

export type CategoryMenu = {
  title: string;
  browseByLinks: MenuLink[];
  applicationsLinks: MenuLink[];
  productFamiliesLinks: MenuLink[];
};

/* ================= CATEGORY MENU ================= */
export const categoryMenuData: Record<string, CategoryMenu> = {
  "Municipal Systems": {
    title: "Municipal Systems",
    browseByLinks: [
      { label: "Applications", href: "#" },
      { label: "Product Families", href: "#" },
    ],
    applicationsLinks: [
      { label: "Potable Water", href: "/products/potable-water" },
      { label: "Wastewater", href: "/products/wastewater" },
      { label: "Storm Drainage", href: "/products/storm-drainage" },
    ],
    productFamiliesLinks: [
      { label: "PVC Pressure Pipe", href: "#" },
      { label: "PVC Gravity Pipe", href: "#" },
    ],
  },

  "Plumbing & Industrial": {
    title: "Plumbing & Industrial",
    browseByLinks: [
      { label: "Applications", href: "#" },
      { label: "Product Families", href: "#" },
    ],
    applicationsLinks: [
      { label: "Residential Plumbing", href: "/products/residential" },
      { label: "Industrial Fluid Handling", href: "/products/industrial" },
    ],
    productFamiliesLinks: [
      { label: "Schedule 40", href: "#" },
      { label: "Schedule 80", href: "#" },
    ],
  },

  "Water Well": {
    title: "Water Well",
    browseByLinks: [
      { label: "Applications", href: "#" },
      { label: "Product Families", href: "#" },
    ],
    applicationsLinks: [
      { label: "Well Casing", href: "/products/well-casing" },
      { label: "Drop Pipe", href: "/products/drop-pipe" },
    ],
    productFamiliesLinks: [{ label: "C900", href: "#" }],
  },
};
