'use client';
import { useMemo, useState } from 'react';
import { Category, FaqItem } from '@/types/faq';
import { categories, faqData } from '@/data/faq';
import { CurvedBorderBottomSvg, CurvedBorderTopSvg } from '@/assets/svg';
import Question from '@/components/Question';

import { motion } from 'motion/react';
import { fadeUpAnimation } from '@/utils/animation';

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('Allt');

  const questions =
    activeCategory === 'Allt'
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  const handleSelectCategory = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <div className="w-full mt-10 md:mt-20 max-w-360 bg-bg-light">
      <div className="w-full">
        <CurvedBorderTopSvg />
      </div>

      <div className="w-full min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            {...fadeUpAnimation}
            className="text-center text-2xl sm:text-3xl lg:text-4xl mt-8 text-text-secondary px-1 py-5 md:py-10"
          >
            FAQ
          </motion.h1>

          <p className="font-semibold text-lg sm:text-2xl text-text-subtitle">
            Här har vi samlat de mest ställda frågorna
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleSelectCategory(category)}
              className={`min-w-32.5 sm:min-w-40 px-4 h-12.5 rounded-sm text-white text-lg font-light cursor-pointer transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-[#395374] shadow-lg'
                  : 'bg-[#001f3f] hover:bg-[#17395f]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="w-full h-px bg-[#76CFF4] mb-4" />
        <div className="max-w-4xl mx-auto h-px bg-text-subtitle mb-4" />

        <p className="text-center text-text-secondary text-xl tracking-wide mb-8">
          {activeCategory}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {questions.map((question, index) => (
            <div key={index} className="rounded-sm">
              <Question
                question={question.question}
                answer={question.answer}
                category={question.category}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="sm:text-lg">
            Behöver du svar på något annat?{' '}
            <a
              href="#"
              className="font-light underline underline-offset-2 text-text-secondary hover:text-white transition-colors duration-200"
            >
              Kontakta oss
            </a>
          </p>
        </div>
      </div>

      <div className="w-full">
        <CurvedBorderBottomSvg />
      </div>
    </div>
  );
}
