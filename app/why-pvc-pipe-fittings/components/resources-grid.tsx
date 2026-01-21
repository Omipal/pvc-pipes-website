export function ResourcesGrid() {
  const resources = [
    {
      title: "Water Main Break Report",
      description:
        "Read more about support asset management for pipeline renewal and replacement with an in-depth analysis of 400,000 water mains in the U.S. Canada.",
      link: "#",
    },
    {
      title: "Lifecycle Assessment of PVC",
      description:
        "Learn more about the life cycle assessment of PVC water & sewer pipe and a comparative analysis of pipe materials.",
      link: "#",
    },
    {
      title: "PVCO Supplement for Lifecycle Assessment",
      description:
        "Explore the life cycle assessment of PVCO products as compared to PVC.",
      link: "#",
    },
    {
      title: "Environmental Product Declaration",
      description:
        "Discover the low environmental impact of PVC pressure and non pressure pipe & fittings.",
      link: "#",
    },
    {
      title: "Water Main Break Clock",
      description:
        "Explore the financial impact of water main breaks & corrosion across North America.",
      link: "#",
    },
    {
      title: "Earth by John Holden",
      description:
        "Watch John Holden and Andrew Oswago highlight the sustainability of PVC pipe and fittings.",
      link: "#",
    },
  ];

  return (
    <section className="py-12">
      {/* Section Title */}
      <div className="mb-12 pb-4 border-b-2 border-blue-600">
        <h2 className="text-3xl font-bold text-blue-900">Resources</h2>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="border-l-4 border-blue-600 pl-4 hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-blue-900 mb-2 text-sm">
              {resource.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {resource.description}
            </p>
            <a
              href={resource.link}
              className="text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center gap-2"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
