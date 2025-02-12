import { getBaseUrl } from "@/lib/utils";
import { FaGithub, FaSquareRss } from "react-icons/fa6";
import Url from "./url";

const DesktopCopyright = () => {
  const baseClass = "text-md text-zinc-400 hover:text-white tracking-tight";
  return (
    <div className="mx-auto mt-10 hidden max-w-4xl items-center justify-between lg:flex">
      <div className="text-md flex flex-1 justify-start">
        <Url
          title="Source code"
          url="https://github.com/timtbdev/mongol-food"
          icon={<FaGithub size={18} />}
          className={baseClass}
        />
      </div>
      <span className="text-md/5 text-center tracking-tight text-zinc-400">
        © {new Date().getFullYear()} All rights reserved.
      </span>
      <div className="flex flex-1 justify-end">
        <Url
          title="RSS Feed"
          url={getBaseUrl() + "/rss.xml"}
          icon={<FaSquareRss size={18} />}
          className={baseClass}
        />
      </div>
    </div>
  );
};

export default DesktopCopyright;
