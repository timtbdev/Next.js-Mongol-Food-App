import { cn } from "@/lib/utils";
import { FaRegUserCircle as UserIcon } from "react-icons/fa";

const LoginButton = ({ className }: { className?: string }) => {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={cn(
        "group z-10 flex rounded-full bg-zinc-800 p-2 hover:bg-zinc-700",
        className,
      )}
    >
      <UserIcon className="sm:text-brand-500 sm:group-hover:text-brand-400 grou-hover:text-white size-[26px] text-zinc-400" />
    </button>
  );
};

export default LoginButton;
