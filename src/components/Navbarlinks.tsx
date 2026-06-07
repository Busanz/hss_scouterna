'use client';

import Link from 'next/link';
import { navLinks } from '../data/data';
import LogoCircle from './ui/LogoCircle';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { motion, AnimatePresence } from 'framer-motion';

const Navbarlinks = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isHamberger, setIsHamberger] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const handleClick = () => {
    setIsHamberger((prev) => !prev);
  };

  useEffect(() => {
    if (isHamberger) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isHamberger]);

  useEffect(() => {
    const getScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setScreenWidth(window.innerWidth);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', getScreenSize);
    getScreenSize();

    return () => window.removeEventListener('resize', getScreenSize);
  }, []);

  return (
    <>
      <div
        className={`relative flex flex-row sm:flex-col w-full max-w-310 items-center lg:justify-center rounded-sm sm:rounded-none xl:rounded-sm px-4 ${isMobile ? 'py-3 justify-between sm:justify-evenly' : 'py-3 justify-end'} mb-0 sm:mb-6 sm:flex-row gap-6 xl:gap-10 bg-primary/90`}
      >
        <Link href="/">
          <LogoCircle isMobile={isMobile} />
        </Link>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`md:text-lg font-extralight text-text-primary active:text-secondary hover:text-secondary transition-colors duration-300 hidden sm:block
      ${index === navLinks.length - 1 ? 'md:pr-[2%]' : ''}`}
          >
            {link.label}
          </Link>
        ))}

        <div className="block sm:hidden">
          {!isHamberger && (
            <RxHamburgerMenu
              size={36}
              className="text-text-primary active:text-secondary hover:text-secondary transition-colors duration-800"
              onClick={handleClick}
            />
          )}
          <AnimatePresence>
            {isHamberger && (
              <motion.div
                className="absolute top-0 right-0 z-30 w-full h-[99vh] rounded-t-sm bg-bg-light/98"
                initial={{ opacity: 0, x: screenWidth }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: screenWidth }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="flex w-full justify-end items-center pr-4 py-3.5 text-right">
                  <RxCross1
                    size={36}
                    className="text-text-secondary"
                    onClick={() => setIsHamberger(false)}
                  />
                </div>

                <div className="flex flex-col w-full h-full">
                  <Link
                    href={'/'}
                    onClick={() => setIsHamberger(false)}
                    className="text-2xl font-extralight text-text-secondary pl-10 py-4"
                  >
                    Home
                  </Link>
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      onClick={() => setIsHamberger(false)}
                      className="text-2xl font-extralight text-text-secondary pl-10 py-4"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href={'/faq'}
                    onClick={() => setIsHamberger(false)}
                    className="text-2xl font-extralight text-text-secondary pl-10 py-4"
                  >
                    FAQ
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbarlinks;
