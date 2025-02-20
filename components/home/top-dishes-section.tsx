import BigButton from "@/components/ui/home/big-button";
import Card from "@/components/ui/home/card";
import Section from "@/components/ui/home/section";
import SectionSubtitle from "@/components/ui/home/section-subtitle";
import SectionTitle from "@/components/ui/home/section-title";
import { getTopDishesByGlobalRanking } from "@/lib/utils";
import { DishType } from "@/types";
import Image from "next/image";

const TopDishesSection = () => {
  const dishes: DishType[] = getTopDishesByGlobalRanking(6);
  return (
    <div className="w-full border-y-2 border-dashed border-dark-gray/50 bg-black/20">
      <Section id="dishes" className="sm:pb-20">
        <Image
          src="/images/section-image-dishes.png"
          alt="Genkhis Khan with Mongolian dishes"
          width={176}
          height={176}
          className="size-44"
        />
        <SectionTitle title="Top Mongolian" highlight="dishes" />
        <SectionSubtitle>
          We’ve gathered the best Mongolian recipes for you to try!
        </SectionSubtitle>
        <p className="max-w-2xl text-pretty text-center text-xl text-zinc-500 sm:text-2xl"></p>
        <div id="features">
          <div className="mx-auto grid grid-cols-1 gap-6 px-6 sm:w-[80%] sm:grid-cols-2 sm:px-2 lg:grid-cols-3">
            {dishes.map((dish) => (
              <Card key={dish.slug} dish={dish} />
            ))}
          </div>
        </div>
        <BigButton title="Learn More" url="/dishes/category/all" />
      </Section>
    </div>
  );
};

export default TopDishesSection;
