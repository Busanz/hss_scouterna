import type { QuickLinkType, SocialLinkType } from '../types/types';
import type {
  NavLinksType,
  IntroLinksType,
  OmHSSLinksType,
  DepartmentType,
} from '@/types/types';

export const navLinks: NavLinksType = [
  {
    label: 'Bli scout',
    href: '/bli-scout',
  },
  {
    label: 'Avdelningar',
    href: '/avdelningar',
  },
  {
    label: 'Om HSS',
    href: '/om-hss',
  },
  {
    label: 'Båtar',
    href: '/batar',
  },
  {
    label: 'Kontakta oss',
    href: '/kontakta-oss',
  },
];

export const introLinks: IntroLinksType = [
  {
    label: 'Bli scout',
    href: '/bli-scout',
    url: '/img/intro-section/bli_scout.png',
    description: 'Upplev äventyr, segling och nya vänner välkommen till HSS!',
  },
  {
    label: 'För ledare',
    href: '/for-ledare',
    url: '/img/intro-section/for_ledare.png',
    description: 'Resurser och utbildning för dig som leder vår verksamhet.',
  },
  {
    label: 'För föräldrar',
    href: '/for-foraldrar',
    url: '/img/intro-section/for_foraldrar.png',
    description: 'Information till dig vars barn är med i HSS.',
  },
  {
    label: 'Avdelningar',
    href: '/avdelningar',
    url: '/img/intro-section/avdelningar.png',
    description:
      'Spårare, upptäckare, äventyrare och utmanare hitta rätt avdelning.',
  },
  {
    label: 'Läger',
    href: '/lager',
    url: '/img/intro-section/lager.png',
    description: 'Hajker och läger i naturen och Stockholms skärgård.',
  },
  {
    label: 'Om HSS',
    href: '/om-hss',
    url: '/img/intro-section/om_hss.png',
    description: 'Lär känna Hässelby Strands Sjöscoutkår och vår historia.',
  },
];

export const omHSSLinks: OmHSSLinksType = [
  {
    label: 'Sjöscout',
    href: 'om-hss//sjoscout',
    url: '/img/om-HSS-section/sjoscout.png',
  },
  {
    label: 'Kläder & Utrustning',
    href: '/om-hss/klader-utrustning',
    url: '/img/om-HSS-section/klader_utrustning.png',
  },
  {
    label: 'Stadgar & Protokoll',
    href: '/om-hss/stadgar-protokoll',
    url: '/img/om-HSS-section/stadgar_protokoll.png',
  },
];

export const quickLinks: QuickLinkType[] = [
  {
    label: 'Bli scout',
    image: '/img/footer/quicklinks/bliscout.svg',
    href: '/bli-scout',
  },

  {
    label: 'Avdelningar',
    image: '/img/footer/quicklinks/avdelningar.svg',
    href: '/avdelningar',
  },
  {
    label: 'Sjöscout',
    image: '/img/footer/quicklinks/sjöscout.svg',
    href: '/om-hss/sjoscout',
  },
  {
    label: 'För föräldrar',
    image: '/img/footer/quicklinks/förföräldrar.svg',
    href: '/for-foraldrar',
  },
  { label: 'FAQ', image: '/img/footer/quicklinks/faq.svg', href: '/faq' },
];

export const socialMediaLinks: SocialLinkType[] = [
  {
    label: 'Instagram',
    image: '/img/footer/socialmedia/instagram.svg',
    href: 'https://www.instagram.com/hss_scout/',
  },
];
export const departmentLogos: DepartmentType = [
  {
    label: 'Sjöhumlor',
    href: '/sjöhumlor_8_9',
    url: '/img/departments/sjöhumlor_8_9.svg',
    des: 'Spårare 8-9 år',
  },
  {
    label: 'Kaparna',
    href: '/kaparna_10_11',
    url: '/img/departments/kaparna_10_11.svg',
    des: 'Upptäckare 10-11 år',
  },
  {
    label: 'Konvojen',
    href: '/konvojen_12_14',
    url: '/img/departments/konvojen_12_14.svg',
    des: 'Äventyrare 12-14 år',
  },

  {
    label: 'Utmanare',
    href: '/utmanare_15.svg',
    url: '/img/departments/utmanare_15.svg',
    des: ' Utmanare 15-18',
  },
  {
    label: 'Familjescouting',
    href: '/familjescouting',
    url: '/img/departments/familjescouting.svg',
    des: 'Barn under 8 år',
  },
];
