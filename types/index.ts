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
};

export type CategoryType = {
  category: string;
  slug: string;
  emoji: string;
  description: string;
};

export type DishType = {
  name: string;
  slug: string;
  description: string;
  calories: { kcals: number; emoji: string };
  burnTime: { duration: string; emoji: string };
  dishEmoji: string;
  taste: {
    level: string;
    emoji: string;
  };
  health: string;
  rank: string;
  wikipedia: string;
  photoUrl: string;
};
