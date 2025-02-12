import menuConfig from "@/config/menu";
import { cn } from "@/lib/utils";
import {
  CloseButton,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { FC } from "react";

interface Props {
  currentPath: string;
}

const MobileNavigationLinks: FC<Props> = ({ currentPath }) => {
  return (
    <Popover className="lg:hidden">
      {({ open, close }) => (
        <>
          <PopoverButton
            className="transiton group relative inset-px z-10 inline-flex rounded-md bg-transparent p-2 focus:outline-none"
            aria-label="Toggle site navigation"
          >
            <div className="group flex size-6 items-center justify-center hover:text-white">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.5 w-5 bg-current text-zinc-400 transition-transform duration-500 ease-in-out group-hover:text-white",
                  { "rotate-45": open },
                  { "-translate-y-1.5": !open },
                )}
              ></span>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.5 w-5 bg-current text-zinc-400 transition-transform duration-500 ease-in-out group-hover:text-white",
                  { "opacity-0": open },
                )}
              ></span>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.5 w-5 bg-current text-zinc-400 transition-transform duration-500 ease-in-out group-hover:text-white",
                  { "-rotate-45": open },
                  { "translate-y-1.5": !open },
                )}
              ></span>
            </div>
          </PopoverButton>
          <AnimatePresence initial={false}>
            {open && (
              <>
                <PopoverBackdrop
                  static
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-0 bg-zinc-900 backdrop-blur-lg"
                />
                <PopoverPanel
                  static
                  as={motion.div}
                  initial={{ opacity: 0, y: -32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: -32,
                    transition: { duration: 0.2 },
                  }}
                  className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl px-6 pb-10 pt-20"
                >
                  <ul className="space-y-4">
                    {menuConfig.map((menuItem) => (
                      <li key={menuItem.slug}>
                        <CloseButton
                          as={Link}
                          href={menuItem.slug}
                          className={`${
                            currentPath === menuItem.slug
                              ? "bg-zinc-800 text-white"
                              : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                          } text-md/5 group flex rounded-full px-6 py-4 font-semibold tracking-tight`}
                          onClick={close}
                        >
                          {menuItem.title}
                        </CloseButton>
                      </li>
                    ))}
                  </ul>
                </PopoverPanel>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
};

export default MobileNavigationLinks;
