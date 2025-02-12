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
  title: string;
  slug: string;
};
