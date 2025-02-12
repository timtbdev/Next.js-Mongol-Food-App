import { Link } from "next-view-transitions";
import { PiBowlFoodDuotone as LogoIcon } from "react-icons/pi";

const Logo = () => {
  return (
    <Link href="/" className="group mr-4 hidden items-center lg:flex">
      <div className="rounded-full bg-zinc-800 p-2">
        <LogoIcon className="group-hover:text-brand-500 text-brand-700 size-6" />
      </div>

      <div className="text-md ml-2 font-medium text-zinc-400 group-hover:text-white">
        Mongol
      </div>
    </Link>
  );
};

export default Logo;
