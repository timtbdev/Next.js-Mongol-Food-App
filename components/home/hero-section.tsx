import BigButton from "@/components/ui/home/big-button";
import Section from "@/components/ui/home/section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TextLoop } from "../motion/text-loop";

const HeroSection = () => {
  return (
    <Section id="home" className="sm:pb-20">
      <Image
        src="/images/section-image-hero.png"
        alt="Genkhis Khan with Mongolian dishes"
        width={176}
        height={176}
        className="size-44"
      />
      <h1 className="inline-flex flex-col items-center gap-1 text-center leading-none tracking-tight">
        <span className="text-4xl font-bold text-zinc-300 sm:text-5xl md:text-6xl">
          Mongolian{" "}
          <span
            className={cn(
              "relative whitespace-nowrap text-4xl font-bold text-brand-400 sm:text-5xl md:text-6xl",
            )}
          >
            <span className="absolute -left-[2.5%] -top-[2.5%] z-0 h-[105%] w-[105%] -rotate-1 bg-brand-200/10" />{" "}
            Food
            <span
              className={cn(
                "hidden sm:inline-block",
                "text-4xl font-bold text-zinc-300 sm:text-5xl md:text-6xl",
              )}
            >
              🔥
            </span>
          </span>{" "}
        </span>
        <span className="text-3xl font-bold text-zinc-300 sm:mt-3 sm:text-4xl md:text-5xl">
          Eat Like a Warrior! ⚔️
        </span>
      </h1>
      <div className="flex flex-col items-center gap-6">
        <TextLoop interval={3} className="text-2xl font-semibold text-zinc-400">
          <div className="inline-flex items-center gap-2 font-semibold text-zinc-400 sm:text-xl">
            <span className="-rotate-12 text-4xl">🍲</span>
            <span className="text-xl text-zinc-400">Top Mongolian Dishes</span>
          </div>
          <div className="inline-flex items-center gap-2 font-semibold text-zinc-400 sm:text-xl">
            <span className="rotate-12 text-4xl">🍽️</span>
            <span className="text-xl text-zinc-400">Best Restaurants</span>
          </div>
          <div className="inline-flex items-center gap-2 font-semibold text-zinc-400 sm:text-xl">
            <span className="rotate-12 text-4xl">🇲🇳</span>
            <span className="text-xl text-zinc-400">Travel Tips</span>
          </div>
        </TextLoop>
      </div>
      <BigButton title="Check It Out!" url="/dishes/category/all" />
    </Section>
  );
};

export default HeroSection;
