import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  title: string;
  highlight?: string;
}

const SectionTitle: FC<Props> = ({ title, highlight }) => {
  const baseClass = "text-4xl font-semibold tracking-tight sm:text-5xl";
  return (
    <h1 className="gap-x-1 text-center">
      <span className={cn("text-zinc-300", baseClass)}>{title} </span>
      <span
        className={cn(
          "text-brand-400 relative inline-block whitespace-nowrap md:mt-0 md:inline",
          baseClass,
        )}
      >
        {highlight && (
          <span className="bg-brand-200/10 absolute -left-[2.5%] -top-[2.5%] z-0 h-[105%] w-[105%] -rotate-1" />
        )}
        {highlight && highlight}
      </span>
    </h1>
  );
};

export default SectionTitle;
