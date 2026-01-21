"use client";

import { usePathname } from "next/navigation";
import Breadcrumb from "./breadcrumb";

/**
 * Yahan wo routes likho
 * jahan breadcrumb NAHI chahiye
 */
const HIDE_BREADCRUMB_ROUTES = [
  "/", // Home
  "/login",
  "/register",
];

export default function BreadcrumbWrapper() {
  const pathname = usePathname();

  // exact route match
  if (HIDE_BREADCRUMB_ROUTES.includes(pathname)) {
    return null;
  }

  return <Breadcrumb />;
}
