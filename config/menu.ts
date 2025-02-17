import { MenuItemType } from "@/types"; // Menu Configuration
import dishesCategoryConfig from "./dish-categories";

const menuConfig: MenuItemType[] = [
  {
    emoji: "✨",
    title: "Home",
    slug: "/",
  },
  {
    emoji: "🔥",
    title: "Dishes",
    slug: "/dishes",
    subMenuItems: dishesCategoryConfig,
  },
  {
    emoji: "👨‍🍳",
    title: "Restaurants",
    slug: "/restaurants",
  },
  {
    emoji: "📝",
    title: "Blog",
    slug: "/blog",
  },
];

export default menuConfig;
