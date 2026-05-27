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

export const introLinks: IntroLinksType = [
  {
    label: 'Om HSS',
    href: '/om-hss',
    url: '/img/intro-section/om_hss.png',
  },
  {
    label: 'För föräldrar',
    href: '/for-foraldrar',
    url: '/img/intro-section/for_foraldrar.png',
  },
  {
    label: 'För ledare',
    href: '/for-ledare',
    url: '/img/intro-section/for_ledare.png',
  },
  {
    label: 'Bli scout',
    href: '/bli-scout',
    url: '/img/intro-section/bli_scout.png',
  },
  {
    label: 'Avdelningar',
    href: '/avdelningar',
    url: '/img/intro-section/avdelningar.png',
  },
  {
    label: 'Läger',
    href: '/lager',
    url: '/img/intro-section/lager.png',
  },
];

export const omHSSLinks: IntroLinksType = [
  {
    label: 'Om HSS',
    href: '/om-hss',
    url: '/img/om-HSS-section/om_hss.png',
  },
  {
    label: 'Sjöscout',
    href: '/sjoscout',
    url: '/img/om-HSS-section/sjoscout.png',
  },
  {
    label: 'Kläder & Utrustning',
    href: 'om-hss/klader-utrustning',
    url: '/img/om-HSS-section/klader_utrustning.png',
  },
  {
    label: 'Stadgar & Protokoll',
    href: 'om-hss/stadgar-protokoll',
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
    href: '/sjoscout',
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
    label: 'Facebook',
    image: '/img/footer/socialmedia/facebook.svg',
    href: 'https://www.facebook.com/HSSScout',
  },
  {
    label: 'Instagram',
    image: '/img/footer/socialmedia/instagram.svg',
    href: 'https://www.instagram.com/hss_scout/',
  },
  {
    label: 'LinkedIn',
    image: '/img/footer/socialmedia/linkedin.svg',
    href: 'https://se.linkedin.com/company/scouterna',
  },
  {
    label: 'YouTube',
    image: '/img/footer/socialmedia/youtube.svg',
    href: 'https://www.youtube.com/@hasselbystrandssjoscoutkar4026',
  },
];
