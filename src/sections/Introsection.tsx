'use client';

import { introLinks } from '@/data/data';
import LinkedCard from '@/components/ui/LinkedCard';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/utils/animation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Introsection = () => {
  const t = useTranslations('introSection');

  const links = introLinks.map((item, index) => ({
    href: item.href,
    url: item.url,
    label: t(`cards.${index}.label`),
    description: t(`cards.${index}.description`),
  }));

  return (
    <main className="flex flex-col w-full h-full items-center justify-center my-5 sm:my-10 md:my-20">
      <div className="relative flex flex-col w-full max-w-360 h-full pb-5 md:pb-10 rounded-sm text-text-primary bg-primary">
        <motion.div
          {...fadeUpAnimation}
          className="flex sm:flex-row flex-col items-center justify-center w-full gap-0 sm:gap-5 py-5"
        >
          <Image
            src={'/img/footer/quicklinks/bliscout.svg'}
            alt="Become scout icon"
            width={10}
            height={10}
            className="w-24 h-24 object-contain shrink-0 pb-3 pt-5 sm:pt-0"
          />
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl mt-8 text-text-primary px-1 sm:py-5 md:py-10">
            {t('title')}
          </h1>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full text-text-primary px-4 md:px-6 lg:px-10 rounded-sm place-items-start justify-items-center gap-x-4 md:gap-x-6 lg:gap-x-6 gap-y-4 md:gap-y-6 lg:gap-y-10">
          {links.map((item, index) => (
            <LinkedCard
              key={index}
              href={item.href}
              label={item.label}
              url={item.url}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Introsection;
