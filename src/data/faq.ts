import type { CategoryType, FaqItemType } from '@/types/types';

export const categories: CategoryType[] = [
  'Allt',
  'Policy',
  'Allmänt',
  'Övrigt',
];

export const faqData: FaqItemType[] = [
  {
    question: 'Vad ingår i medlemsavgiften?',
    answer:
      'Medlemsavgiften täcker aktiviteter, material och försäkring för hela årets verksamhet.',
    category: 'Policy',
  },
  {
    question: 'Hur blir jag ledare?',
    answer:
      'Kontakta oss så berättar vi mer om utbildning, introduktion och hur du kan engagera dig.',
    category: 'Allmänt',
  },
  {
    question: 'Hur ändrar jag fakturaadress?',
    answer:
      'Fakturaadress ändrar du genom att skicka en förfrågan till vår ekonomiavdelning.',
    category: 'Policy',
  },
  {
    question: 'Vilka aktiviteter erbjuder kåren?',
    answer:
      'Vi erbjuder utomhusaktiviteter, helgutflykter, läger och samhällsprojekt för olika åldrar.',
    category: 'Allmänt',
  },
  {
    question: 'Hur anmäler jag mitt barn?',
    answer:
      'Anmälan görs via formuläret på vår webbplats eller genom att kontakta oss direkt.',
    category: 'Övrigt',
  },
  {
    question: 'Vad är scoutmetoden?',
    answer:
      'Scoutmetoden bygger på lärande genom erfarenhet, eget ansvar och samarbete i grupp.',
    category: 'Allmänt',
  },
  {
    question: 'Kan jag prova utan att bli medlem?',
    answer:
      'Ja, du kan prova ett par gånger innan du bestämmer dig för medlemskap.',
    category: 'Övrigt',
  },
  {
    question: 'Har ni GDPR-policy?',
    answer:
      'Ja, vi följer GDPR och hanterar personuppgifter på ett säkert och korrekt sätt.',
    category: 'Policy',
  },
  {
    question: 'Hur kontaktar jag kåren?',
    answer:
      'Du kan kontakta oss via e-post, telefon eller besöka kansliet under öppettider.',
    category: 'Övrigt',
  },
  {
    question: 'Hur hanteras avbokningar och återbetalningar?',
    answer:
      'Vid avbokning kan återbetalning ske enligt våra riktlinjer beroende på aktivitet och tidpunkt för avbokningen.',
    category: 'Policy',
  },
];
