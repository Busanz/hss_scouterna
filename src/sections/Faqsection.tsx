'use client';

import { useState } from 'react';
import type { CategoryType, FaqItemType } from '@/types/types';
import { categories, faqData } from '@/data/faq';
import Question from '@/components/Question';
import Link from 'next/link';

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('Allt');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const questions = faqData.filter((item) => {
    return activeCategory === 'Allt' || item.category === activeCategory;
  });

  const handleSelectCategory = (category: CategoryType) => {
    setActiveCategory(category);
  };

  return (
    <section className="flex flex-col w-full h-full items-center my-10 md:my-20 ">
      <div className="flex flex-col w-full h-full max-w-360 min-h-230 px-4 md:px-6 lg:px-5 xl:px-10 pb-10 md:pb-20 rounded-sm bg-primary">
        <div className="text-center mt-6 sm:mt-8">
          <h1 className="text-text-primary text-2xl sm:text-3xl lg:text-4xl pt-5">
            FAQ
          </h1>

          <p className="leading-relaxed mb-5 sm:text-xl text-text-primary">
            Här har vi samlat de mest ställda frågorna
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 my-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleSelectCategory(category)}
              className={`min-w-30 px-3 py-2 rounded-sm text-lg font-light cursor-pointer ${
                activeCategory === category
                  ? 'font-medium text-secondary'
                  : 'underline underline-offset-4 decoration-0 decoration-text-primary text-text-primary hover:text-secondary hover:no-underline'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {questions.map((colItems: FaqItemType, colIndex: number) => (
              <Question
                key={colIndex}
                question={colItems.question}
                answer={colItems.answer}
                category={colItems.category}
                isOpen={openQuestion === colIndex}
                onToggle={() =>
                  setOpenQuestion(openQuestion === colIndex ? null : colIndex)
                }
              />
            ))}
          </div>
        </div>

        <div className="text-center pt-5 mt-auto">
          <p className="text-white text-sm">
            Behöver du svar på något annat?{' '}
            <Link
              href="/kontakta-oss"
              className="font-semibold underline underline-offset-2 text-white hover:text-white"
            >
              Kontakta oss
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
