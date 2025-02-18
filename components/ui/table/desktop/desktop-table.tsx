import { getMedallionEmoji } from "@/lib/utils";
import { DishType } from "@/types";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  slug: string;
  dishes: DishType[];
}

const DesktopTable: FC<Props> = ({ slug, dishes }) => {
  return (
    <tbody className="divide-dark-gray/50 divide-y bg-[#22272e]">
      {dishes.map((dish, index) => {
        return (
          <tr key={index}>
            <td className="whitespace-nowrap p-4 text-center text-3xl font-semibold text-green-500">
              {getMedallionEmoji(
                slug === "all" ? dish.globalRanking : dish.rank,
              )}
            </td>
            <td className="justify-start whitespace-nowrap py-4">
              <div className="flex items-center px-4">
                <span className="text-3xl">{dish.dishEmoji}</span>
                <div className="ml-4">
                  <Link
                    href={dish.wikipedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-500 text-lg font-semibold text-white underline underline-offset-4"
                  >
                    {dish.name}
                  </Link>
                  <div className="text-md mt-1 max-w-xs whitespace-normal text-zinc-400">
                    {dish.description}
                  </div>
                </div>
              </div>
            </td>
            <td className="text-md whitespace-nowrap p-4 text-center font-medium text-white">
              <span className="text-lg">{dish.taste.emoji}</span>
              {dish.taste.level}
            </td>
            <td className="text-md whitespace-nowrap p-4 text-center font-medium text-white">
              {dish.health === "light" && (
                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700">
                  Light
                </span>
              )}
              {dish.health === "heavy" && (
                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700">
                  Heavy
                </span>
              )}
              {dish.health === "moderate" && (
                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-yellow-600 ring-1 ring-inset ring-yellow-600">
                  Moderate
                </span>
              )}
            </td>
            <td className="text-md whitespace-nowrap p-4 text-center font-medium text-white">
              <span className="text-xl">{dish.calories.emoji}</span>
              {dish.calories.kcals}
            </td>
            <td className="text-md whitespace-nowrap p-4 text-center font-medium text-white">
              <span className="text-xl">{dish.burnTime.emoji}</span>
              {dish.burnTime.duration}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default DesktopTable;
