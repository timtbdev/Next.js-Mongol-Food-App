import BigButton from "@/components/ui/home/big-button";
import Section from "@/components/ui/home/section";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

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
              "text-brand-400 relative whitespace-nowrap text-4xl font-bold sm:text-5xl md:text-6xl",
            )}
          >
            <span className="bg-brand-200/10 absolute -left-[2.5%] -top-[2.5%] z-0 h-[105%] w-[105%] -rotate-1" />{" "}
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
        <ul className="grid gap-1 text-lg/7">
          <li className="flex items-center gap-2">
            <Check className="text-brand-400" size={24} />
            <div className="inline-flex items-center gap-1 font-medium text-zinc-600 sm:text-xl">
              Top Mongolian <span className="-rotate-12 text-4xl">🍲</span>
              Dishes!
            </div>
          </li>
          <li className="flex items-center gap-2">
            <Check className="text-brand-400" size={24} />
            <div className="inline-flex items-center gap-1 font-medium text-zinc-600 sm:text-xl">
              Best Mongolian <span className="rotate-12 text-4xl">🍽️</span>
              Restaurants!
            </div>
          </li>
        </ul>
      </div>
      <BigButton title="Check It Out!" url="/dishes" />
    </Section>
  );
};

export default HeroSection;
