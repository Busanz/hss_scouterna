'use client';
import { AnchorSvg } from '@/assets/svg';
import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeUpAnimation } from '@/utils/animation';
import { useTranslations } from 'next-intl';

const seaScoutImg = [
  '/img/ourboats-section/ourboats_01.webp',
  '/img/ourboats-section/ourboats_02.webp',
  '/img/ourboats-section/ourboats_03.webp',
];

const SeaScout = () => {
  const t = useTranslations('seascouts');

  return (
    <section className="flex flex-col w-full h-full items-center my-10 lg:my-20">
      <div className="flex flex-col w-full max-w-360 rounded-sm  px-4 py-8 sm:px-6 lg:px-8 bg-primary">
        <div className="flex flex-col justify-center items-center w-full">
          <motion.h1
            {...fadeUpAnimation}
            className="text-center text-2xl sm:text-3xl lg:text-4xl mt-8 text-text-primary px-1 py-5 md:py-10"
          >
            {t('title')}
          </motion.h1>
          <p className="w-full text-text-primary sm:text-lg max-w-6xl pb-10">
            {t('paragraphOne')}
          </p>
          <div className="flex items-center justify-center gap-6">
            <h3 className="text-center text-lg md:text-xl text-text-subtitle">
              {t('heading')}
            </h3>
            <AnchorSvg />
          </div>
          <hr className="my-6 h-[0.5px] w-full text-text-subtitle" />
          <div className=" text-text-primary max-w-6xl mt-2">
            <p className="sm:text-lg">{t('paragraphTwo')}</p>
            <ul className="list-disc m-5 md:mx-5 sm:text-lg pb-5">
              <li className="pb-3">{t('listItemOne')}</li>
              <li className="pb-3">{t('listItemTwo')}</li>
              <li className="pb-3">{t('listItemThree')}</li>
            </ul>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-10">
              {seaScoutImg.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="båt"
                  width={250}
                  height={150}
                  className="h-auto w-full rounded-[5px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeaScout;
