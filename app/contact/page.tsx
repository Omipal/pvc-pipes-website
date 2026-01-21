// import React from "react";
// import HeroBanner from "../../components/Helper/HeroBanner";
// import ContactSection from "./components/ContactSection";

// const ContactPage = () => {
//   return (
//     <>
//       <HeroBanner />
//       <ContactSection />
//     </>
//   );
// };

// export default ContactPage;
import HeroBanner from "../../components/Helper/HeroBanner";
import { ContactPageClient } from "./components/contact-page-client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <HeroBanner />
      <ContactPageClient />
    </>
  );
}
