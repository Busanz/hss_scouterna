import type { QuickLinkType, SocialLinkType } from '../types/types';
import type {
  IntroLinksType,
  OmHSSLinksType,
  DepartmentType,
} from '@/types/types';

export const navLinks = [
  { href: '/bli-scout' },
  { href: '/avdelningar' },
  { href: '/om-hss' },
  { href: '/batar' },
  { href: '/kontakta-oss' },
];
export const introLinks: IntroLinksType = [
  { href: '/bli-scout', url: '/img/intro-section/bli_scout.png' },
  { href: '/for-ledare', url: '/img/intro-section/for_ledare.png' },
  { href: '/for-foraldrar', url: '/img/intro-section/for_foraldrar.png' },
  { href: '/avdelningar', url: '/img/intro-section/avdelningar.png' },
  { href: '/lager', url: '/img/intro-section/lager.png' },
  { href: '/om-hss', url: '/img/intro-section/om_hss.png' },
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
  { image: '/img/footer/quicklinks/bliscout.svg', href: '/bli-scout' },
  { image: '/img/footer/quicklinks/avdelningar.svg', href: '/avdelningar' },
  { image: '/img/footer/quicklinks/sjöscout.svg', href: '/om-hss/sjoscout' },
  { image: '/img/footer/quicklinks/förföräldrar.svg', href: '/for-foraldrar' },
  { image: '/img/footer/quicklinks/faq.svg', href: '/faq' },
];

export const socialMediaLinks: SocialLinkType[] = [
  {
    image: '/img/footer/socialmedia/instagram.svg',
    href: 'https://www.instagram.com/hss_scout/',
  },
];

export const departmentLogos: DepartmentType = [
  {
    key: 'sjöhumlor',
    href: '/sjöhumlor_8_9',
    url: '/img/departments/sjöhumlor_8_9.svg',
  },
  {
    key: 'kaparna',
    href: '/kaparna_10_11',
    url: '/img/departments/kaparna_10_11.svg',
  },
  {
    key: 'konvojen',
    href: '/konvojen_12_14',
    url: '/img/departments/konvojen_12_14.svg',
  },

  {
    key: 'utmanare',
    href: '/utmanare_15.svg',
    url: '/img/departments/utmanare_15.svg',
  },
  {
    key: 'familjescouting',
    href: '/familjescouting',
    url: '/img/departments/familjescouting.svg',
  },
];