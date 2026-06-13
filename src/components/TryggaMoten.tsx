'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/utils/animation';

const TryggaMoten = () => {
  const t = useTranslations('forParents');
  return (
    <section className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 my-5 sm:my-10 md:my-20">
      <div className="w-full lg:w-1/2 order-2 lg:order-1 px-4 md:px-0">
        <motion.h1
          {...fadeUpAnimation}
          className=" text-xl sm:text-2xl md:text-3xl"
        >
          {t('title')}
        </motion.h1>
        <div>
          <p className="mt-5 sm:text-lg">{t('paragraph1')}</p>
          <p className="sm:text-lg">{t('paragraph2')}</p>
          <p className="sm:text-lg">{t('paragraph3')}</p>
        </div>
        <a
          className="inline-block mt-10 px-4 py-2 w-fit rounded-sm text-white bg-primary hover:bg-secondary hover:text-primary"
          href="https://www.scouterna.se/trygga-moten/"
          target="_blank"
        >
          {t('cta')}
        </a>
      </div>
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <Image
          src="/img/intro-section/for_foraldrar.webp"
          alt="Scouts"
          width={350}
          height={270}
          className="w-full h-auto rounded-sm object-cover"
        />
      </div>
    </section>
  );
};

export default TryggaMoten;
