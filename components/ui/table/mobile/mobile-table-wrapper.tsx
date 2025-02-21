import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const MobileTableWrapper: FC<Props> = ({ children }) => {
  return (
    <ul className="space-y-6 divide-y divide-zinc-700 py-6">{children}</ul>
  );
};

export default MobileTableWrapper;
