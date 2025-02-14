import BigButton from "@/components/ui/home/big-button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const HeroSection = () => {
  const headingBaseClass =
    "text-4xl font-bold text-zinc-300 sm:text-5xl md:text-6xl";
  const listItemClass = "text-zinc-400 text-xl/7 font-semibold sm:text-2xl";

  return (
    <section
      id="hero"
      className="sm:pb-26 relative mx-auto flex w-full flex-col items-center gap-8 py-10 sm:py-20"
    >
      <div className="mx-auto flex w-full flex-col items-center gap-5">
        <h1 className="inline-flex flex-col items-center gap-1 text-center leading-none tracking-tight">
          <span className={headingBaseClass}>
            Mongolian{" "}
            <span
              className={cn(
                "text-brand-400 relative whitespace-nowrap text-4xl font-bold sm:text-5xl md:text-6xl",
              )}
            >
              <span className="bg-brand-200/10 absolute -left-[2.5%] -top-[2.5%] z-0 h-[105%] w-[105%] -rotate-1" />{" "}
              Food
              <span className={cn("hidden sm:inline-block", headingBaseClass)}>
                🔥
              </span>
            </span>{" "}
          </span>
          <span className={headingBaseClass}>before 🏃cardio?</span>
          <span className={headingBaseClass}>Big mistake. 😂</span>
        </h1>

        <div className="flex flex-col items-center gap-6">
          <ul className="text-muted-dark grid gap-3 text-lg/7">
            <li className="text-md flex items-center gap-2 text-zinc-400">
              <Check className="text-brand-500 size-5" />
              <span className={listItemClass}>Craving 🇲🇳Mongolian food?</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-brand-500 size-5" />
              <span className={listItemClass}>Not sure 📍where to eat?</span>
            </li>
          </ul>
        </div>
        <BigButton title="Explore Now" url="/dishes" />
      </div>
    </section>
  );
};

export default HeroSection;
