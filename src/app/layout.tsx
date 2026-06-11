import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import type { Metadata } from 'next';

import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

import { Geist, Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hässelby Strands Sjöscoutkår | HSS',
  description:
    'Tillsammans kan vi göra mer. Scouterna ger barn och unga från alla delar av samhället chansen att uppleva äventyr tillsammans och växa som individer.',
  keywords: [
    'Scouting',
    'Sjöscout',
    'Hässelby',
    'Scouterna',
    'Barn och ungdom',
    'Scoutkår',
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${geistSans.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
