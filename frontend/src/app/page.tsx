import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import CallToAction from "@/components/CallToAction";
import FeaturedJobs from "@/components/FeaturedJobs";
import LatestJobs from "@/components/LatestJobs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-light">
      <Hero />
      <CategorySection />
      <CallToAction />
      <FeaturedJobs />
      <LatestJobs />
      <Footer />
    </main>
  );
}