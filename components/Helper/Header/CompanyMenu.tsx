"use client";

import Link from "next/link";

export default function CompanyMenu({ sections, close }: any) {
  return (
    <div className="absolute left-0 top-full w-full bg-white border-t shadow-xl z-50">
      <div className="container mx-auto px-16 py-8">
        <div className="grid grid-cols-2 gap-20">
          {sections.map((section: any) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold border-b pb-2 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link: any) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className="text-sm text-gray-700 hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
