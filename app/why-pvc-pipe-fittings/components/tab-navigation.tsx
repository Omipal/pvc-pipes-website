"use client";

import { useState, useEffect } from "react";

interface TabNavigationProps {
  features: Array<{ id: string; title: string }>;
}

export function TabNavigation({ features }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(features[0].id);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all feature sections
    features.forEach((feature) => {
      const element = document.getElementById(feature.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [features]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex overflow-x-auto gap-1">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => handleTabClick(feature.id)}
              className={`py-4 px-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === feature.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
