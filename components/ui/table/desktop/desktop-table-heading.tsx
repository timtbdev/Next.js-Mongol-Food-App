import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  emoji: string;
  title: string;
  description: string;
  className?: string;
}

const DesktopTableHeading: FC<Props> = ({
  emoji,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn("flex items-center gap-x-6 px-2", className)}>
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
        <span className="absolute -left-1 -top-1 text-7xl">{emoji}</span>
      </div>
      <div>
        <h3 className="text-4xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        <p className="text-xl font-medium text-zinc-400">{description}</p>
      </div>
    </div>
  );
};

export default DesktopTableHeading;
