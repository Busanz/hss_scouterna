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

export type IntroLinksType = {
  href: string;
  url: string;
}[];

export type NavLinksType = {
  href: string;
}[];

export type QuickLinkType = {
  image: string;
  href: string;
};

export type SocialLinkType = QuickLinkType;
export type TranslatedQuickLinkType = QuickLinkType & { label: string };
export type TranslatedSocialLinkType = SocialLinkType & { label: string };

type DepartmentLink = IntroLink & {
  des: string;
};

export type DepartmentType = DepartmentLink[];
export type OmHSSLinksType = OmHSSLinks[];
export type ClubClothsType = ClubCloths[];

export type CategoryType = "All" | "Policy" | "General" | "Other";

export type FaqItemType = {
  question: string;
  answer: string;
  category: CategoryType;
  showAnswer?: boolean;
};
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
