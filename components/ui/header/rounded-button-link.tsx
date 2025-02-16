import Link from "next/link";
import React, { FC } from "react";

interface Props {
  url: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const RoundedButtonLink: FC<Props> = ({ url, Icon }) => {
  return (
    <Link
      href={url}
      className="group items-center rounded-full bg-zinc-800 p-2"
    >
      <Icon className="md:text-brand-500 md:group-hover:text-brand-600 size-[26px] text-zinc-400 group-hover:text-white" />
    </Link>
  );
};

export default RoundedButtonLink;
