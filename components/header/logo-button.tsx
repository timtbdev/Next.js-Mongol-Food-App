import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { FC } from "react";

interface Props {
  className?: string;
}

const LogoButton: FC<Props> = ({ className }) => {
  return (
    <Link
      href="/"
      className={cn("group flex inline-flex items-center gap-2", className)}
    >
      <Image
        src="/images/logo.png"
        alt="Mongolian Food Logo"
        width={176}
        height={176}
        className="ring-brand-600 size-10 rounded-full bg-zinc-800 ring-1"
      />
      <span className="text-lg font-bold text-zinc-400 group-hover:text-white">
        Mongol
      </span>
    </Link>
  );
};

export default LogoButton;
