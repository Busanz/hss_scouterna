'use client';
import { motion } from 'motion/react';
import { fadeUpAnimation } from '@/utils/animation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function BliScoutsection() {
  const t = useTranslations('bliScout');

  return (
    <section className="flex flex-col w-full h-full gap-9 py-5 sm:py-10 md:py-20 items-center justify-center">
      <div className="flex flex-col w-full h-full max-w-360 items-center justify-center bg-primary rounded-sm">
        <motion.h1
          {...fadeUpAnimation}
          className="flex w-full justify-start lg:justify-center text-2xl sm:text-3xl lg:text-4xl text-white py-5 md:py-10 px-4 md:px-6 lg:px-10 rounded-sm"
        >
          {t('header')}
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 w-full h-full max-w-360 pb-5 md:pb-10 px-4 md:px-6 lg:px-10">
          <div className="flex flex-col w-full h-full md:max-w-xl lg:max-w-3/5 order-2 lg:order-1">
            <p className="md:text-xl font-normal text-white pb-5">
              {t('subHeader')}
            </p>
            <p className="sm:text-lg text-white items-center pb-20">
              {t('description')}
            </p>
            <Link
              href="https://www.scoutnet.se/register/in/group/764"
              target="_blank"
              className="bg-white w-full max-w-50 text-center text-primary hover:bg-secondary font-normal py-1.5 px-4 rounded-sm cursor-pointer"
            >
              {t('buttonText')}
            </Link>
          </div>
          <div className="relative w-full rounded-sm overflow-hidden order-1 lg:order-2">
            <Image
              src="/img/bli-scout/bli_scout.png"
              alt={t('imageAltText1')}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row w-full h-full max-w-360 gap-8 md:gap-10 lg:gap-14 py-5 sm:py-5 md:py-10">
        <div className="relative w-full rounded-sm overflow-hidden gap-5">
          <div className="relative w-full rounded-sm overflow-hidden">
            <Image
              src="/img/bli-scout/bliscout2.png"
              alt={t('imageAltText2')}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col w-full lg:pr-10 lg:pl-0">
          <p className="mb-5 md:text-xl font-normal leading-relaxed text-primary">
            {t('description2')}
          </p>
          <p className="mb-5 sm:text-lg leading-relaxed text-primary">
            {t('description3')}
          </p>
        </div>
      </div>
    </section>
  );
}
