'use client';

import { useEffect, useRef, useState } from 'react';
import type { CategoryType, FaqItemType } from '@/types/types';
import Question from '@/components/Question';
import Link from 'next/link';
import { categories, faqData } from '@/data/faq';
import { useLocale, useTranslations } from 'next-intl';

export default function FaqSection() {
  const t = useTranslations('faq');
  const locale = useLocale();
  const prevLocale = useRef(locale);
  const defaultCategory = t('categories.all') as CategoryType;

  const [activeCategory, setActiveCategory] =
    useState<CategoryType>(defaultCategory);
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  useEffect(() => {
    if (prevLocale.current !== locale) {
      setActiveCategory(t('categories.all') as CategoryType);
      setOpenLeft(null);
      setOpenRight(null);
      prevLocale.current = locale;
    }
  }, [locale, t]);

  const questions = faqData.filter((item: FaqItemType) => {
    return (
      activeCategory === defaultCategory || t(item.category) === activeCategory
    );
  });

  const leftCol: FaqItemType[] = questions.filter((_, i) => i % 2 === 0);
  const rightCol: FaqItemType[] = questions.filter((_, i) => i % 2 !== 0);

  const handleSelectCategory = (category: CategoryType) => {
    setActiveCategory(category);
    setOpenLeft(null);
    setOpenRight(null);
  };

  return (
    <main className="flex flex-col w-full h-full items-center my-10 md:my-20 ">
      <div className="flex flex-col w-full h-full max-w-360 px-4 md:px-6 lg:px-5 xl:px-10 pb-10 md:pb-20 rounded-sm bg-primary">
        <div className="text-center mt-6 sm:mt-8">
          <h1 className="text-text-primary text-2xl sm:text-3xl lg:text-4xl pt-5">
            {t('header')}
          </h1>
          <p className="leading-relaxed mb-5 sm:text-xl text-text-primary">
            {t('subHeader')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 my-6">
          {categories.map((category) => {
            const categoryLabel = t(category) as CategoryType;
            return (
              <button
                key={t(category)}
                onClick={() => {
                  handleSelectCategory(categoryLabel);
                  setOpenLeft(null);
                  setOpenRight(null);
                }}
                className={`min-w-30 px-3 py-2 rounded-sm text-lg font-light cursor-pointer ${
                  activeCategory === t(category)
                    ? 'font-medium text-secondary'
                    : 'underline underline-offset-4 decoration-0 decoration-text-primary text-text-primary hover:text-secondary hover:no-underline'
                }`}
              >
                {categoryLabel}
              </button>
            );
          })}
        </div>

        <div>
          <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-5 items-start">
            <div className="flex flex-col flex-1 w-full gap-4 lg:gap-5">
              {leftCol.map((item: FaqItemType, index: number) => (
                <Question
                  key={index}
                  question={t(item.question)}
                  answer={t(item.answer)}
                  category={t(item.category) as CategoryType}
                  isOpen={openLeft === index}
                  onToggle={() => {
                    setOpenLeft(openLeft === index ? null : index);
                    setOpenRight(null);
                  }}
                />
              ))}
            </div>

            <div className="flex flex-col flex-1 w-full gap-4 lg:gap-5">
              {rightCol.map((item: FaqItemType, index: number) => (
                <Question
                  key={index}
                  question={t(item.question)}
                  answer={t(item.answer)}
                  category={t(item.category) as CategoryType}
                  isOpen={openRight === index}
                  onToggle={() => {
                    setOpenRight(openRight === index ? null : index);
                    setOpenLeft(null);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center pt-5 mt-5">
          <p className="text-white text-sm">
            {t('anyotherquestion')}{' '}
            <Link
              href="/kontakta-oss"
              className="font-semibold underline underline-offset-2 text-white hover:text-white"
            >
              {t('contactus')}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
