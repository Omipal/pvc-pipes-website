import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Oswald } from "next/font/google";
import "./globals.css";

import Header from "@/components/Helper/Header/Header";
import { BreadcrumbProvider } from "@/components/Helper/BreadcrumbContext";
import BreadcrumbWrapper from "@/components/Helper/BreadcrumbWrapper";
import Footer from "@/components/Helper/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

import { getGlobal } from "@/lib/getGlobal";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ApexPipe - Building America's Future",
  description:
    "Premium water pipes and plumbing solutions for residential and industrial applications",
  keywords: [
    "PVC pipes",
    "Pipe Company",
    "Water Pipes",
    "plumbing",
    "industrial plumbing",
    "residential pipes",
    "construction pipes",
    "water pipe solutions",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 🔥 Global data fetch
  const global = await getGlobal();

  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${oswald.variable} ${geistSans.variable} ${geistMono.variable} font-open-sans antialiased bg-white text-[#67737e] leading-1.5`}
      >
        <Header headerData={global.header} topnavData={global.topnav} />
        <BreadcrumbProvider>
          <BreadcrumbWrapper />
          <main>{children}</main>
        </BreadcrumbProvider>
        <Footer footerData={global.footer} />
        <ScrollToTop />
      </body>
    </html>
  );
}
