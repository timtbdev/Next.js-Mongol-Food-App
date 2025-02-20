import AboutSection from "@/components/home/about-section";
import HeroSection from "@/components/home/hero-section";
import { RestaurantSection } from "@/components/home/restaurant-section";
import TopDishesSection from "@/components/home/top-dishes-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <HeroSection />
      <TopDishesSection />
      <RestaurantSection />
      <AboutSection />
    </div>
  );
}
