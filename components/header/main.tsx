"use client";

import { usePathname } from "next/navigation";
import LoginButton from "./login-button";
import LogoButton from "./logo-button";
import DesktopNavigationLinks from "./navigation-links/desktop-navigation-links";
import MobileNavigationLinks from "./navigation-links/mobile-navigation-links";

const Header = () => {
  const path = usePathname();
  const currentPath = `/${path.split("/")[1]}`;
  return (
    <header className="border-dark-gray/50 sticky top-0 z-10 border-y-2 border-dashed bg-zinc-900 backdrop-blur-lg">
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
          <LoginButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
