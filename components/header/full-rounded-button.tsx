import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import React, { FC } from "react";

interface Props {
  title?: string;
  className?: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const FullRoundedButton: FC<Props> = ({ title, Icon, className = "" }) => {
  return (
    <Link href="/" className={cn("group z-10 mr-4 items-center", className)}>
      <div className="rounded-full bg-zinc-800 p-2">
        <Icon className="md:text-brand-500 md:group-hover:text-brand-600 grou-hover:text-white size-[26px] text-zinc-400" />
      </div>

      {title && (
        <div className="ml-2 text-lg font-extrabold text-zinc-400 group-hover:text-white">
          {title}
        </div>
      )}
    </Link>
  );
};

export default FullRoundedButton;
