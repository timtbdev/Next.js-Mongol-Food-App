import DesktopTable from "@/components/ui/table/desktop/desktop-table";
import DesktopTableHead from "@/components/ui/table/desktop/desktop-table-head";
import DesktopTableHeading from "@/components/ui/table/desktop/desktop-table-heading";
import DesktopTableWrapper from "@/components/ui/table/desktop/desktop-table-wrapper";
import {
  generateMetaDataForCategoryDishes,
  getAllDishesByCategory,
  getAllDishesOrderedByGlobalRanking,
  getSingleCategoryForDishes,
} from "@/lib/utils";
import { DishCategoryType } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return generateMetaDataForCategoryDishes(slug);
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const category: DishCategoryType = getSingleCategoryForDishes(slug);
  const dishes =
    slug === "all"
      ? getAllDishesOrderedByGlobalRanking()
      : getAllDishesByCategory(slug);
  if (!dishes || dishes.length === 0) {
    return notFound();
  }
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-2 py-10 sm:px-20 sm:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <DesktopTableHeading
          emoji={category.emoji}
          title={category.title}
          description={category.description}
        />
        <DesktopTableWrapper>
          <DesktopTableHead />
          <DesktopTable slug={slug} dishes={dishes} />
        </DesktopTableWrapper>
      </div>
    </div>
  );
}
