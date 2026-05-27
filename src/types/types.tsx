export type NavLinksType = { label: string; href: string }[];
export type IntroLinksType = { label: string; href: string; url: string }[];

export type QuickLinkType = {
  label: string;
  image: string;
  href: string;
};
export type SocialLinkType = QuickLinkType;

export type ClubClothsType = {
    name: string,
    description: string,
    price: string,
    image: string,
    alt: string,
}