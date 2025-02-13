import { FC } from "react";
import { PiBowlFoodFill as LogoIcon } from "react-icons/pi";
import FullRoundedButton from "./full-rounded-button";

interface Props {
  className?: string;
}

const LogoButton: FC<Props> = ({ className }) => {
  return (
    <FullRoundedButton title="Mongol" Icon={LogoIcon} className={className} />
  );
};

export default LogoButton;
