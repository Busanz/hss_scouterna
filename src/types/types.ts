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

type ClubClothes = {
  id: number;
  price: string;
  image: string;
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

export type DepartmentCard = {
  key: string;
  href: string;
  url: string;
};
export type DepartmentType = DepartmentCard[];
export type OmHSSLinksType = OmHSSLinks[];
export type ClubClothesType = ClubClothes[];

export type CategoryType = 'Allt' | 'Policy' | 'Allmänt' | 'Övrigt';

export type FaqItemType = {
  question: string;
  answer: string;
  category: CategoryType;
  showAnswer?: boolean;
};

export type DepartmentIntroType = {
  id: number;
  key: 'sjöhumlor' | 'kaparna' | 'konvojen' | 'utmanare' | 'familjescouting';
  image: string;
  color: string;
  moreDetails?: {
    image: string;
  };
};
