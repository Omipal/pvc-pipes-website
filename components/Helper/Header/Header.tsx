"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ChevronDown } from "lucide-react";

import ProductsMegaMenu from "./ProductsMegaMenu";
import CompanyMenu from "./CompanyMenu";
const STATIC_MENUS = ["PRODUCTS", "COMPANY"];
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

/* ================= PROPS ================= */

type HeaderProps = {
  headerData: {
    logo: {
      href: string;
      image: {
        url: string;
        alternativeText: string | null;
      };
    };
    navitems: {
      id: number;
      label: string;
      href: string;
      isExternal: boolean;
    }[];
  };
  topnavData: {
    socialLinks: {
      id: number;
      href: string;
      isExternal: boolean;
      image: {
        url: string;
        alternativeText: string | null;
      };
    }[];
    cta: {
      label: string;
      href: string;
      isExternal: boolean;
    };
  };
};
/* ================= TYPES ================= */
type NavLink = { label: string; href: string };
type DropdownSection = { title: string; links: NavLink[] };
type NavItem = {
  label: string;
  href?: string;
  hasDropDown?: boolean;
  dropdownContent?: DropdownSection[];
};

/* ================= COMPONENT ================= */

export default function Header({ headerData, topnavData }: HeaderProps) {
  const logoUrl = headerData.logo.image.url.startsWith("http")
    ? headerData.logo.image.url
    : `${STRAPI_URL}${headerData.logo.image.url}`;
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [desktopCompanyOpen, setDesktopCompanyOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeBrowseByLink, setActiveBrowseByLink] = useState<string | null>(
    null
  );
  const [activeApplication, setActiveApplication] = useState<string | null>(
    null
  );
  const [activeProductFamily, setActiveProductFamily] = useState<string | null>(
    null
  );

  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const desktopSearchRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchRef = useRef<HTMLDivElement | null>(null);
  const desktopSearchButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileSearchButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const companyRef = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);

  const isActive = (href?: string) => {
    if (!href) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  /* ================= SCROLL HIDE ================= */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsHidden(current > lastScrollY && current > 100);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ================= OUTSIDE CLICK ================= */
  useEffect(() => {
    function handleClickOutside(e: PointerEvent) {
      const target = e.target as Node;

      if (
        searchOpen &&
        !desktopSearchRef.current?.contains(target) &&
        !mobileSearchRef.current?.contains(target) &&
        !desktopSearchButtonRef.current?.contains(target) &&
        !mobileSearchButtonRef.current?.contains(target)
      ) {
        setSearchOpen(false);
      }

      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !mobileMenuButtonRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }

      if (
        desktopCompanyOpen &&
        companyRef.current &&
        !companyRef.current.contains(target)
      ) {
        setDesktopCompanyOpen(false);
      }

      if (
        desktopProductsOpen &&
        productsRef.current &&
        !productsRef.current.contains(target)
      ) {
        setDesktopProductsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [searchOpen, isOpen, desktopCompanyOpen, desktopProductsOpen]);

  /* ================= JSX ================= */
  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white border-t-[1.5mm] border-t-[rgb(0,150,77)] transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* TOP BAR */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-end items-center gap-3 sm:gap-4 py-2">
          <div className="flex items-center gap-2 sm:gap-3">
            {topnavData.socialLinks.map((icon) => (
              <Link
                key={icon.id}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${STRAPI_URL}${icon.image.url}`}
                  alt={icon.image.alternativeText ?? "icon"}
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </Link>
            ))}
          </div>

          {/* SEARCH */}
          <div
            ref={desktopSearchRef}
            onPointerDown={(e) => e.stopPropagation()}
            className="hidden lg:flex relative items-center"
          >
            <button
              ref={desktopSearchButtonRef}
              onClick={() => setSearchOpen((p) => !p)}
              className="p-2"
            >
              <Search className="w-5 h-5" />
            </button>

            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 z-50">
                <div className="flex items-center gap-2 w-[90vw] sm:max-w-[600px] border bg-white px-3 py-2">
                  <Search className="w-5 h-5" />
                  <input
                    autoFocus
                    placeholder="Search..."
                    className="flex-1 outline-none text-sm"
                  />
                  <X
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => setSearchOpen(false)}
                  />
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => router.push(topnavData.cta.href)}
            className="px-3 sm:px-4 py-2 bg-[#00964d] text-white rounded-md text-sm sm:text-base"
          >
            {topnavData.cta.label}
          </button>
        </div>
      </div>

      {/* NAV */}
      <nav className="relative border-b bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center py-3">
          <Link href={headerData.logo.href}>
            <Image
              src={logoUrl || "/placeholder.svg"}
              alt={headerData.logo.image.alternativeText ?? "Logo"}
              width={80}
              height={80}
              className="h-auto w-16 sm:w-20"
            />
          </Link>

          {/* DESKTOP NAVIGATION - Hidden on mobile */}
          <div className="hidden lg:flex lg:justify-center lg:items-center gap-1 lg:gap-2">
            {/* HOME + OTHER STRAPI LINKS */}
            {headerData.navitems
              .filter((item) => !STATIC_MENUS.includes(item.label))
              .map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  className={`px-2 lg:px-3 py-2 font-medium text-sm lg:text-base ${
                    isActive(item.href) ? "text-blue-600" : "text-green-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

            {/* PRODUCTS */}
            <div ref={productsRef} onPointerDown={(e) => e.stopPropagation()}>
              <button
                onClick={() => {
                  setDesktopProductsOpen((p) => !p);
                  setDesktopCompanyOpen(false);
                }}
                className="flex items-center gap-1 px-2 lg:px-3 py-2 font-medium text-green-800 cursor-pointer text-sm lg:text-base"
              >
                PRODUCTS <ChevronDown className="w-4 h-4" />
              </button>

              {desktopProductsOpen && (
                <ProductsMegaMenu
                  closeMenu={() => setDesktopProductsOpen(false)}
                />
              )}
            </div>

            {/* COMPANY */}
            <div ref={companyRef} onPointerDown={(e) => e.stopPropagation()}>
              <button
                onClick={() => {
                  setDesktopCompanyOpen((p) => !p);
                  setDesktopProductsOpen(false);
                }}
                className="flex items-center gap-1 px-2 lg:px-3 py-2 font-medium text-green-800 cursor-pointer text-sm lg:text-base"
              >
                COMPANY <ChevronDown className="w-4 h-4" />
              </button>

              {desktopCompanyOpen && (
                <CompanyMenu
                  sections={[
                    {
                      title: "About",
                      links: [
                        {
                          label: "Why JM Eagle Pipe & Fittings",
                          href: "/why-jpf",
                        },
                        { label: "Why JME", href: "/why-pvc-pipe-fittings" },
                        { label: "Events", href: "/events" },
                      ],
                    },
                  ]}
                  close={() => setDesktopCompanyOpen(false)}
                />
              )}
            </div>
          </div>

          {/* MOBILE ICONS - Only visible on mobile */}
          <div className="flex lg:hidden gap-2">
            <button
              ref={mobileSearchButtonRef}
              onClick={() => setSearchOpen((p) => !p)}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              ref={mobileMenuButtonRef}
              onClick={() => setIsOpen((p) => !p)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        {searchOpen && (
          <div
            ref={mobileSearchRef}
            onPointerDown={(e) => e.stopPropagation()}
            className="lg:hidden border-b bg-white px-4 py-3"
          >
            <div className="flex items-center gap-2 border bg-white px-3 py-2 rounded">
              <Search className="w-5 h-5" />
              <input
                autoFocus
                placeholder="Search..."
                className="flex-1 outline-none text-sm"
              />
              <X
                className="w-5 h-5 cursor-pointer"
                onClick={() => setSearchOpen(false)}
              />
            </div>
          </div>
        )}

        {isOpen && (
          <div
            ref={menuRef}
            onPointerDown={(e) => e.stopPropagation()}
            className="lg:hidden absolute left-0 right-0 top-full z-40 bg-white border-t border-gray-200 max-h-[calc(100vh-200px)] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-6">
              {/* NAVIGATION ITEMS */}
              <div className="space-y-1">
                {/* OTHER STRAPI LINKS */}
                {headerData.navitems
                  .filter((item) => !STATIC_MENUS.includes(item.label))
                  .map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      target={item.isExternal ? "_blank" : "_self"}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-base font-medium rounded ${
                        isActive(item.href) ? "text-blue-600" : "text-gray-700"
                      } hover:bg-gray-100`}
                    >
                      {item.label}
                    </Link>
                  ))}
              </div>
              <div className="border-t border-gray-200 pt-6">
                {/* PRODUCTS */}
                <div className="mb-4">
                  <div
                    onClick={() =>
                      setActiveCategory(activeCategory ? null : "municipal")
                    }
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    <Link
                      href="/products"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                      }}
                      className="flex-1"
                    >
                      PRODUCTS
                    </Link>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform flex-shrink-0 ${
                        activeCategory ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {activeCategory && (
                    <div className="mt-2 ml-4 space-y-2">
                      {[
                        "Municipal Systems",
                        "Plumbing & Industrial",
                        "Water Well",
                        "Agriculture & Irrigation",
                        "Electrical",
                        "Pool & Spa",
                      ].map((category) => (
                        <Link
                          key={category}
                          href={`/products/${category
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* COMPANY */}
                <div>
                  <div
                    onClick={() =>
                      setActiveBrowseByLink(activeBrowseByLink ? null : "about")
                    }
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    <Link
                      href="/company"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                      }}
                      className="flex-1"
                    >
                      COMPANY
                    </Link>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform flex-shrink-0 ${
                        activeBrowseByLink ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {activeBrowseByLink && (
                    <div className="mt-2 ml-4 space-y-2">
                      {[
                        {
                          label: "Why JM Eagle Pipe & Fittings",
                          href: "/why-jpf",
                        },
                        { label: "Why JME", href: "/why-pvc-pipe-fittings" },
                        { label: "Events", href: "/events" },
                      ].map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* LANGUAGE & COUNTRY SELECTORS */}
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <button className="flex items-center justify-between w-full px-3 py-2 text-sm border rounded hover:bg-gray-50">
                  <span className="flex items-center gap-2">
                    <span className="text-lg">🇺🇸</span>
                    United States
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-between w-full px-3 py-2 text-sm border rounded hover:bg-gray-50">
                  <span>EN</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
