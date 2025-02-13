import { FeatureDishes } from "@/components/home/features/feature-dishes";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <HeroSection />
      <FeatureDishes />
    </div>
  );
}
