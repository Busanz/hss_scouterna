'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/utils/animation';

const CourseHss = () => {
  const t = useTranslations('forLedare');

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 my-5 sm:py-10 md:py-20">
      <div className="flex flex-col justify-start order-2 px-4 md:px-0 lg:order-1">
        <motion.h1
          {...fadeUpAnimation}
          className=" text-xl sm:text-2xl md:text-3xl"
        >
          {t('title_three')}
        </motion.h1>
        <div className="w-full md:max-w-200 lg:max-w-none my-5 space-y-3">
          <p className="sm:text-lg/relaxed">{t('title_three_paragraph_one')}</p>
          <p className="sm:text-lg/relaxed">{t('title_three_paragraph_two')}</p>
          <p className="sm:text-lg/relaxed">
            {t('title_three_paragraph_three')}
          </p>
          <p className="sm:text-lg/relaxed">
            {t('title_three_paragraph_four')}
          </p>
        </div>
        <div className="my-5 space-y-3">
          <p className="sm:text-lg/relaxed">{t('title_three_list_title')}</p>
          <ul className="list-disc m-5 md:mx-5 pb-5">
            <li className="pb-3 sm:text-lg/relaxed">
              {t('title_three_list_item_one')}
            </li>
            <li className="pb-3 sm:text-lg/relaxed">
              {t('title_three_list_item_two')}
            </li>
            <li className="pb-3 sm:text-lg/relaxed">
              {t('title_three_list_item_three')}
            </li>
            <li className="pb-3 sm:text-lg/relaxed">
              {t('title_three_list_item_four')}
            </li>
            <li className="pb-3 sm:text-lg/relaxed">
              {t('title_three_list_item_five')}
            </li>
            <li className="pb-3 sm:text-lg/relaxed">
              {t('title_three_list_item_six')}
            </li>
            <li className="pb-3 sm:text-lg/relaxed">
              {t('title_three_list_item_seven')}
            </li>
            <li className="pb-3 sm:text-lg/relaxed">
              {t('title_three_list_item_eight')}
            </li>
            <li className="pb-3 sm:text-lg/relaxed">
              {t('title_three_list_item_nine')}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-start order-2 md:px-0 lg:order-1">
        <div className="px-4 md:px-0 order-2 lg:order-1">
          <motion.h2
            {...fadeUpAnimation}
            className="text-xl sm:text-2xl md:text-3xl"
          >
            {t('title_four')}
          </motion.h2>
          <div className="my-5 space-y-3 w-full md:max-w-200 lg:max-w-none">
            <p className="sm:text-lg/relaxed">
              {t('title_four_paragraph_one')}
            </p>
            <div>
              <p className="sm:text-lg/relaxed">
                {t('title_four_paragraph_two')}
              </p>
              <p className="sm:text-lg/relaxed">
                {t('title_four_paragraph_three')}
              </p>
              <p className="sm:text-lg/relaxed">
                {t('title_four_paragraph_four')}
              </p>
            </div>
          </div>
          <div className="my-5 space-y-3 w-full md:max-w-200 lg:max-w-none">
            <p className="sm:text-lg/relaxed">
              {t('title_four_paragraph_five')}
            </p>
            <p className="sm:text-lg/relaxed">
              {t('title_four_paragraph_six')}
            </p>
          </div>
        </div>
        <Image
          src="/img/intro-section/for_foraldrar.png"
          alt="Image Scout Leader"
          width={350}
          height={270}
          className="w-full h-auto order-1 lg:order-2 mb-8 lg:mb-0 rounded-sm lg:mt-10"
        />
      </div>
    </section>
  );
};

export default CourseHss;
