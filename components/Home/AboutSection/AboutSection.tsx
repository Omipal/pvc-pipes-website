import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { ContentWithImageBlock } from "@/types/content-with-image";
import { getStrapiImage } from "@/lib/getStrapiImage";

type Props = {
  data: ContentWithImageBlock;
};

const AboutSection = ({ data }: Props) => {
  const { heading, content, image, reversed, link } = data;

  const imageUrl = getStrapiImage(image);
  // const altText = image?.data?.attributes?.alternativeText ?? heading;
  const altText =
    image?.data?.attributes?.alternativeText || heading || "Image";

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* IMAGE */}
          <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px]">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={altText}
                fill
                className="object-cover rounded-xl"
              />
            )}
          </div>

          {/* CONTENT */}
          <div>
            <h2>{heading}</h2>

            <div className="prose max-w-none text-gray-700 mb-6">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>

            {link?.href && (
              <a
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
                className="btn-orange inline-flex items-center gap-2"
              >
                {link.label}
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
