'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/utils/animation';

const Leaders = () => {
  const t = useTranslations('forLedare');

  return (
    <section className="flex flex-col my-5 sm:my-10 md:my-20">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 ">
        <div className="flex w-full md:max-w-200 lg:max-w-3/5 justify-start order-2 px-4 md:px-0 lg:order-1">
          <div>
            <motion.h1
              {...fadeUpAnimation}
              className=" text-xl sm:text-2xl md:text-3xl pb-5"
            >
              {t('title')}
            </motion.h1>
            <p className="sm:text-lg/relaxed pb-5">
              {t('title_one_paragraph_one')}
              <br />
              {t('title_one_paragraph_two')}
            </p>
            <p className="sm:text-lg/relaxed pb-5">
              {t('title_one_paragraph_three')}
            </p>
          </div>
        </div>

        <div className="relative w-full rounded-sm overflow-hidden order-1 lg:order-2">
          <Image
            src="/img/intro-section/for_ledare.png"
            alt="Image Scout Leader"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Leaders;
