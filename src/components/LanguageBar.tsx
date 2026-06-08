'use client';

import { GlobalSvg } from '@/assets/svg';
import { Button } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { EnglishFlag, SwedishFlag } from '@/assets/svg';
import { AnimatePresence, motion } from 'motion/react';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { setUserLocale } from '@/i18n/locale';

const LanguageBar = () => {
  const [isLanguageBarOpen, setIsLanguageBarOpen] = useState<boolean>(false);
  const languageWrapper = useRef<HTMLDivElement | null>(null);

  const locale = useLocale();
  const router = useRouter();

  const activeLanguage = locale === 'en' ? 'EN' : 'SV';

  const handleClick = () => {
    setIsLanguageBarOpen((pre) => !pre);
  };

  const handleLanguage = async (selectedLocale: 'en' | 'sv') => {
    await setUserLocale(selectedLocale);
    router.refresh();
    setIsLanguageBarOpen(false);
  };

  useEffect(() => {
    const handleOpenLanguageByKey = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setIsLanguageBarOpen((prev) => !prev);
      }

      if (event.key === 'Escape') {
        setIsLanguageBarOpen(false);
      }
    };

    document.addEventListener('keydown', handleOpenLanguageByKey);

    return () => {
      document.removeEventListener('keydown', handleOpenLanguageByKey);
    };
  }, []);

  useEffect(() => {
    if (isLanguageBarOpen === false) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageWrapper.current &&
        !event.composedPath().includes(languageWrapper.current)
      ) {
        setIsLanguageBarOpen(false);
      }
    };
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.keyCode === 27 || event.code === 'Escape') {
        setIsLanguageBarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isLanguageBarOpen]);

  return (
    <div className="relative" ref={languageWrapper} tabIndex={0}>
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
            <Button
              className="flex gap-2 items-center cursor-pointer hover:text-secondary"
              onClick={() => handleLanguage('en')}
            >
              <EnglishFlag />
              English
            </Button>
            <Button
              className="flex gap-2 items-center cursor-pointer hover:text-secondary"
              onClick={() => handleLanguage('sv')}
            >
              <SwedishFlag />
              Svenska
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageBar;
