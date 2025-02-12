import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  title: string;
  url: string;
  icon: React.ReactNode;
  className?: string;
}

const Url: FC<Props> = ({ title, url, icon, className = "" }) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex items-center gap-1.5", className)}
    >
      {icon}
      {title}
    </Link>
  );
};

export default Url;
