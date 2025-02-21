import { DishType } from "@/types";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { FC } from "react";

export type Props = {
  dish: DishType;
};

const Card: FC<Props> = ({ dish }) => {
  return (
    <Link
      href={`/dishes/detail/${dish.slug}`}
      className="group rounded-xl border-2 border-dashed border-black/20 bg-black/20 p-6 transition duration-150 ease-in-out hover:border-dark-gray/50 hover:bg-black/40"
    >
      <div className="flex flex-col items-center">
        <Image
          src={dish.photoUrl}
          alt={dish.name}
          width={128}
          height={128}
          className="size-40 sm:size-32"
        />
        <h3 className="mb-2 mt-4 text-center text-3xl font-semibold text-zinc-400 group-hover:text-white sm:text-2xl">
          {dish.name}
        </h3>
        <p className="sm:text-md text-center text-lg text-zinc-500">
          {dish.description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
