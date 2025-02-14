import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}

const Section: FC<Props> = ({ id, children, className }) => {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-2 py-10 sm:px-20 sm:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
