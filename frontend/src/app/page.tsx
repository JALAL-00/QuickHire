import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import CallToAction from "@/components/CallToAction";
import FeaturedJobs from "@/components/FeaturedJobs";

export default function Home() {
  return (
    <main className="min-h-screen bg-light">
      <Hero />
      <CategorySection />
      <CallToAction />
      <FeaturedJobs />
    </main>
  );
}