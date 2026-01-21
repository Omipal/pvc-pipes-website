const focusItems = [
  {
    icon: "⚙️",
    title: "System Solutions",
    description:
      "Westlake Pipe & Fittings provides both the pipe and fittings needed to create innovative, holistic system solutions with the right joint type for your project or application.",
  },
  {
    icon: "🔗",
    title: "Connectivity",
    description:
      "We believe that as our products connect to create an ecosystem of liquid flow, do too must our teams work to connect with our customers through superior expertise and service, resources, calculators and tools.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    description:
      "Our communities are precious. We aim to create PVC products that reduce waste and can allow for more sustainable and healthier communities for generations to come.",
  },
];

export function OurFocus() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="border-b-2 border-blue-600 pb-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
          Our Focus
        </h1>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-lg">
        Westlake Pipe & Fittings proudly supports contractors and engineers
        through our three strategic pillars:
      </p>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {focusItems.map((item) => (
          <div
            key={item.title}
            className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">
                {item.icon}
              </div>
              <h3 className="font-bold text-blue-900">{item.title}</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
