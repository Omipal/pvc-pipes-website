export function BetterFoundation() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="border-b-2 border-blue-600 pb-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
          Creating A Better Foundation™
        </h1>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-900">
            Impacting Communities Across North America
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Now more than ever, communities need better solutions to
            infrastructure challenges. It's time for updated systems—reinvented
            using sustainable materials & the latest technology and engineered
            to last for generations. Westlake Pipe & Fittings is proud to
            highlight the PVC pipe and fittings systems that make up A Better
            Foundation™, the foundation that connects us all.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-2 font-medium transition-colors">
            Explore our A Better Foundation™ Projects
          </button>
        </div>

        <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="A Better Foundation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
