import FullRoundedButton from "@/components/ui/full-rounded-button";
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
      <FullRoundedButton emoji={emoji} />
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
