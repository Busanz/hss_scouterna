import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col items-center hide-scrollbar">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
