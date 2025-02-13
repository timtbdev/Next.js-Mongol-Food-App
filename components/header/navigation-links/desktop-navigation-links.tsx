import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import { MenuItemType } from "@/types";
import { PopoverGroup } from "@headlessui/react";
import { Link } from "next-view-transitions";
import { FC } from "react";
import Emoji from "./emoji";
import Title from "./title";

interface Props {
  currentPath: string;
  className?: string;
}

const DesktopNavigationLinks: FC<Props> = ({ currentPath, className }) => {
  return (
    <PopoverGroup className={cn("max-w-5xl gap-x-5", className)}>
      {menuConfig.map((menuItem: MenuItemType) => (
        <Link
          key={menuItem.title}
          href={menuItem.slug}
          className={cn(
            "text-md group inline-flex items-center gap-2 rounded-full px-6 py-2 font-semibold",
            {
              "hover:border-dark-gray/50 border-2 border-zinc-900 bg-zinc-900 hover:border-dashed":
                currentPath !== menuItem.slug,
              "border-2 border-zinc-800 bg-zinc-800 px-4 text-white":
                currentPath === menuItem.slug,
            },
          )}
          aria-current={currentPath === menuItem.slug ? "page" : undefined}
          prefetch={true}
        >
          <Emoji
            currentPath={currentPath === menuItem.slug}
            emoji={menuItem.emoji}
            className="hidden lg:flex"
          />
          <Title
            currentPath={currentPath === menuItem.slug}
            title={menuItem.title}
          />
        </Link>
      ))}
    </PopoverGroup>
  );
};

export default DesktopNavigationLinks;
