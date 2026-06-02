'use client';

import LinkedCard from '@/components/ui/LinkedCard';
import { omHSSLinks } from '@/data/data';
import { motion } from 'motion/react';
import { fadeUpAnimation } from '@/utils/animation';

const OmHSSsection = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center my-5 md:my-10">
      <div className="flex flex-col items-center w-full h-full pb-5 md:pb-10 rounded-sm text-text-primary bg-bg-light">
        <motion.h1
          {...fadeUpAnimation}
          className="text-center text-2xl sm:text-3xl lg:text-4xl mt-8 text-text-secondary px-1 py-5 md:py-10"
        >
          {`Hässelby Strands Sjöscoutkår (HSS)`}
        </motion.h1>
        <div className="relative grid grid-cols-1 md:grid-cols-3 place-items-center w-full max-w-360 text-text-primary px-4 md:px-6 lg:px-10 rounded-sm gap-2 md:gap-6 lg:gap-2">
          {omHSSLinks.map((item, index) => (
            <LinkedCard
              key={index}
              href={item.href}
              label={item.label}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OmHSSsection;
