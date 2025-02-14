import BigButton from "@/components/ui/home/big-button";
import Card from "@/components/ui/home/card";
import { cn } from "@/lib/utils";
import { CategoryType } from "@/types";
import { FC } from "react";

interface Props {
  categories: CategoryType[];
}

const DishesSection: FC<Props> = ({ categories }) => {
  const headingBaseClass = "text-4xl font-semibold tracking-tight sm:text-5xl";
  return (
    <section
      id="dishes"
      className="border-dark-gray/50 relative mx-auto flex w-full flex-col items-center gap-8 border-y-2 border-dashed bg-black/20 py-10 sm:py-20"
    >
      <h2 className="gap-1 text-center">
        <span className={cn("text-zinc-300", headingBaseClass)}>
          Find the best Mongolian{" "}
        </span>
        <span
          className={cn(
            "text-brand-400 relative inline-block whitespace-nowrap md:mt-0 md:inline",
            headingBaseClass,
          )}
        >
          <span className="bg-brand-200/10 absolute -left-[2.5%] -top-[2.5%] z-0 h-[105%] w-[105%] -rotate-1" />
          dishes
        </span>
      </h2>
      <p className="max-w-2xl text-pretty text-center text-xl text-zinc-500 sm:text-2xl">
        Mongolian food is{" "}
        <span className="text-xl font-semibold text-white sm:text-2xl">
          ❤️hearty
        </span>
        ,{" "}
        <span className="text-xl font-semibold text-white sm:text-2xl">
          🥩bold
        </span>
        , and full of{" "}
        <span className="text-xl font-semibold text-white sm:text-2xl">
          🎉surprises!
        </span>
      </p>
      <div id="features">
        <div className="mx-auto grid grid-cols-1 gap-6 px-6 sm:w-[80%] sm:grid-cols-2 sm:px-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.slug} category={category} />
          ))}
        </div>
      </div>
      <BigButton title="Let's Dive In" url="/dishes" />
    </section>
  );
};

export default DishesSection;
