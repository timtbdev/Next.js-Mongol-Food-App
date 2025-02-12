import menuConfig from "@/config/menu";
import { MenuItemType } from "@/types";
import { Link } from "next-view-transitions";

const NavigationLinks = () => {
  return (
    <nav
      aria-label="Footer"
      className="mx-auto -mb-6 hidden columns-3 gap-x-10 text-center sm:flex sm:justify-center"
    >
      {menuConfig.map((item: MenuItemType) => (
        <div key={item.title} className="pb-6">
          <Link
            href={item.slug}
            className="text-md font-semibold text-zinc-400 hover:text-white"
            prefetch={true}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default NavigationLinks;
