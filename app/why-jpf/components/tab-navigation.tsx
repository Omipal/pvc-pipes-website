"use client";

interface TabNavigationProps {
  activeTab: string;
  onTabClick: (tabId: string) => void;
  tabs: Array<{ id: string; label: string }>;
}

export function TabNavigation({
  activeTab,
  onTabClick,
  tabs,
}: TabNavigationProps) {
  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 sm:gap-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabClick(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-all ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
