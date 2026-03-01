import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-light">
      <Hero />
      <CategorySection />
    </main>
  );
}