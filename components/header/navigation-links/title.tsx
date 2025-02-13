import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  currentPath: boolean;
  title: string;
  className?: string;
}

const Title: FC<Props> = ({ currentPath, title, className = "" }) => {
  return (
    <span
      className={cn("text-lg font-semibold", {
        "text-zinc-400 group-hover:text-white": !currentPath,
        "text-white": currentPath,
        className,
      })}
    >
      {title}
    </span>
  );
};

export default Title;
