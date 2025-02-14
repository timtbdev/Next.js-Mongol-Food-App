import Underline from "@/icons/underline";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import React, { FC } from "react";

interface Props {
  title: string;
  url: string;
  className?: string;
}

const BigButton: FC<Props> = ({ title, url, className }) => {
  return (
    <div
      className={cn("relative mb-10 flex w-full max-w-xs sm:mb-0", className)}
    >
      <Link
        href={url}
        className="button from-brand-300 to-brand-400 hover:bg-brand-200/75 relative mt-4 inline-flex h-14 w-full cursor-pointer items-center justify-center gap-1.5 rounded-md bg-gradient-to-br px-5 py-2.5 font-semibold text-zinc-800 shadow-xl transition hover:scale-[0.98] active:scale-[0.95]"
      >
        {title}
        <ArrowRightIcon className="size-5" />
      </Link>
      <Underline className="arrow text-dark-gray [.button:hover~&]:text-brand-400 absolute -bottom-12 left-1/2 w-52 -translate-x-1/2 transition-all duration-300 [.button:hover~&]:rotate-3" />
    </div>
  );
};

export default BigButton;
