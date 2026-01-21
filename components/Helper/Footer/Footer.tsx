import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type FooterProps = {
  footerData: {
    logo: {
      label: string;
      href: string;
      isExternal: boolean;
      image: {
        url: string;
        alternativeText: string | null;
      };
    };

    description: string;

    navitems: {
      id: number;
      label: string;
      href: string;
      isExternal: boolean;
    }[];

    contactLinks: {
      id: number;
      label: string;
      href: string;
      isExternal: boolean;
      image: {
        url: string;
        alternativeText: string | null;
      };
    }[];

    companyText: string;

    list: {
      id: number;
      text: string;
    }[];

    copyrighttext: string;
  };
};

const productLinks = [
  "PVC & CPVC Pressure Pipes",
  "Gravity Sewer Pipes",
  "Ductile Iron Pipes",
  "PE/HDPE Pipes",
  "Polypropylene Pipes",
  "Fittings & Accessories",
  "View All Products",
];

const toolboxLinks = [
  "Product Catalogs",
  "Technical Data Sheets",
  "CAD Drawings",
  "Installation Guides",
  "Specifications",
  "Design Calculators",
  "Literature Library",
];

const newsItems = [
  { date: "Nov 15, 2024", title: "ApexPipe wins Infrastructure Award" },
  { date: "Oct 28, 2024", title: "New manufacturing facility opens" },
  { date: "Oct 10, 2024", title: "Sustainability report released" },
];

export default function Footer({ footerData }: FooterProps) {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

  const logoUrl = footerData.logo.image.url.startsWith("http")
    ? footerData.logo.image.url
    : `${STRAPI_URL}${footerData.logo.image.url}`;
  return (
    <footer className="pt-8 md:pt-10 lg:pt-14 bg-[#18212b]">
      {/* Main Footer */}
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 pb-8 md:pb-10 lg:pb-14">
          {/* Logo */}
          <div className="col-span-1">
            <Link href="/">
              <Image
                src={logoUrl}
                alt={footerData.logo.image.alternativeText ?? "Footer Logo"}
                width={80}
                height={80}
                className="h-16 md:h-20 lg:h-24 w-auto invert brightness-0 filter"
              />
            </Link>
            <p className="text-left text-gray-300 text-sm mt-4 max-w-sm sm:max-w-md">
              {footerData.description}
            </p>
          </div>
          {/* Product & Resource Center */}
          <div className="col-span-1">
            <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
              Product & Resource Center
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerData.navitems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    className="text-xs sm:text-sm hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineer's Toolbox */}
          <div className="col-span-1">
            <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
              Engineer's Toolbox
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerData.navitems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    className="text-xs sm:text-sm hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* News & Events */}
          <div className="col-span-1">
            <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
              News & Events
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {newsItems.map((item) => (
                <li key={item.title}>
                  <span className="text-[10px] sm:text-xs text-[#00a35a] block mb-1">
                    {item.date}
                  </span>
                  <Link
                    href="#"
                    className="text-xs sm:text-sm hover:text-[#00a35a] transition-colors leading-tight block text-[rgb(179,191,204)]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3 flex-col leading-5">
                {footerData.contactLinks.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    className="flex items-start gap-3 text-white"
                  >
                    <Image
                      src={`${STRAPI_URL}${item.image.url}`}
                      alt={item.image.alternativeText ?? item.label}
                      width={18}
                      height={18}
                    />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
                <Link
                  href="https://www.facebook.com/"
                  className="text-footer-text hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="https://x.com/"
                  className="text-footer-text hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  className="text-footer-text hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/"
                  className="text-footer-text hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  className="text-footer-text hover:text-[#00a35a] transition-colors text-[rgb(179,191,204)]"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgba(179,191,204,0.2)] py-4 sm:py-6">
        <div className="container">
          <div className="flex flex-col items-center gap-4 sm:gap-3 md:flex-row md:justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="font-display text-lg sm:text-xl font-bold text-white">
                JM<span className="text-[#00a35a]"> Eagle</span>
              </span>
              <span className="text-[10px] sm:text-xs text-[rgba(179,191,204,0.6)]">
                {footerData.companyText}
              </span>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
              {footerData.list.map((item) => (
                <li
                  key={item.id}
                  className="text-[10px] sm:text-xs text-[rgba(179,191,204,0.6)] uppercase tracking-wide"
                >
                  {item.text}
                </li>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-[10px] sm:text-xs text-[rgba(179,191,204,0.6)]">
              {footerData.copyrighttext}
            </p>
          </div>
        </div>
      </div>

      {/* Accent bar */}
      <div className="h-1 bg-[#00a35a]" />
    </footer>
  );
}
