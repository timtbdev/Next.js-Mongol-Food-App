import { cn, getMedallionEmoji } from "@/lib/utils";
import { DishType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  category: string;
  dish: DishType;
  className?: string;
}

const MobileTableCard: FC<Props> = ({ category, dish, className = "" }) => {
  return (
    <li
      key={dish.name}
      className={cn(
        "col-span-1 flex flex-col divide-y divide-zinc-700 rounded-lg bg-zinc-800 text-center shadow-sm ring-1 ring-zinc-700",
        className,
      )}
    >
      <p className="flex flex-1 flex-col p-2 text-5xl font-bold text-green-500">
        {getMedallionEmoji(category === "all" ? dish.globalRanking : dish.rank)}
      </p>
      <div className="flex flex-1 flex-col p-2">
        <Image
          alt={dish.name}
          src={dish.photoUrl}
          width={192}
          height={192}
          className="mx-auto size-48"
        />
        <h3 className="mt-2 text-3xl font-semibold text-white/80">
          {dish.name}
        </h3>
        <dl className="mt-2 flex grow flex-col justify-between">
          <dt className="sr-only">Description</dt>
          <dd className="text-md text-zinc-400">{dish.description}</dd>
          <dt className="sr-only">Healthy</dt>
          <dd className="mt-3">
            {dish.health === "light" && (
              <span className="inline-flex items-center rounded-md px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-700">
                Light
              </span>
            )}
            {dish.health === "heavy" && (
              <span className="inline-flex items-center rounded-md px-2 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-700">
                Heavy
              </span>
            )}
            {dish.health === "moderate" && (
              <span className="inline-flex items-center rounded-md px-2 py-1 text-sm font-medium text-yellow-600 ring-1 ring-inset ring-yellow-600">
                Moderate
              </span>
            )}
          </dd>
        </dl>
      </div>
      <div className="mt-4">
        <div className="flex divide-x divide-zinc-700">
          <div className="-ml-px flex w-0 flex-1">
            <p className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-2 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-zinc-400">
              <span className="text-xl">{dish.taste.emoji}</span>
              <span className="text-md text-zinc-400">Taste Level:</span>
              <span className="text-md font-semibold text-zinc-400">
                {dish.taste.level}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-zinc-700">
          <div className="flex w-0 flex-1">
            <p className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-2 rounded-bl-lg border border-transparent py-4">
              <span className="text-xl">{dish.calories.emoji}</span>
              <span className="text-md font-semibold text-zinc-400">
                {dish.calories.kcals}
              </span>
            </p>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <p className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-zinc-400">
              <span className="text-xl">{dish.burnTime.emoji}</span>
              <span className="text-md font-semibold text-zinc-400">
                {dish.burnTime.duration}
              </span>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MobileTableCard;
