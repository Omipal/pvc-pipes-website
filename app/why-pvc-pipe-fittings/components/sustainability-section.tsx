export function SustainabilitySection() {
  const charts = [
    {
      title: "Energy to Produce",
      bars: [
        { label: "Concrete", height: "85px", color: "bg-yellow-300" },
        { label: "Iron", height: "45px", color: "bg-gray-400" },
        { label: "PVC", height: "25px", color: "bg-blue-600" },
      ],
    },
    {
      title: "Average break rate per 100 miles",
      bars: [
        { label: "Concrete", height: "75px", color: "bg-yellow-300" },
        { label: "Iron", height: "60px", color: "bg-gray-400" },
        { label: "PVC", height: "15px", color: "bg-blue-600" },
      ],
    },
    {
      title: "Average repair cost per 100 miles",
      bars: [
        { label: "Concrete", height: "80px", color: "bg-yellow-300" },
        { label: "Iron", height: "60px", color: "bg-gray-400" },
        { label: "PVC", height: "8px", color: "bg-blue-600" },
      ],
    },
  ];

  return (
    <section className="py-12">
      {/* Section Title */}
      <div className="mb-12 pb-4 border-b-2 border-blue-600">
        <h2 className="text-3xl font-bold text-blue-900">PVC Sustainability</h2>
      </div>

      {/* Sustainability Points */}
      <div className="mb-12 space-y-4">
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold flex-shrink-0">•</span>
            <span>
              <strong>Sustainable PVC</strong> is not only among the world's
              most sustainable products. It also requires less energy and fewer
              resources to manufacture than steel technology materials.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold flex-shrink-0">•</span>
            <span>
              <strong>Durable PVC</strong> is a long-lasting material featuring
              a design life of up to 100+ years, reducing the need for frequent
              system replacements.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold flex-shrink-0">•</span>
            <span>
              <strong>Cost Effective:</strong> The durability and longevity of
              PVC help reduce maintenance and replacement costs, while
              innovative installation techniques and increased hydraulic flow
              rates.
            </span>
          </li>
        </ul>
      </div>

      {/* Charts Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {charts.map((chart) => (
          <div
            key={chart.title}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200"
          >
            <h3 className="font-bold text-blue-900 text-center mb-8 text-sm">
              {chart.title}
            </h3>
            <div className="flex items-end justify-around h-40 gap-4">
              {chart.bars.map((bar) => (
                <div
                  key={bar.label}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className={`w-10 ${bar.color} rounded-sm`}
                    style={{ height: bar.height }}
                  ></div>
                  <span className="text-xs text-gray-600 text-center">
                    {bar.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 text-center mt-6">
        Source: Uni-bell PVC Pipe Association
      </p>
    </section>
  );
}
