import DesktopTable from "@/components/ui/table/desktop/desktop-table";
import DesktopTableBody from "@/components/ui/table/desktop/desktop-table-body";
import DesktopTableHead from "@/components/ui/table/desktop/desktop-table-head";
import DesktopTableHeading from "@/components/ui/table/desktop/desktop-table-heading";
import DesktopTableWrapper from "@/components/ui/table/desktop/desktop-table-wrapper";
import MobileTableCard from "@/components/ui/table/mobile/mobile-table-card";
import MobileTableHeading from "@/components/ui/table/mobile/mobile-table-heading";
import MobileTableWrapper from "@/components/ui/table/mobile/mobile-table-wrapper";
import {
  generateMetaDataForCategoryDishes,
  getAllCategories,
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

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category: DishCategoryType) => ({
    slug: category.slug,
  }));
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
      {/* Desktop table view */}
      <div className="hidden w-full max-w-6xl flex-col px-4 sm:px-6 md:flex lg:px-8">
        <DesktopTableHeading
          emoji={category.emoji}
          title={category.title}
          description={category.description}
        />
        <DesktopTableWrapper>
          <DesktopTableHead />
          <DesktopTableBody>
            {dishes.map((dish, index) => (
              <DesktopTable
                key={`${dish.name}-${index}`}
                category={slug}
                dish={dish}
              />
            ))}
          </DesktopTableBody>
        </DesktopTableWrapper>
      </div>
      {/* Mobile table view */}
      <div className="block px-4 py-6 md:hidden">
        <MobileTableHeading
          emoji={category.emoji}
          title={category.title}
          description={category.description}
        />
        <MobileTableWrapper>
          {dishes.map((dish, index) => (
            <MobileTableCard
              key={`${dish.name}-${index}`}
              category={slug}
              dish={dish}
            />
          ))}
        </MobileTableWrapper>
      </div>
    </div>
  );
}
