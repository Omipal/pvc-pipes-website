import { BannerSection } from "./components/banner-section";
import { TabNavigationClient } from "./components/tab-navigation-client";
import { BetterFoundation } from "./components/better-foundation";
import { OurFocus } from "./components/our-focus";
import { WhyPVC } from "./components/why-pvc";
import { OurDifference } from "./components/our-difference";

export default function WhyJpfPage() {
  const tabs = [
    { id: "better-foundation", label: "A Better Foundation™" },
    { id: "our-focus", label: "Our Focus" },
    { id: "why-pvc", label: "Why PVC?" },
    { id: "our-difference", label: "Our Difference" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner Section - Always at top */}
      <BannerSection />

      {/* Tab Navigation - Sticky */}
      <TabNavigationClient tabs={tabs} />

      {/* Content Sections - All on one page */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        <div id="better-foundation" className="scroll-mt-24">
          <BetterFoundation />
        </div>

        <div id="our-focus" className="scroll-mt-24">
          <OurFocus />
        </div>

        <div id="why-pvc" className="scroll-mt-24">
          <WhyPVC />
        </div>

        <div id="our-difference" className="scroll-mt-24">
          <OurDifference />
        </div>
      </main>
    </div>
  );
}
