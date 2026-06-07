type IntroLink = {
  label: string;
  href: string;
  url: string;
  description?: string;
};

type OmHSSLinks = {
  label: string;
  href: string;
  url: string;
};

type ClubCloths = {
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
};

export type IntroLinksType = IntroLink[];

export type NavLinksType = {
  label: string;
  href: string;
}[];

export type QuickLinkType = {
  label: string;
  image: string;
  href: string;
};

export type SocialLinkType = QuickLinkType;

type DepartmentLink = IntroLink & {
  des: string;
};

export type DepartmentType = DepartmentLink[];
export type OmHSSLinksType = OmHSSLinks[];
export type ClubClothsType = ClubCloths[];

export type CategoryType = 'Allt' | 'Policy' | 'Allmänt' | 'Övrigt';

export type FaqItemType = {
  question: string;
  answer: string;
  category: CategoryType;
  showAnswer?: boolean;
}
export type DepartmentIntroType = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  details?: {
    when: string;
    where: string;
    age: string;
    formerName: string;
  };
  color: string;
  moreDetails?: {
    title: string;
    description: string;
    image: string;
  };
};
