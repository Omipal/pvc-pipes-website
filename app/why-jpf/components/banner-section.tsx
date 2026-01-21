import Image from "next/image";

export function BannerSection() {
  const showVideo = true; // Toggle between image and video

  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 to-blue-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden bg-black">
          {showVideo ? (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Westlake Pipe & Fittings"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <Image
              src="/images/image.png"
              alt="Westlake Pipe & Fittings banner"
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
