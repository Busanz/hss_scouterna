'use client';

import { GlobalSvg } from '@/assets/svg';
import { Button } from '@headlessui/react';
import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { EnglishFlag, SwedishFlag } from '@/assets/svg';
import { AnimatePresence, motion } from 'motion/react';

const LanguageBar = () => {
  const [isLanguageBarOpen, setIsLanguageBarOpen] = useState<boolean>(false);
  const [activeLanguage, setActiveLanguage] = useState<'EN' | 'SE'>('SE');
  const languages: ('English' | 'Swedish')[] = ['English', 'Swedish'];

  const handleClick = () => {
    setIsLanguageBarOpen((pre) => !pre);
  };
  return (
    <div className="relative">
      <div
        className="flex justify-between min-w-20 h-fit items-center active:text-secondary hover:text-secondary"
        onClick={handleClick}
      >
        <GlobalSvg />
        <p className="cursor-pointer">{activeLanguage}</p>
        <IoMdArrowDropdown
          size={20}
          className={`transition-transform duration-500 origin-center ${isLanguageBarOpen ? 'rotate-180' : ''}`}
        />
      </div>
      <AnimatePresence>
        {isLanguageBarOpen && (
          <motion.div
            className="absolute top-11 right-0 flex flex-col bg-bg-light sm:bg-primary z-40 px-4 py-3 gap-3 rounded-b-sm text-text-secondary sm:text-text-primary items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {languages.map((lang, index) => (
              <Button
                key={index}
                className="flex cursor-pointer hover:text-secondary"
                onClick={() => {
                  handleClick();
                  setActiveLanguage(index === 0 ? 'EN' : 'SE');
                }}
              >
                {index === 0 ? <EnglishFlag /> : <SwedishFlag />}
                {lang}
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageBar;
