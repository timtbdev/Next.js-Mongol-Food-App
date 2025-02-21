import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const DesktopTableWrapper: FC<Props> = ({ children }) => {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg border border-dark-gray/50 shadow-sm">
            <table className="min-w-full divide-y divide-dark-gray">
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopTableWrapper;
