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
    <PopoverGroup className="hidden max-w-5xl gap-x-5 lg:flex lg:flex-1">
      {menuConfig.map((menuItem: MenuItemType) => (
        <Link
          key={menuItem.title}
          href={menuItem.slug}
          className={cn(
            "relative inline-flex items-center rounded-full px-4 py-1.5 text-base font-semibold ring-1 ring-transparent transition duration-200 active:scale-[96%]",
            {
              "bg-transparent text-zinc-400 hover:bg-zinc-800 hover:text-white":
                currentPath !== menuItem.slug,
              "bg-zinc-800 px-4 text-white": currentPath === menuItem.slug,
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
