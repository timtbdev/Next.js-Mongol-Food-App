import { IconType } from "react-icons/lib";

export type SeoType = {
  title: string;
  subTitle: string;
  ogImage: string;
  twitterImage: string;
  author: {
    name: string;
    twitterUrl: string;
    twitterAddress: string;
    email: string;
  };
  description: string;
  tags: Array<string>;
};

export type SocialItemType = {
  id: number;
  name: string;
  username?: string;
  href: string;
  icon: IconType;
  tooltip: string;
};

export type MenuItemType = {
  emoji: string;
  title: string;
  slug: string;
  subMenuItems?: Array<SubMenuItemType>;
};
export type SubMenuItemType = {
  title: string;
  slug: string;
  emoji: string;
  description?: string;
  seoKeywords?: Array<string>;
};

export interface DishType {
  name: string;
  slug: string;
  description: string;
  calories: {
    kcals: number;
    emoji: string;
  };
  burnTime: {
    duration: string;
    emoji: string;
  };
  dishEmoji: string;
  taste: {
    level: string;
    emoji: string;
  };
  health: string;
  rank: number;
  globalRanking: number;
  category: string;
  wikipedia: string;
  photoUrl: string;
}
export type DishCategoryType = {
  title: string;
  slug: string;
  emoji: string;
  description: string;
  seoKeywords: Array<string>;
};
