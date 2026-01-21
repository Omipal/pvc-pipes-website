import Link from "next/link";

export const dynamic = "force-dynamic";

const eventDetails: Record<string, any> = {
  "ngwa-2025": {
    title: "NGWA 2025",
    date: "December 10-11, 2025",
    categories: ["Trade Show", "Water Well"],
    heroImage: "/water-well-pvc-pipe-products.jpg",
    description:
      "Visit Westlake Pipe & Fittings at booth 1813 and find out how we're providing efficient PVC piping solutions.",
  },

  "ia-show-2025": {
    title: "IA Show 2025",
    date: "December 10-11, 2025",
    categories: ["Trade Show", "Agriculture & Irrigation"],
    heroImage: "/agricultural-irrigation-pipes.jpg",
    description:
      "Visit Westlake Pipe & Fittings at booth 1118 and ask about our broad agriculture & irrigation solutions.",
  },

  "nastt-nodig-2025": {
    title: "NASTT No-Dig North 2025",
    date: "October 27-29, 2025",
    categories: ["Trade Show", "Municipal"],
    heroImage: "/municipal-no-dig-trenchless-pipes.jpg",
    description:
      "Visit Westlake Pipe & Fittings at booth 206 and learn about municipal trenchless solutions.",
  },

  "equip-expo-2025": {
    title: "Equip Exposition 2025",
    date: "October 22-24, 2025",
    categories: ["Trade Show", "Agriculture & Irrigation"],
    heroImage: "/equipment-exposition-agricultural.jpg",
    description:
      "As the industry leader, explore our innovative manufactured piping solutions.",
  },

  "psp-deck-expo": {
    title: "PSP / Deck Expo 2025",
    date: "October 22-24, 2025",
    categories: ["Trade Show", "Pool & Spa"],
    heroImage: "/pool-spa-equipment-expo.jpg",
    description:
      "Meet our experts and explore Pool & Spa PVC piping innovations.",
  },

  "wwa-2025": {
    title: "WWA 2025",
    date: "October 21-22, 2025",
    categories: ["Trade Show", "Pool & Spa"],
    heroImage: "/water-pool-association.jpg",
    description:
      "Visit Westlake Pipe & Fittings at booth 836 and meet our team.",
  },
};

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ IMPORTANT FIX
  const event = eventDetails[id];

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-2xl font-bold mb-4">Event not found</h1>
          <Link href="/events" className="text-blue-600 underline">
            Back to events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <img
            src={event.heroImage}
            alt={event.title}
            className="w-full h-72 object-cover rounded-lg"
          />

          <div>
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <p className="text-gray-500 mb-4">{event.date}</p>

            <div className="flex gap-2 mb-6">
              {event.categories.map((cat: string) => (
                <span
                  key={cat}
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded"
                >
                  {cat}
                </span>
              ))}
            </div>

            <p className="text-gray-600 mb-6">{event.description}</p>

            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
