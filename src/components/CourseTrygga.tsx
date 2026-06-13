'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/utils/animation';

const CourseTrygga = () => {
  const t = useTranslations('forLedare');

  return (
    <section className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14">
      <div className="flex flex-col justify-start flex-1/2 order-1 lg:order-1">
        <Image
          src="/img/intro-section/om_hss.webp"
          alt="Image Scout Leader"
          width={350}
          height={270}
          className="w-full h-auto rounded-sm"
        />
      </div>
      <div className="flex flex-col w-full md:max-w-200 lg:max-w-3/5 justify-start flex-1/2 order-2 px-4 md:px-0 lg:order-2">
        <motion.h1
          {...fadeUpAnimation}
          className=" text-xl sm:text-2xl md:text-3xl "
        >
          {t('title_two')}
        </motion.h1>
        <div className="my-5 space-y-3">
          <p className="sm:text-lg/relaxed">{t('title_two_paragraph_one')}</p>
          <p className="sm:text-lg/relaxed">{t('title_two_paragraph_two')}</p>
        </div>
        <a
          className="my-5 px-4 py-2 w-fit rounded-sm text-white bg-primary hover:bg-secondary hover:text-primary"
          href="https://www.scouterna.se/trygga-moten/utbildning/"
          target="_blank"
        >
          {t('title_two_button')}
        </a>
      </div>
    </section>
  );
};

export default CourseTrygga;
