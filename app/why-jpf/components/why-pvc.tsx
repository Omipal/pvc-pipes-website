import Image from "next/image";

export function WhyPVC() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="border-b-2 border-blue-600 pb-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
          Why PVC?
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="relative h-64 sm:h-80">
          <Image
            src="/images/image.png"
            alt="Blue PVC pipes"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-900">
            PVC: An Ideal Choice for Infrastructure
          </h2>
          <p className="text-gray-700 leading-relaxed">
            PVC is among the world's most sustainable materials, making it ideal
            for long-term use in underground infrastructure products. It's
            efficient, lightweight, non-toxic, and corrosion-resistant and
            features a design life of 100+ years. Additionally, related PVC
            products like PVCO require up to 40% less material to produce than
            traditional PVC, helping to further reduce the material's
            environmental impact.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-blue-900 mb-4 text-center">
            Energy to Produce
          </h3>
          <div className="flex items-end justify-around h-32 gap-2">
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-8 bg-yellow-200"
                style={{ height: "85px" }}
              ></div>
              <span className="text-xs text-gray-600">Concrete</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 bg-gray-300" style={{ height: "45px" }}></div>
              <span className="text-xs text-gray-600">Iron</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 bg-blue-600" style={{ height: "25px" }}></div>
              <span className="text-xs text-gray-600">PVC</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-blue-900 mb-4 text-center">
            Break Rate per 100 miles
          </h3>
          <div className="flex items-end justify-around h-32 gap-2">
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-8 bg-yellow-200"
                style={{ height: "75px" }}
              ></div>
              <span className="text-xs text-gray-600">Concrete</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 bg-gray-300" style={{ height: "60px" }}></div>
              <span className="text-xs text-gray-600">Iron</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 bg-blue-600" style={{ height: "15px" }}></div>
              <span className="text-xs text-gray-600">PVC</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-bold text-blue-900 mb-4 text-center">
            Repair Cost per 100 miles
          </h3>
          <div className="flex items-end justify-around h-32 gap-2">
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-8 bg-yellow-200"
                style={{ height: "80px" }}
              ></div>
              <span className="text-xs text-gray-600">Concrete</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 bg-gray-300" style={{ height: "60px" }}></div>
              <span className="text-xs text-gray-600">Iron</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 bg-blue-600" style={{ height: "8px" }}></div>
              <span className="text-xs text-gray-600">PVC</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 text-center">
        Source: Uni-bell PVC Pipe Association
      </p>
    </section>
  );
}
