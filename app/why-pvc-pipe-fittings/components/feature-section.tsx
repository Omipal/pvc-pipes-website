import Image from "next/image";

interface FeatureSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  isImageRight?: boolean;
}

export function FeatureSection({
  id,
  title,
  subtitle,
  description,
  image,
  buttonText,
  isImageRight = false,
}: FeatureSectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      {/* Section Title */}
      <div className="mb-12 pb-4 border-b-2 border-blue-600">
        <h2 className="text-3xl font-bold text-blue-900">{title}</h2>
      </div>

      {/* Content Grid */}
      <div
        className={`grid md:grid-cols-2 gap-12 items-center ${
          isImageRight ? "auto" : ""
        }`}
      >
        {/* Text Content */}
        <div className={isImageRight ? "md:order-2" : ""}>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">{subtitle}</h3>
          <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-6 py-2 font-medium transition-colors">
            {buttonText}
          </button>
        </div>

        {/* Image */}
        <div className={isImageRight ? "md:order-1" : ""}>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-gray-200">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
