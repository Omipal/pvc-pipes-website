import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

type Props = {
  banner?: {
    type: "IMAGE" | "VIDEO";
    image?: { url: string };
    video?: { url: string };
  };
};

export default function HeroBanner({ banner }: Props) {
  if (!banner) return null;

  return (
    <section className="relative min-h-[400px] overflow-hidden">
      {banner.type === "IMAGE" && banner.image && (
        <Image
          src={`${STRAPI_URL}${banner.image.url}`}
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
        />
      )}

      {banner.type === "VIDEO" && banner.video && (
        <video
          className="w-full h-full object-cover"
          src={`${STRAPI_URL}${banner.video.url}`}
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,58,96,0.9)] to-transparent" />
    </section>
  );
}
