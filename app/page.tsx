import AboutSection from "@/components/home/about-section";
import DishesSection from "@/components/home/dishes-section";
import HeroSection from "@/components/home/hero-section";
import { RestaurantSection } from "@/components/home/restaurant-section";
import dishesCategoryConfig from "@/config/dish-categories";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <HeroSection />
      <DishesSection categories={dishesCategoryConfig} />
      <RestaurantSection />
      <AboutSection />
    </div>
  );
}
