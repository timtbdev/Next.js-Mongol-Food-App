import { CategoryType } from "@/types";
import { Link } from "next-view-transitions";
import { FC } from "react";

export type Props = {
  category: CategoryType;
};

const Card: FC<Props> = ({ category }) => {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="hover:border-dark-gray/50 group rounded-xl border-2 border-dashed border-black/20 bg-black/20 p-6 transition duration-150 ease-in-out hover:bg-black/40"
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center rounded-full bg-black/20 text-6xl duration-150 ease-in-out group-hover:rotate-3 group-hover:scale-125">
          {category.emoji}
        </div>

        <h3 className="mb-2 mt-4 text-center text-lg font-semibold text-zinc-400">
          {category.category}
        </h3>
        <p className="text-center text-sm text-zinc-500">
          {category.description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
