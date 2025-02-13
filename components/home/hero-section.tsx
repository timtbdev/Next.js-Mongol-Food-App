import Underline from "@/icons/underline";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, Check } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const headingBaseClass =
    "text-4xl font-bold text-zinc-300 sm:text-5xl md:text-6xl";
  const listItemClass = "text-zinc-400 text-xl/7 font-semibold sm:text-2xl";
  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8">
      <div className="mx-auto flex w-full flex-col items-center gap-5 px-4 py-6 md:gap-7 md:px-0 md:py-10">
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
            <li className="flex items-center gap-2">
              <Check className="text-brand-500 size-5" />
              <span className={listItemClass}>Hate 🧳tourist traps?</span>
            </li>
          </ul>
        </div>

        <div className="relative flex w-full max-w-sm">
          <Link
            href="/docs/getting-started/first-steps"
            className="button from-brand-300 to-brand-400 hover:bg-brand-200/75 relative z-10 mt-4 inline-flex h-14 w-full cursor-pointer items-center justify-center gap-1.5 rounded-md bg-gradient-to-br px-5 py-2.5 font-semibold text-zinc-800 shadow-xl transition hover:scale-[0.98] active:scale-[0.95]"
          >
            Take Me to the Food
            <ArrowRightIcon className="size-5" />
          </Link>
          <Underline className="arrow text-dark-gray [.button:hover~&]:text-brand-400 absolute -bottom-12 left-1/2 w-52 -translate-x-1/2 transition-all duration-300 [.button:hover~&]:rotate-3" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
