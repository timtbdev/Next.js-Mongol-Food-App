"use client";

import { usePathname } from "next/navigation";
import LoginButton from "./login-button";
import Logo from "./logo";
import DesktopNavigationLinks from "./navigation-links/desktop-navigation-links";
import MobileNavigationLinks from "./navigation-links/mobile-navigation-links";

const Header = () => {
  const path = usePathname();
  const currentPath = `/${path.split("/")[1]}`;
  return (
    <header className="border-dark-gray/50 sticky top-0 z-10 border-b bg-zinc-900 backdrop-blur-lg">
      <nav
        aria-label="Navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-2.5 md:py-5"
      >
        <div className="z-10 flex flex-1 justify-start">
          <Logo />
          <MobileNavigationLinks currentPath={currentPath} />
        </div>
        <DesktopNavigationLinks currentPath={currentPath} />
        <div className="flex flex-1 justify-end">
          <LoginButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
