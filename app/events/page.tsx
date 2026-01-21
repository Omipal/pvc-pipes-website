import Link from "next/link";

const events = [
  {
    id: "ngwa-2025",
    title: "NGWA 2025",
    date: "December 10-11, 2025",
    categories: ["Trade Show", "Water Well"],
    description:
      "Visit Westlake Pipe & Fittings at booth 1813 and find out how we're...",
    status: "Past Event",
    image: "/water-well-pvc-pipe-products.jpg",
  },
  {
    id: "ia-show-2025",
    title: "IA Show 2025",
    date: "December 10-11, 2025",
    categories: ["Trade Show", "Agriculture & Irrigation"],
    description:
      "Visit Westlake Pipe & Fittings at booth 1118 and ask about our broad...",
    status: "Past Event",
    image: "/agricultural-irrigation-pipes.jpg",
  },
  {
    id: "nastt-nodig-2025",
    title: "NASTT No-Dig North 2025",
    date: "October 27-29, 2025",
    categories: ["Trade Show", "Municipal"],
    description:
      "Visit Westlake Pipe & Fittings at booth 206 and find out how we're...",
    status: "Past Event",
    image: "/municipal-no-dig-trenchless-pipes.jpg",
  },
  {
    id: "equip-expo-2025",
    title: "Equip Exposition 2025",
    date: "October 22-24, 2025",
    categories: ["Trade Show", "Agriculture & Irrigation"],
    description:
      "As the industry leader and innovator of manufactured siding joints...",
    status: "Past Event",
    image: "/equipment-exposition-agricultural.jpg",
  },
  {
    id: "psp-deck-expo",
    title: "PSP/Deck Expo 2025",
    date: "October 22-24, 2025",
    categories: ["Trade Show", "Pool & Spa"],
    description:
      "Visit Westlake Pipe & Fittings at booth 2037 and talk to an expert on...",
    status: "Past Event",
    image: "/pool-spa-equipment-expo.jpg",
  },
  {
    id: "wwa-2025",
    title: "WWA 2025",
    date: "October 21-22, 2025",
    categories: ["Trade Show", "Pool & Spa"],
    description:
      "Visit Westlake Pipe & Fittings at booth 836 to meet our team and...",
    status: "Past Event",
    image: "/water-pool-association.jpg",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground">Events</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Featured Events */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Featured Events
          </h2>
          <div className="border-b border-border pb-8"></div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Past Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="overflow-hidden bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="relative w-full h-48 bg-muted">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                    {event.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h12a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {event.date}
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.categories.map((category) => (
                      <span
                        key={category}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={`/events/${event.id}`}
                    className="text-primary hover:text-accent font-semibold text-sm inline-flex items-center gap-1"
                  >
                    Explore Event
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
