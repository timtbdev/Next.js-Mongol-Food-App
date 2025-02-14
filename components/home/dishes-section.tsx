import BigButton from "@/components/ui/home/big-button";
import Card from "@/components/ui/home/card";
import Section from "@/components/ui/home/section";
import SectionSubtitle from "@/components/ui/home/section-subtitle";
import SectionTitle from "@/components/ui/home/section-title";
import { CategoryType } from "@/types";
import { FC } from "react";

interface Props {
  categories: CategoryType[];
}

const DishesSection: FC<Props> = ({ categories }) => {
  const highlightClass = "text-xl font-semibold text-white sm:text-2xl";
  return (
    <div className="border-dark-gray/50 w-full border-y-2 border-dashed bg-black/20">
      <Section id="dishes">
        <SectionTitle title="The Best Mongolian" highlight="dishes" />
        <SectionSubtitle>
          Mongolian food is <span className={highlightClass}>❤️hearty</span>,{" "}
          <span className={highlightClass}>🥩bold</span>, and full of{" "}
          <span className={highlightClass}>🎉surprises!</span>
        </SectionSubtitle>
        <p className="max-w-2xl text-pretty text-center text-xl text-zinc-500 sm:text-2xl"></p>
        <div id="features">
          <div className="mx-auto grid grid-cols-1 gap-6 px-6 sm:w-[80%] sm:grid-cols-2 sm:px-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.slug} category={category} />
            ))}
          </div>
        </div>
        <BigButton title="Find a Dish" url="/dishes" />
      </Section>
    </div>
  );
};

export default DishesSection;
