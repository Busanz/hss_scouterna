'use client';
import Values from '@/components/Values';
import { fadeUpAnimation } from '@/utils/animation';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

const OurCommitments = () => {
  const t = useTranslations('omHSS');

  return (
    <section className="flex flex-col w-full h-full items-center my-5 lg:my-10">
      <div className="flex flex-col w-full max-w-360 rounded-sm pb-20 bg-primary">
        <div className="flex flex-col w-full">
          <motion.h1
            className="text-center text-2xl sm:text-3xl lg:text-4xl text-text-primary py-5 md:py-10"
            {...fadeUpAnimation}
          >
            {t("page")}
          </motion.h1>
        </div>
        <Values />
      </div>
    </section>
  );
};

export default OurCommitments;
