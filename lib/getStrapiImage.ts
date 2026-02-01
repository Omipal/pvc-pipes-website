export function getStrapiImage(image: any) {
  if (!image) return null;

  // Case 1: flattened (Applications)
  if (image.url) {
    return image.url.startsWith("http")
      ? image.url
      : `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`;
  }

  // Case 2: media relation (AboutSection)
  const url = image?.data?.attributes?.url;
  if (url) {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
  }

  return null;
}
