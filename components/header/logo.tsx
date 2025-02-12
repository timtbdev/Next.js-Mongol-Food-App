import { Link } from "next-view-transitions";
import { PiBowlFoodDuotone as LogoIcon } from "react-icons/pi";

const Logo = () => {
  return (
    <Link
      href="/"
      className="group mr-4 hidden items-center text-zinc-400 lg:flex"
    >
      <LogoIcon className="size-8 group-hover:text-white" />
      <div className="text-md ml-2 font-medium group-hover:text-white">
        Mongol
      </div>
    </Link>
  );
};

export default Logo;
