'use client';

import Maps from '@/components/Maps';
import { motion } from 'motion/react';
import { fadeUpAnimation } from '@/utils/animation';

const ContactInfosection = () => {
  return (
    <div className="flex flex-col w-full max-w-360 h-full bg-bg-light mt-10 md:mt-20 px-4 md:px-6 lg:px-10 py-5 md:py-10 mb-5 md:mb-10 rounded-sm">
      <motion.h1
        {...fadeUpAnimation}
        className="text-center text-2xl sm:text-3xl lg:text-4xl text-text-secondary px-1 py-5"
      >
        {`Äventyr och kompisar!`}
      </motion.h1>
      <p className="text-center sm:text-lg pb-5">
        Har du några funderingar eller behöver du komma i kontakt med oss?
      </p>
      <div className="flex rounded-sm gap-3 lg:gap-8 xl:gap-14">
        <div>
          <Maps />
        </div>
        <div className="px-4 md:px-8">
          <h3 className="text-2xl font-semibold mb-4">E-post</h3>
          <p>
            <span className="font-medium">Address:</span>
            <a
              href="mailto:info@hss-scout.org"
              className="underline"
              aria-label="Email info@hss-scout.org"
            >
              info@hss-scout.org
            </a>
          </p>
          <p>
            <span className="font-medium">För medlemsärenden:</span>
            <a href="mailto:register@hss-scout.org" className="underline">
              register@hss-scout.org
            </a>
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-4">Adress</h3>
            <p>Myset:</p>
            <p>Ruffen:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfosection;
