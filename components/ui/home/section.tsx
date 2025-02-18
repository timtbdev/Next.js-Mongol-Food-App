import { InView } from "@/components/motion/in-view";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}

const Section: FC<Props> = ({ id, children, className }) => {
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px -200px 0px" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <section
        id={id}
        className={cn(
          "relative mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-2 py-10 sm:px-20",
          className,
        )}
      >
        {children}
      </section>
    </InView>
  );
};

export default Section;
