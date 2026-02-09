import Image from "next/image";
import { Banner } from "../../types/banner";
import { getStrapiImage } from "@/lib/getStrapiImage";

type Props = {
  banner?: Banner;
};

export default function HeroBanner({ banner }: Props) {
  if (!banner) return null;

  const imageUrl = getStrapiImage(banner.image);
  const videoUrl = getStrapiImage(banner.video);

  return (
    <section className="relative min-h-[400px] overflow-hidden">
      {banner.type === "IMAGE" && imageUrl && (
        <Image
          src={imageUrl}
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
        />
      )}

      {banner.type === "VIDEO" && videoUrl && (
        <video
          className="w-full h-full object-cover"
          src={videoUrl}
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
