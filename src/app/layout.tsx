import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';
import Headersection from '@/sections/Headersection';
import Footersection from '@/sections/Footersection';

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
    <html lang={locale} className={`${geistSans.variable} h-full antialiased`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
