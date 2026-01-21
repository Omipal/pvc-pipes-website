import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-96 bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
      <Image
        src="/blue-pvc-pipes-background.jpg"
        alt="PVC pipes background"
        fill
        className="object-cover opacity-40 mix-blend-overlay"
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Why PVC Pipe & Fittings?
            </h1>
            <p className="text-gray-200 mb-8 leading-relaxed text-sm">
              Westlake Pipe & Fittings uses superior PVC products, sustainable
              and corrosion-resistant pipe and fittings products that provide
              the reliable water for communities across North America.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
