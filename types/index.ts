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
