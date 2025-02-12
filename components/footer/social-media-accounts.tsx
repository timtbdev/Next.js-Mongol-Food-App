import { socialConfigs } from "@/config/social";
import Link from "next/link";
import { FC } from "react";

const getIconClass = (name: string): string => {
  switch (name) {
    case "Twitter":
      return "h-5 w-5 text-zinc-500 transition-colors duration-100 ease-in-out hover:text-sky-500 dark:text-zinc-400 dark:hover:text-sky-500";
    case "GitHub":
      return "h-5 w-5 text-zinc-500 transition-colors duration-100 ease-in-out hover:text-black dark:text-zinc-400 dark:hover:text-white";
    case "Facebook":
      return "h-5 w-5 text-zinc-500 transition-colors duration-100 ease-in-out hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-600";
    case "LinkedIn":
      return "h-5 w-5 text-zinc-500 transition-colors duration-100 ease-in-out hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-500";
    default:
      return "h-5 w-5 text-zinc-500 transition-colors duration-100 ease-in-out hover:text-blue-600 dark:text-zinc-400 dark:hover:text-brand-500";
  }
};

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
          <account.icon className={getIconClass(account.name)} />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaAccounts;
