import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  emoji: string;
  title: string;
  description: string;
  className?: string;
}

const MobileTableHeading: FC<Props> = ({
  emoji,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "mx-auto flex flex-col items-center gap-x-6 px-2 text-center",
        className,
      )}
    >
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-zinc-800">
        <span className="absolute -left-1 -top-1 text-7xl">{emoji}</span>
      </div>
      <h3 className="mt-2 text-4xl font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-1 text-xl font-medium text-zinc-400">{description}</p>
    </div>
  );
};

export default MobileTableHeading;
