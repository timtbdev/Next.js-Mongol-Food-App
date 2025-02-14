import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  title: string;
  className?: string;
}

const Disclaimer: FC<Props> = ({ title, className = "" }) => {
  return (
    <p
      className={cn(
        "text-md border-dark-gray/50 rounded-full border-2 border-dashed px-4 py-2 text-center text-zinc-400",
        className,
      )}
    >
      {title}
    </p>
  );
};

export default Disclaimer;
