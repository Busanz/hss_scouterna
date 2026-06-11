'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/utils/animation';

const Family = () => {
  const t = useTranslations('forParents');
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 mt-5">
      <div className="w-full order-2 lg:order-1 px-4 md:px-0">
        <motion.h1
          {...fadeUpAnimation}
          className=" text-xl sm:text-2xl md:text-3xl"
        >
          {t('titleGrowth')}
        </motion.h1>
        <div className="my-5 space-y-3">
          <p className="sm:text-lg/relaxed">{t('growthParagraph1')}</p>
          <p className="sm:text-lg/relaxed">{t('growthParagraph2')}</p>
          <p className="sm:text-lg/relaxed">{t('growthParagraph3')}</p>
        </div>
      </div>
      <div className="w-full order-2 md:px-0 lg:order-1">
        <div className="px-4 md:px-0 order-2 lg:order-1">
          <motion.h2
            {...fadeUpAnimation}
            className="text-xl sm:text-2xl md:text-3xl"
          >
            {t('titleFamily')}
          </motion.h2>
          <div className="my-5 space-y-3">
            <p className="sm:text-lg/relaxed">{t('familyParagraph1')}</p>
            <p className="sm:text-lg/relaxed">{t('familyParagraph2')}</p>
            <p className="sm:text-lg/relaxed">{t('familyParagraph3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Family;
