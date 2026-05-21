import type { QuickLinkType, SocialLinkType } from '../types/types';

import type { NavLinksType, IntroLinksType } from '@/types/types';

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
    label: 'Året i HSS',
    href: '/aret-i-hss',
  },
  {
    label: 'Om HSS',
    href: '/om-hss',
  },
  {
    label: 'Kontakta oss',
    href: '/kontakta-oss',
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
];

export const quickLinks: QuickLinkType[] = [
  {
    label: 'Bli scout',
    image: '/images/footer/quicklinks/bliscout.svg',
    href: '/bli-scout',
  },

  {
    label: 'Avdelningar',
    image: '/images/footer/quicklinks/avdelningar.svg',
    href: '/avdelningar',
  },
  {
    label: 'Sjöscout',
    image: '/images/footer/quicklinks/sjöscout.svg',
    href: '/sjoscout',
  },
  {
    label: 'För föräldrar',
    image: '/images/footer/quicklinks/förföräldrar.svg',
    href: '/foraldrar',
  },
  { label: 'FAQ', image: '/images/footer/quicklinks/faq.svg', href: '/faq' },
];

export const socialMediaLinks: SocialLinkType[] = [
  {
    label: 'Facebook',
    image: '/images/footer/socialmedia/facebook.svg',
    href: 'https://www.facebook.com/scouterna',
  },
  {
    label: 'Instagram',
    image: '/images/footer/socialmedia/instagram.svg',
    href: 'https://www.instagram.com/scouterna/',
  },
  {
    label: 'LinkedIn',
    image: '/images/footer/socialmedia/linkedin.svg',
    href: 'https://se.linkedin.com/company/scouterna',
  },
  {
    label: 'YouTube',
    image: '/images/footer/socialmedia/youtube.svg',
    href: 'https://www.youtube.com/channel/UCmFut5N4FcfLBJ70AhSJnmw',
  },
];

export const introLinks: IntroLinksType = [
  {
    label: 'Om HSS',
    href: '/om-hss',
    url: 'om_hss',
  },
  {
    label: 'För föräldrar',
    href: '/for-foraldrar',
    url: 'for_foraldrar',
  },
  {
    label: 'För ledare',
    href: '/for-ledare',
    url: 'for_ledare',
  },
  {
    label: 'Bli scout',
    href: '/bli-scout',
    url: 'bli_scout',
  },
  {
    label: 'Avdelningar',
    href: '/avdelningar',
    url: 'avdelningar',
  },
  {
    label: 'Läger',
    href: '/lager',
    url: 'lager',
  },
];
