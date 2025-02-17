import MenuEmoji from "@/components/ui/menu/menu-emoji";
import MenuTitle from "@/components/ui/menu/menu-title";
import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import { MenuItemType } from "@/types";
import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import { FC } from "react";

interface Props {
  currentPath: string;
  className?: string;
}

const DesktopNavigationLinks: FC<Props> = ({ currentPath, className }) => {
  return (
    <PopoverGroup className={cn("max-w-5xl gap-x-5", className)}>
      {menuConfig.map((menuItem: MenuItemType) =>
        menuItem.subMenuItems ? (
          <Popover key={menuItem.title} className="relative">
            {() => (
              <>
                <PopoverButton
                  key={menuItem.title}
                  className={cn(
                    "text-md group inline-flex items-center gap-2 rounded-full px-6 py-2 font-semibold",
                    {
                      "hover:border-dark-gray/50 focus: border-2 border-zinc-900 bg-zinc-900 outline-none hover:border-dashed":
                        currentPath !== menuItem.slug,
                      "border-2 border-zinc-800 bg-zinc-800 px-4 text-white":
                        currentPath === menuItem.slug,
                    },
                  )}
                  aria-current={
                    currentPath === menuItem.slug ? "page" : undefined
                  }
                >
                  <MenuEmoji
                    currentPath={currentPath === menuItem.slug}
                    emoji={menuItem.emoji}
                    className="hidden lg:flex"
                  />
                  <MenuTitle
                    currentPath={currentPath === menuItem.slug}
                    title={menuItem.title}
                  />
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in ring-dark-gray absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-zinc-900 p-2 shadow-lg ring-1 transition"
                >
                  {menuItem.subMenuItems?.map((subMenuItem) => (
                    <CloseButton
                      as={Link}
                      key={subMenuItem.title}
                      href={`/dishes/category/${subMenuItem.slug}`}
                      prefetch={true}
                      className="group inline-flex w-full gap-x-2 rounded-lg px-3 py-2 text-lg font-semibold hover:bg-zinc-800"
                    >
                      <span className="text-lg group-hover:scale-125">
                        {subMenuItem.emoji}
                      </span>
                      <span className="text-zinc-400 group-hover:text-white">
                        {subMenuItem.title}
                      </span>
                    </CloseButton>
                  ))}
                </PopoverPanel>
              </>
            )}
          </Popover>
        ) : (
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
            <MenuEmoji
              currentPath={currentPath === menuItem.slug}
              emoji={menuItem.emoji}
              className="hidden lg:flex"
            />
            <MenuTitle
              currentPath={currentPath === menuItem.slug}
              title={menuItem.title}
            />
          </Link>
        ),
      )}
    </PopoverGroup>
  );
};

export default DesktopNavigationLinks;
