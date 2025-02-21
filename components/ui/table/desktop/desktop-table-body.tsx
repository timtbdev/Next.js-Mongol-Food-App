import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const DesktopTableBody: FC<Props> = ({ children }) => {
  return (
    <tbody className="divide-y divide-dark-gray/50 bg-[#22272e]">
      {children}
    </tbody>
  );
};

export default DesktopTableBody;
