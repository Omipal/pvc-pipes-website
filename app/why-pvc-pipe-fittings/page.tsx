import { HeroSection } from "./components/hero-section";
import { TabNavigation } from "./components/tab-navigation";
import { FeatureSection } from "./components/feature-section";
import { SustainabilitySection } from "./components/sustainability-section";
import { ProductSection } from "./components/product-section";
import { ResourcesGrid } from "./components/resources-grid";

export const metadata = {
  title: "Why PVC Pipe & Fittings | Westlake Pipe & Fittings",
  description:
    "Discover why PVC pipe and fittings are the ideal choice for your infrastructure projects.",
};

const features = [
  {
    id: "lightweight",
    title: "Lightweight & Cost-Effective",
    subtitle: "The Industry's Modern Material Solution",
    description:
      "PVC is not only one of the world's most sustainable materials, but it's also lighter to handle and less expensive to transport than ductile iron.",
    image: "/construction-workers-with-pvc-pipes.jpg",
    buttonText: "Read More",
  },
  {
    id: "lasting",
    title: "Long-Lasting Materials",
    subtitle: "Designed to Last For 100+ Years",
    description:
      "PVC is a reliable material. When properly designed and installed, PVC products can last 100 years—and that's a conservative estimate.",
    image: "/city-infrastructure-aerial-view.jpg",
    buttonText: "Read More",
  },
  {
    id: "corrosion",
    title: "Corrosion-Resistant & Non-Toxic",
    subtitle: "Designed to Protect Water Quality",
    description:
      "PVC is corrosion-resistant & non-toxic, which helps prevent tuberculosis (tuberculosed ductile iron pipe pictured) and encrustation, ensuring the PVC pipe and fittings maintain the maximum flow. Additionally, Westlake Pipe & Fittings PVC products do not adversely affect the taste or color of potable water.",
    image: "/underground-water-pipes-soil.jpg",
    buttonText: "Read More",
  },
];

export default function WhyPVCPipePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Tab Navigation */}
      <TabNavigation features={features} />

      {/* Features Sections */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {features.map((feature) => (
          <FeatureSection
            key={feature.id}
            {...feature}
            isImageRight={features.indexOf(feature) % 2 === 1}
          />
        ))}

        {/* Sustainability Section */}
        <SustainabilitySection />

        {/* Product Section */}
        <ProductSection />

        {/* Resources Grid */}
        <ResourcesGrid />
      </main>
    </div>
  );
}
