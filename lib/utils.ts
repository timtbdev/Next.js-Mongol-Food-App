import { allDishes } from "@/config/all-dishes";
import categoriesForDishes from "@/config/dish-categories";
import seoConfig from "@/config/seo";
import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBaseUrl(path: string = "") {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
      : process.env.NEXT_PUBLIC_WEB_URL || "https://timtb.dev";

  return `${baseUrl}${path}`;
}

// Dishes: Generate Metadata for a category of dishes
export async function generateMetaDataForCategoryDishes(
  slug: string,
): Promise<Metadata> {
  const category = getSingleCategoryForDishes(slug);

  if (!category) {
    throw new Error(`No category found for slug: ${slug}`);
  }

  return {
    title: `Mongolian Food | ${category.title}`,
    description:
      category.description.slice(0, 100) + ("..." as string) ||
      "Mongolian dishes",
    keywords: category.seoKeywords?.join(", ") || "Mongolian, dishes",
    openGraph: {
      title: `Mongolian Food | ${category.title}`,
      description: category.description.slice(0, 100) + ("..." as string),
      images: seoConfig.ogImage || undefined,
      type: "article",
      url: getBaseUrl(`/dishes/category/${slug}`),
    },
    twitter: {
      card: "summary_large_image",
      title: `Mongolian Food | ${category.title}`,
      description: category.description.slice(0, 100) + ("..." as string),
      images: seoConfig.twitterImage || undefined,
    },
  };
}

// Dishes: Get a single category of dishes
export function getSingleCategoryForDishes(slug: string) {
  const category = categoriesForDishes.find(
    (category) => category.slug === slug,
  );

  if (!category) {
    throw new Error(`No category found for slug: ${slug}`);
  }

  return category;
}

export function getAllDishesByCategory(slug: string) {
  return allDishes.filter((dish) => dish.category === slug);
}

export function getAllDishesOrderedByGlobalRanking() {
  return allDishes.sort((a, b) => a.globalRanking - b.globalRanking);
}

// Dishes: Get a medallion emoji for a rank
export function getMedallionEmoji(rank: number) {
  switch (rank) {
    case 1:
      return "🥇";
    case 2:
      return "🥈";
    case 3:
      return "🥉";
    default:
      return rank;
  }
}
