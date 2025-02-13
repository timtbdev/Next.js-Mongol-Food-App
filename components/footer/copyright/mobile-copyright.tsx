import { getBaseUrl } from "@/lib/utils";
import { FaGithub, FaSquareRss } from "react-icons/fa6";
import Url from "./url";

const MobileCopyright = () => {
  const baseClass = "text-md text-zinc-400 hover:text-white tracking-tight";
  return (
    <div className="lg:hidden">
      <div className="mx-auto mt-10 flex max-w-4xl justify-center gap-x-2">
        <Url
          title="Source code"
          url="https://github.com/timtbdev/mongol-food"
          icon={<FaGithub size={18} />}
          className={baseClass}
        />
        <span> | </span>
        <Url
          title="RSS Feed"
          url={getBaseUrl("rss.xml")}
          icon={<FaSquareRss size={18} />}
          className={baseClass}
        />
      </div>
      <div className="text-md/5 mx-auto mt-6 flex max-w-4xl justify-center text-center tracking-tight text-zinc-400">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  );
};

export default MobileCopyright;
