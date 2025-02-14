import AboutSection from "@/components/home/about-section";
import DishesSection from "@/components/home/dishes-section";
import HeroSection from "@/components/home/hero-section";
import { RestaurantSection } from "@/components/home/restaurant-section";
import categoryConfig from "@/config/category";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <HeroSection />
      <DishesSection categories={categoryConfig} />
      <RestaurantSection />
      <AboutSection />
    </div>
  );
}
