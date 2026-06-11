'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/utils/animation';

const Safety = () => {
  const t = useTranslations('forParents');
  return (
    <section className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 my-5 sm:my-10 md:my-20">
      <div className="w-full lg:w-1/2 order-1">
        <Image
          src="/img/ourboats-section/DSCF1955.jpg"
          alt="Image boats and scouts"
          width={350}
          height={270}
          className="w-full h-auto rounded-sm object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 order-2 lg:order-1 px-4 md:px-0">
        <motion.h1
          {...fadeUpAnimation}
          className=" text-xl sm:text-2xl md:text-3xl"
        >
          {t('titleSafety')}
        </motion.h1>
        <p className="my-5 sm:text-lg">{t('safetyParagraph1')}</p>
        <p className="sm:text-lg">{t('safetyParagraph2')}</p>
        <p className="mt-5 sm:text-lg">{t('safetyParagraph3')}</p>
      </div>
    </section>
  );
};

export default Safety;
