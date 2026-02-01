"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchProductsQuery } from "@/store/api";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ChevronDown } from "lucide-react";

import CompanyMenu from "./CompanyMenu";
const STATIC_MENUS = ["COMPANY"];
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
const getStrapiImageUrl = (url?: string) => {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
};

/* ================= COMPONENT ================= */

export default function Header({ headerData, topnavData }: HeaderProps) {
  const logoUrl = headerData.logo.image.url.startsWith("http")
    ? headerData.logo.image.url
    : `${STRAPI_URL}${headerData.logo.image.url}`;
  const router = useRouter();
  const pathname = usePathname();

  const [searchTerm, setSearchTerm] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [desktopCompanyOpen, setDesktopCompanyOpen] = useState(false);

  const [activeBrowseByLink, setActiveBrowseByLink] = useState<string | null>(
    null,
  );
  const [activeApplication, setActiveApplication] = useState<string | null>(
    null,
  );
  const [activeProductFamily, setActiveProductFamily] = useState<string | null>(
    null,
  );

  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const desktopSearchRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchRef = useRef<HTMLDivElement | null>(null);
  const desktopSearchButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileSearchButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const companyRef = useRef<HTMLDivElement | null>(null);
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
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [searchOpen, isOpen, desktopCompanyOpen]);

  const debouncedSearch = useDebounce(searchTerm, 400);
  const { data: searchResults = [], isFetching } = useSearchProductsQuery(
    debouncedSearch,
    {
      skip: debouncedSearch.length < 2,
    },
  );

  // 🔹 STEP 8 — shared handler
  const handleSearchResultClick = (slug: string) => {
    // route
    router.push(`/products/${slug}`);

    // close search
    setSearchOpen(false);

    // clear input
    setSearchTerm("");

    // close mobile menu if open
    setIsOpen(false);
  };

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
                {/* {socialIcon && (
                  <Image
                    src={socialIcon}
                    alt={icon.image?.alternativeText ?? "icon"}
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                )} */}
                {icon.image?.url && (
                  <Image
                    src={getStrapiImageUrl(icon.image.url)!}
                    alt={icon.image.alternativeText ?? "icon"}
                    width={18}
                    height={18}
                    className="h-4 w-4"
                  />
                )}
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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 outline-none text-sm"
                  />
                  <X
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => setSearchOpen(false)}
                  />
                  {isFetching && (
                    <div className="px-4 py-2 text-sm text-gray-500 bg-white border-t">
                      Searching...
                    </div>
                  )}
                </div>
                {searchResults.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-1 bg-white border shadow-lg max-h-80 overflow-y-auto z-50">
                    {searchResults.map((product: any) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        onClick={() => handleSearchResultClick(product.slug)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 border-b last:border-b-0"
                      >
                        {product.images?.[0]?.url && (
                          <Image
                            src={
                              product.images[0].url.startsWith("http")
                                ? product.images[0].url
                                : `${STRAPI_URL}${product.images[0].url}`
                            }
                            alt={product.name}
                            width={40}
                            height={40}
                            className="rounded object-cover"
                          />
                        )}

                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {product.short_description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
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
              width={96}
              height={96}
              className="h-auto w-16 sm:w-24"
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

            {/* COMPANY */}
            <div ref={companyRef} onPointerDown={(e) => e.stopPropagation()}>
              <button
                onClick={() => {
                  setDesktopCompanyOpen((p) => !p);
                }}
                className="flex items-center gap-1 px-2 lg:px-3 py-2 font-medium text-green-800 cursor-pointer text-sm lg:text-base"
              >
                Company <ChevronDown className="w-4 h-4" />
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 outline-none text-sm"
              />
              <X
                className="w-5 h-5 cursor-pointer"
                onClick={() => setSearchOpen(false)}
              />
              {isFetching && (
                <div className="px-4 py-2 text-sm text-gray-500 bg-white border-t">
                  Searching...
                </div>
              )}
            </div>
            {searchResults.length > 0 && (
              <div className="mt-2 bg-white border shadow-lg max-h-80 overflow-y-auto">
                {searchResults.map((product: any) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={() => handleSearchResultClick(product.slug)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 border-b last:border-b-0"
                  >
                    {product.images?.[0]?.url && (
                      <Image
                        src={
                          product.images[0].url.startsWith("http")
                            ? product.images[0].url
                            : `${STRAPI_URL}${product.images[0].url}`
                        }
                        alt={product.name}
                        width={40}
                        height={40}
                        className="rounded object-cover"
                      />
                    )}

                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {product.short_description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
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
