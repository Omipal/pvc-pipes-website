import { ApplicationCard } from "@/types/application";

export default function PowerClient({ card }: { card: ApplicationCard }) {
  return (
    <section className="min-h-screen">
      <div className="container py-10">
        <h1 className="text-3xl font-bold">{card.title}</h1>
        <p className="mt-4 text-gray-600">{card.description}</p>
      </div>
    </section>
  );
}
