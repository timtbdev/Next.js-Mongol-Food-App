import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { FC } from "react";
import { PiBowlFoodFill as LogoIcon } from "react-icons/pi";

interface Props {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => {
  return (
    <Link href="/" className={cn("group mr-4 items-center", className)}>
      <div className="rounded-full bg-zinc-800 p-2">
        <LogoIcon className="group-hover:text-brand-400 text-brand-500 size-[28px]" />
      </div>

      <div className="ml-2 text-lg font-extrabold text-zinc-400 group-hover:text-white">
        Mongol
      </div>
    </Link>
  );
};

export default Logo;
