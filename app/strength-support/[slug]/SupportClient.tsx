import { ApplicationCard } from "@/types/application";

export default function SupportClient({ card }: { card: ApplicationCard }) {
  return (
    <section className="min-h-screen">
      <div className="container py-10">
        <h1 className="text-3xl font-bold text-blue-900 capitalize">
          {card.title}
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl">{card.description}</p>
      </div>
    </section>
  );
}
