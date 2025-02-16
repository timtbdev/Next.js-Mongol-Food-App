import RoundedButtonLink from "@/components/ui/header/rounded-button-link";
import { FaRegUserCircle as UserIcon } from "react-icons/fa";

const LoginButton = () => {
  return <RoundedButtonLink url="/login" Icon={UserIcon} />;
};

export default LoginButton;
