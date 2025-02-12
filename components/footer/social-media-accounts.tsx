import { socialConfigs } from "@/config/social";
import Link from "next/link";
import { FC } from "react";

const SocialMediaAccounts: FC = () => {
  return (
    <div className="mt-8 flex justify-center space-x-6">
      {socialConfigs.map((account) => (
        <Link
          key={account.id}
          href={account.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={account.name}
        >
          <account.icon className="size-5 text-zinc-400 hover:text-white" />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaAccounts;
