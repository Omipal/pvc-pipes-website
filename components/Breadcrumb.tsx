"use client";

import Link from "next/link";
import { useAppSelector } from "@/store/hooks";

export default function Breadcrumb() {
  const items = useAppSelector((state) => state.breadcrumb.items);

  // Landing / empty breadcrumb → कुछ मत दिखाओ
  if (!items || items.length <= 1) return null;

  return (
    <nav className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-green-700">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-gray-900">{item.label}</span>
            )}
            {index < items.length - 1 && <span>›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
