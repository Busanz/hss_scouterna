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
  // {
  //   label: 'Året i HSS',
  //   href: '/aret-i-hss',
  // },
  {
    label: 'Om HSS',
    href: '/om-hss',
  },
  {
    label: 'Kontakta oss',
    href: '/kontakta-oss',
  },
  // {
  //   label: 'FAQ',
  //   href: '/faq',
  // },
];

export const introLinks: IntroLinksType = [
  {
    label: 'Bli scout',
    href: '/bli-scout',
    url: '/img/intro-section/for_ledare.png',
    description: 'Upplev äventyr, segling och nya vänner välkommen till HSS!',
  },
  {
    label: 'För ledare',
    href: '/for-ledare',
    url: '/img/intro-section/bli_scout.png',
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
  // {
  //   label: 'Om HSS',
  //   href: '/om-hss',
  //   url: '/img/om-HSS-section/om_hss.png',
  // },
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
    label: 'Rover',
    href: '/rover_19_25',
    url: '/img/departments/rover_19_25.svg',
    des: 'Rover 19-25 år',
  },
];

export const departmentsIntro = [
  {
    id: 0,
    image: '/img/departments/intro/sjohumlor.png',
    title: 'Sjöhumlor',
    subtitle: 'Välkommen till Sjöhumlorna, där äventyret börjar!',
    description:
      'Är du redo för spänning, nya kompisar och doften av sjövatten? Hos Hässelby Sjöscoutkår välkomnar vi alla barn som börjar i årskurs 2 (från 8 år) att bli Spårarscouter i vår avdelning Sjöhumlorna.',
    // buttonLable: 'Vill ni hänga med på nästa äventyr?',
    details: {
      when: 'Måndagar',
      where: 'Ruffen, Hässelby Strandbad',
      age: 'Från årskurs 2 (8 år)',
      formerName:
        'Du kanske har hört namnet "miniorscout"? Det är precis det vi är, men numera kallar vi oss Spårarscouter!',
    },
    color: '#3FAE2A',
  },
  {
    id: 1,
    image: '/img/departments/intro/kaparna.png',
    title: 'Kaparna',
    subtitle: 'Välkommen till Kaparna, större utmaning, större äventyr!',
    description:
      'När du fyller 10 år (årskurs 4) väntar nästa stora steg i Scouterna: du blir Upptäckarscout på avdelningen Kaparna. Här stannar du i två år och får prova på saker som känns på riktigt, samtidigt som vi har galet roligt tillsammans.',
    // buttonLable: 'Är du redo att ta rodret?',
    details: {
      when: 'Tisdagar',
      where: 'Ruffen, Hässelby Strandbad',
      age: '10-12 år (Årskurs 4 och 5)',
      formerName:
        'Du kanske har hört namnet "juniorscout"? Det är precis det vi är, men numera kallar vi oss Upptäckarscouter!',
    },
    color: '#01A8E2',
  },
  {
    id: 2,
    image: '/img/departments/intro/konvojen.png',
    title: 'Konvojen',
    subtitle: 'Välkommen till Konvojen - Äventyr på riktigt!',
    description:
      'När du fyller 12 år kliver du in i Äventyrarscouterna. Under tre händelserika år på avdelningen Konvojen lämnar vi det grundläggande bakom oss och satsar på utmaningar som kräver både samarbete, mod och skärpa.',
    // buttonLable: 'Är du redo för nästa nivå?',
    details: {
      when: 'Torsdagar',
      where: 'Ruffen, Hässelby Strandbad',
      age: '12-15 år (Årskurs 6 till 8)',
      formerName:
        'Du kanske känner till namnet "patrullscout"? Det är vi, men nu heter vi Äventyrarscouter!',
    },
    color: '#ED5200',
  },
  {
    id: 3,
    image: '/img/departments/intro/utmanare.png',
    title: 'Utmanare',
    subtitle: 'Utmanarscouterna - Gemenskap för livet!',
    description:
      'När du kliver in i Utmanarscouterna (från 15 år) börjar en tid som handlar om så mycket mer än bara scouting. Det här är åren då ni i laget svetsas samman på riktigt. Det är ingen överdrift att säga att de vänskapsband som knyts här ofta håller livet ut!',
    // buttonLable: 'Vill ni bygga framtiden tillsammans med oss?',
    details: {
      when: 'Tisdagar eller onsdagar',
      where: 'Ruffen, Hässelby Strandbad',
      age: '15-18 år (Årskurs 9 till gymnasiet)',
      formerName:
        'Du kanske har hört namnet "seniorscout"? Det är vi, men nu kallas vi för Utmanarscouter!',
    },
    color: '#D60057',
  },
  {
    id: 4,
    image: '/img/departments/intro/rover.png',
    title: 'Rover',
    subtitle: 'Roverscouterna - Utmana dina egna gränser!',
    description:
      'När du blir Rover (från 19 år) öppnas en ny typ av scouting där du själv väljer riktning. Här bygger du vidare på dina erfarenheter, utvecklar ditt ledarskap och tar dig an projekt, äventyr och utmaningar som betyder något för dig. Tillsammans med andra roverscouter skapar ni er egen väg framåt och växer både som individer och grupp.',
    // buttonLable: 'Vill ni bygga framtiden tillsammans med oss?',
    details: {
      when: 'Ej fastställd / varierar',
      where: 'Ruffen, Hässelby Strandbad',
      age: 'Från 19 år',
      formerName: 'Tidigare kallat Roverscout.',
    },
    color: '#EBE827',
  },
];
