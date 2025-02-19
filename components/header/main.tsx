"use client";

import { useReadingProgress } from "@/hooks/userReadingProgress";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import LogoButton from "./logo-button";
import DesktopNavigationLinks from "./navigation-links/desktop-navigation-links";
import MobileNavigationLinks from "./navigation-links/mobile-navigation-links";
import SearchButton from "./search-button";

const Header = () => {
  const path = usePathname();
  const currentPath = `/${path.split("/")[1]}`;
  const completion = useReadingProgress();
  return (
    <header className="sticky top-0 z-10 border-y-2 border-dashed border-dark-gray/50 bg-zinc-900 backdrop-blur-lg">
      <nav
        aria-label="Navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:px-6 md:py-5"
      >
        <div className="z-10 flex flex-1 justify-start">
          <LogoButton className="hidden md:flex" />
          <MobileNavigationLinks
            currentPath={currentPath}
            className="md:hidden"
          />
        </div>
        <DesktopNavigationLinks
          currentPath={currentPath}
          className="hidden md:flex"
        />

        <div className="flex flex-1 justify-end">
          <SearchButton />
        </div>
      </nav>
      <motion.span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bottom-0 h-[2px] w-full bg-gradient-to-tl from-brand-500/50 to-brand-900/50"
        animate={{ transform: `translateX(${completion - 100}%)` }}
        transition={{ duration: 0.5 }}
      />
    </header>
  );
};

export default Header;
