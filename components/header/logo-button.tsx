import FullRoundedButton from "@/components/ui/full-rounded-button";
import { FC } from "react";
import { PiBowlFoodFill as LogoIcon } from "react-icons/pi";

interface Props {
  className?: string;
}

const LogoButton: FC<Props> = ({ className }) => {
  return (
    <FullRoundedButton
      title="Mongol"
      url="/"
      Icon={LogoIcon}
      className={className}
    />
  );
};

export default LogoButton;
