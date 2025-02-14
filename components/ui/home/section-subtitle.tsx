import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const SectionSubtitle: FC<Props> = ({ children, className }) => {
  return (
    <p
      className={cn(
        "max-w-2xl text-pretty text-center text-xl text-zinc-500 sm:text-2xl",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default SectionSubtitle;
