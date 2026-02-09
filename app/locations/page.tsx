// import { getPageBySlug } from "@/lib/getPageBySlug";
// import HeroBanner from "@/components/Helper/HeroBanner";
// import LocationsFromStrapi from "./components/LocationsFromStrapi";
// import { Banner } from "@/types/banner";

// export default async function LocationsPage() {
//   const page = await getPageBySlug("location");

//   if (!page) return null;

//   const bannerBlock = page.blocks?.find(
//     (b): b is Banner => b.__component === "blocks.banner",
//   );

//   // locations block
//   const block = page.blocks?.find(
//     (b: any) => b.__component === "blocks.locations",
//   );

//   return (
//     <>
//       <HeroBanner banner={bannerBlock} />
//       <LocationsFromStrapi block={block} />
//     </>
//   );
// }

// import { getLocationTypes } from "@/lib/getLocationTypes";
// import { getPageBySlug } from "@/lib/getPageBySlug";
// import HeroBanner from "@/components/Helper/HeroBanner";
// import LocationsFromStrapi from "./components/LocationsFromStrapi";
// import { LocationsBlock } from "@/types/location";
// import { Banner } from "@/types/banner";
// export default async function LocationsPage() {
//   const page = await getPageBySlug("location");
//   const locationTypes = await getLocationTypes();

//   if (!page) return null;
//   const bannerBlock = page.blocks?.find(
//     (b): b is Banner => b.__component === "blocks.banner",
//   );

//   const locationsBlock = page.blocks?.find(
//     (b): b is LocationsBlock => b.__component === "blocks.locations",
//   );

//   return (
//     <>
//       <HeroBanner banner={bannerBlock} />
//       {locationsBlock && (
//         <LocationsFromStrapi
//           block={locationsBlock}
//           locationTypes={locationTypes}
//         />
//       )}
//     </>
//   );
// }

// import { getPageBySlug } from "@/lib/getPageBySlug";
// import HeroBanner from "@/components/Helper/HeroBanner";
// import LocationsFromStrapi from "./components/LocationsFromStrapi";
// import { Banner } from "@/types/banner";

// export default async function LocationsPage() {
//   const page = await getPageBySlug("location");

//   if (!page) return null;

//   const bannerBlock = page.blocks?.find(
//     (b): b is Banner => b.__component === "blocks.banner",
//   );

//   // locations block
//   const block = page.blocks?.find(
//     (b: any) => b.__component === "blocks.locations",
//   );

//   return (
//     <>
//       <HeroBanner banner={bannerBlock} />
//       <LocationsFromStrapi block={block} />
//     </>
//   );
// }

// import { getLocationTypes } from "@/lib/getLocationTypes";
// import { getPageBySlug } from "@/lib/getPageBySlug";
// import HeroBanner from "@/components/Helper/HeroBanner";
// import LocationsFromStrapi from "./components/LocationsFromStrapi";
// import { LocationsBlock } from "@/types/location";
// import { Banner } from "@/types/banner";
// export default async function LocationsPage() {
//   const page = await getPageBySlug("location");
//   const locationTypes = await getLocationTypes();

//   if (!page) return null;
//   const bannerBlock = page.blocks?.find(
//     (b): b is Banner => b.__component === "blocks.banner",
//   );

//   const locationsBlock = page.blocks?.find(
//     (b): b is LocationsBlock => b.__component === "blocks.locations",
//   );

//   return (
//     <>
//       <HeroBanner banner={bannerBlock} />
//       {locationsBlock && (
//         <LocationsFromStrapi
//           block={locationsBlock}
//           locationTypes={locationTypes}
//         />
//       )}
//     </>
//   );
// }

import { getLocationTypes } from "@/lib/getLocationTypes";
import { getPageBySlug } from "@/lib/getPageBySlug";
import HeroBanner from "@/components/Helper/HeroBanner";
import LocationsFromStrapi from "./components/LocationsFromStrapi";
import { Banner } from "@/types/banner";
import { LocationsBlock } from "@/types/location";

export default async function LocationsPage() {
  const page = await getPageBySlug("location");
  const locationTypes = await getLocationTypes();

  if (!page) return null;

  const bannerBlock = page.blocks?.find(
    (b): b is Banner => b.__component === "blocks.banner",
  );

  const locationsBlock = page.blocks?.find(
    (b): b is LocationsBlock => b.__component === "blocks.locations",
  );

  return (
    <>
      <HeroBanner banner={bannerBlock} />
      {locationsBlock && (
        <LocationsFromStrapi
          block={locationsBlock}
          locationTypes={locationTypes}
        />
      )}
    </>
  );
}
