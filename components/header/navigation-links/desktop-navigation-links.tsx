import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import { MenuItemType } from "@/types";
import { PopoverGroup } from "@headlessui/react";
import { Link } from "next-view-transitions";
import { FC } from "react";

interface Props {
  currentPath: string;
}

const DesktopNavigationLinks: FC<Props> = ({ currentPath }) => {
  return (
    <PopoverGroup className="hidden max-w-5xl gap-x-5 sm:flex">
      {menuConfig.map((menuItem: MenuItemType) => (
        <Link
          key={menuItem.title}
          href={menuItem.slug}
          className={cn(
            "text-md items-center rounded-full px-6 py-2 font-semibold",
            {
              "hover:border-dark-gray/50 border-2 border-zinc-900 bg-zinc-900 text-zinc-400 hover:border-dashed hover:text-white":
                currentPath !== menuItem.slug,
              "border-2 border-zinc-800 bg-zinc-800 px-4 text-white":
                currentPath === menuItem.slug,
            },
          )}
          aria-current={currentPath === menuItem.slug ? "page" : undefined}
          prefetch={true}
        >
          {menuItem.title}
        </Link>
      ))}
    </PopoverGroup>
  );
};

export default DesktopNavigationLinks;
