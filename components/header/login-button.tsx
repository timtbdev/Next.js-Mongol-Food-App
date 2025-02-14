import { cn } from "@/lib/utils";
import { FaRegUserCircle as UserIcon } from "react-icons/fa";
import FullRoundedButton from "./full-rounded-button";

const LoginButton = ({ className }: { className?: string }) => {
  return (
    <FullRoundedButton
      url="/login"
      Icon={UserIcon}
      className={cn("group-hover:text-white", className)}
    />
  );
};

export default LoginButton;
