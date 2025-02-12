import { Link } from "next-view-transitions";
import { PiBowlFoodDuotone as LogoIcon } from "react-icons/pi";

const Logo = () => {
  return (
    <Link href="/" className="group mr-4 hidden items-center lg:flex">
      <div className="rounded-full bg-zinc-800 p-2">
        <LogoIcon className="group-hover:text-brand-400 text-brand-500 size-6" />
      </div>

      <div className="ml-2 text-lg font-extrabold text-zinc-400 group-hover:text-white">
        Mongol
      </div>
    </Link>
  );
};

export default Logo;
