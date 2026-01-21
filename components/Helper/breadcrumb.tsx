"use client";
import { useBreadcrumb } from "@/components/Helper/BreadcrumbContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { productData } from "@/data/products";

type Crumb = {
  name: string;
  path: string;
};

const APPLICATION_TITLES: Record<string, string> = {
  municipalities: "Municipalities",
  plumbing: "Plumbing",
  "storm-water": "Storm Water",
  "golf-turf": "Golf & Turf",
  industrial: "Industrial",
};

const STRENGTH_TITLES: Record<string, string> = {
  "product-installation-guides": "Product Installation Guides",
  "product-catalog": "Product Catalog",
  "installation-calculators": "Installation Calculators",
  "50-year-warranty": "50 Year Warranty",
  "technical-information": "Technical Information",
  "terms-and-conditions": "Terms and Conditions",
};

const EVENT_TITLES: Record<string, string> = {
  "ngwa-2025": "NGWA 2025",
  "ia-show-2025": "IA Show 2025",
  "nastt-nodig-2025": "NASTT No-Dig North 2025",
  "equip-expo-2025": "Equip Exposition 2025",
  "psp-deck-expo": "PSP / Deck Expo 2025",
  "wwa-2025": "WWA 2025",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const { title } = useBreadcrumb();

  /**
   * ================= ROUTE CONFIG =================
   */
  const ROUTE_CONFIG: Record<string, Crumb[]> = {
    "/distributor": [
      { name: "Home", path: "/" },
      { name: "Locations", path: "/distributor" },
    ],
    "/careers": [
      { name: "Home", path: "/" },
      { name: "Careers", path: "/careers" },
    ],
    "/contact": [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
    "/quick": [
      { name: "Home", path: "/" },
      { name: "Quick", path: "/quick" },
    ],
    "/news": [
      { name: "Home", path: "/" },
      { name: "News", path: "/news" },
    ],
    "/why-jpf": [
      { name: "Home", path: "/" },
      { name: "Company", path: "#" },
      { name: "Why JM Eagle Pipe & Fittings", path: "/why-jpf" },
    ],
    "/events": [
      { name: "Home", path: "/" },
      { name: "Events", path: "/events" },
    ],
    // ✅ ADD THIS
    "/strength": [
      { name: "Home", path: "/" },
      { name: "Strength of Performance", path: "/strength" },
    ],

    "/applications": [
      { name: "Home", path: "/" },
      { name: "Applications", path: "/applications" },
    ],

    "/support": [
      { name: "Home", path: "/" },
      { name: "Support", path: "/support" },
    ],

    "/power": [
      { name: "Home", path: "/" },
      { name: "Power", path: "/power" },
    ],
  };

  /**
   * ================= APPLICATIONS DETAIL =================
   * /applications/[slug]
   * Home > Applications > Page Title
   */
  if (pathname.startsWith("/applications/")) {
    const slug = pathname.split("/")[2];
    const title = APPLICATION_TITLES[slug] || "Applications";

    return (
      <nav className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>

            <span className="text-gray-400">›</span>

            <li>
              <Link href="/applications" className="hover:text-gray-900">
                Applications
              </Link>
            </li>

            <span className="text-gray-400">›</span>

            <li className="font-semibold text-gray-900">{title}</li>
          </ol>
        </div>
      </nav>
    );
  }

  /**
   * ================= EVENTS DETAIL =================
   * /events/[id]
   */
  if (pathname.startsWith("/events/")) {
    const eventId = pathname.split("/")[2];
    const eventTitle = EVENT_TITLES[eventId] || "Event Details";

    return (
      <nav className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>
            <span className="text-gray-400">›</span>
            <li>
              <Link href="/events" className="hover:text-gray-900">
                Events
              </Link>
            </li>
            <span className="text-gray-400">›</span>
            <li className="font-semibold text-gray-900">{eventTitle}</li>
          </ol>
        </div>
      </nav>
    );
  }

  /**
   * ================= PRODUCT DETAIL =================
   * /products/[slug]
   * Home > Product Title
   */
  if (pathname.startsWith("/products/")) {
    const slug = pathname.split("/")[2];
    const product = productData.find((p) => p.slug === slug);

    if (product) {
      return (
        <nav className="bg-gray-50 border-b border-gray-200 py-3 px-4">
          <div className="max-w-7xl mx-auto">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Home
                </Link>
              </li>
              <span className="text-gray-400">›</span>
              <li className="font-semibold text-gray-900">{product.title}</li>
            </ol>
          </div>
        </nav>
      );
    }
  }

  /**
   * ================= SUPPORT DETAIL =================
   * /support/[slug]
   * Home > Support > Page Title (from Context)
   */
  if (pathname.startsWith("/support/") && title) {
    return (
      <nav className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>

            <span className="text-gray-400">›</span>

            <li>
              <Link href="/support" className="hover:text-gray-900">
                Support
              </Link>
            </li>

            <span className="text-gray-400">›</span>

            <li className="font-semibold text-gray-900">{title}</li>
          </ol>
        </div>
      </nav>
    );
  }

  /**
   * ================= Strength DETAIL =================
   * /strength/[slug]
   * Home > Strength > Page Title (from Context)
   */

  if (pathname.startsWith("/strength/") && title) {
    return (
      <nav className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>

            <span className="text-gray-400">›</span>

            <li>
              <Link href="/strength" className="hover:text-gray-900">
                Strength
              </Link>
            </li>

            <span className="text-gray-400">›</span>

            <li className="font-semibold text-gray-900">{title}</li>
          </ol>
        </div>
      </nav>
    );
  }

  /**
   * ================= Power DETAIL =================
   * /power/[slug]
   * Home > Power > Page Title (from Context)
   */

  if (pathname.startsWith("/power/") && title) {
    return (
      <nav className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>

            <span className="text-gray-400">›</span>

            <li>
              <Link href="/power" className="hover:text-gray-900">
                Power
              </Link>
            </li>

            <span className="text-gray-400">›</span>

            <li className="font-semibold text-gray-900">{title}</li>
          </ol>
        </div>
      </nav>
    );
  }

  /**
   * ================= DEFAULT ROUTES =================
   */
  const breadcrumbs = ROUTE_CONFIG[pathname] || [{ name: "Home", path: "/" }];

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && <span className="text-gray-400">›</span>}

              {index === breadcrumbs.length - 1 ? (
                <span className="font-semibold text-gray-900">{item.name}</span>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-gray-900 transition"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
