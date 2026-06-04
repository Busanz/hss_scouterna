'use client';

import Image from 'next/image';
import type { DepartmentIntroType } from '@/types/types';
import CTASelector from './ui/CTASelector';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type DepartmentHeaderProps = {
  department: DepartmentIntroType;
};

const DepartmentIntro = ({ department }: DepartmentHeaderProps) => {
  const [isReadMore, setReadMore] = useState<boolean>(false);

  const handleClick = () => {
    setReadMore((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row w-full justify-center gap-1 md:gap-12 text-text-secondary bg-background px-5 md:px-10 py-10 md:py-20">
      <div className="relative flex w-50 h-50 md:w-70 md:h-70 rounded-sm">
        <Image
          src={department.image}
          alt={department.title}
          fill
          className="object-contain object-top-left p-1 rounded-sm"
          loading="eager"
          sizes="(max-width: 640px) 60px, (max-width: 1024px) 90px, 100px"
        />
      </div>

      <div className="w-full max-w-3xl pt-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">{department.title}</h1>
        <h2 className="text-xl sm:text-2xl">{department.subtitle}</h2>
        <p className="sm:text-lg pt-4 ">{department.description}</p>
        {department.details && (
          <div className="mt-6 space-y-2 text-sm sm:text-base opacity-90">
            <p>
              <strong>När:</strong> {department.details.when}
            </p>
            <p>
              <strong>Var:</strong> {department.details.where}
            </p>
            <p>
              <strong>Ålder:</strong> {department.details.age}
            </p>
            <p className="pb-10 ">
              <strong>Tidigare namn:</strong> {department.details.formerName}
            </p>
          </div>
        )}
        <div className="flex pb-5 md:pb-10">
          <CTASelector
            variant="primary"
            onClick={() => {
              console.log(department.title);
              window.open(
                'https://www.scoutnet.se/register/in/group/764',
                '_blank',
              );
            }}
            ctaText="Intresseanmälan"
            textColor="#000"
            bgColor={department.color}
          />

          <CTASelector
            variant="secondary"
            onClick={() => {
              handleClick();
            }}
            ctaText={isReadMore ? 'Läs mindre' : 'Läs mer'}
            textColor={'#2893F8'}
            bgColor={'#2893F800'}
          />
        </div>

        <AnimatePresence initial={false}>
          {isReadMore && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="border px-4 py-5 rounded-sm"
              style={{ borderColor: department.color }}
            >
              {department.moreDetails && (
                <>
                  <h2 className="text-xl sm:text-2xl pb-5">
                    {department.moreDetails.title}
                  </h2>

                  <p className="sm:text-lg pb-5">
                    {department.moreDetails.description}
                  </p>

                  <div>
                    <Image
                      src={department.moreDetails.image}
                      alt={`Badge ${department.title}`}
                      width={500}
                      height={300}
                      className="w-full max-w-120 h-auto"
                    />
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DepartmentIntro;
