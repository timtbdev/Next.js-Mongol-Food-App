import BigButton from "@/components/ui/home/big-button";
import Section from "@/components/ui/home/section";
import { cn } from "@/lib/utils";
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
              "relative whitespace-nowrap text-4xl font-bold text-brand-400 sm:text-5xl md:text-6xl",
            )}
          >
            <span className="absolute -left-[2.5%] -top-[2.5%] z-0 h-[105%] w-[105%] -rotate-1 bg-brand-200/10" />{" "}
            Food
            <span className="items-center text-4xl font-bold text-zinc-300 sm:text-5xl md:text-6xl">
              🔥
            </span>
          </span>{" "}
        </span>
      </h1>
      <h2 className="mx-auto text-center">
        <span className="text-2xl font-semibold text-zinc-300 md:text-3xl">
          Discover and enjoy authentic Mongolian food
        </span>
      </h2>
      <BigButton title="Explore Now" url="/dishes/category/all" />
    </Section>
  );
};

export default HeroSection;
