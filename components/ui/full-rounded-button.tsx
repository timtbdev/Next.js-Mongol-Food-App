import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import React, { FC } from "react";

interface Props {
  title?: string;
  url?: string;
  className?: string;
  emoji?: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

const FullRoundedButton: FC<Props> = ({
  title,
  url,
  emoji,
  Icon,
  className = "",
}) => {
  const content = (
    <>
      <div className="rounded-full bg-zinc-800 p-2">
        {emoji && !Icon && (
          <span className="text-5xl sm:text-7xl">{emoji}</span>
        )}
        {Icon && !emoji && (
          <Icon className="md:text-brand-500 md:group-hover:text-brand-600 size-[26px] text-zinc-400 group-hover:text-white" />
        )}
      </div>
      {title && (
        <div className="ml-2 text-lg font-extrabold text-zinc-400 group-hover:text-white">
          {title}
        </div>
      )}
    </>
  );

  return url ? (
    <Link href={url} className={cn("group mr-4 items-center", className)}>
      {content}
    </Link>
  ) : (
    <div className={cn("group mr-4 items-center", className)}>{content}</div>
  );
};

export default FullRoundedButton;
