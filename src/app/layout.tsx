import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';
import Headersection from '@/sections/Headersection';
import Footersection from '@/sections/Footersection';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center hide-scrollbar">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
