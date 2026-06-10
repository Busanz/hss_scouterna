'use client';
import Image from 'next/image';
import type { DepartmentIntroType } from '@/types/types';
// import CTASelector from './ui/CTASelector';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@headlessui/react';
import { useTranslations } from 'next-intl';

type DepartmentHeaderProps = {
  department: DepartmentIntroType;
};

const DepartmentIntro = ({ department }: DepartmentHeaderProps) => {
  const t = useTranslations('avdelningar');
  const [isReadMore, setReadMore] = useState<boolean>(false);
  const handleClick = () => {
    setReadMore((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row w-full justify-center gap-1 md:gap-12 text-text-secondary bg-background px-5 md:px-10 py-10 md:py-20">
      <div className="relative flex w-50 h-50 md:w-70 md:h-70 rounded-sm">
        <Image
          src={department.image}
          alt={t(`${department.key}.label`)}
          fill
          className="object-contain object-top-left p-1 rounded-sm"
          loading="eager"
          sizes="(max-width: 640px) 60px, (max-width: 1024px) 90px, 100px"
        />
      </div>
      <div className="w-full max-w-3xl pt-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">
          {t(`${department.key}.label`)}
        </h1>
        <h2 className="text-xl sm:text-2xl">
          {t(`${department.key}.subtitle`)}
        </h2>
        <p className="sm:text-lg pt-4 ">{t(`${department.key}.description`)}</p>
        <div className="mt-6 space-y-2 text-sm sm:text-base opacity-90">
          <p>
            <strong>{t("when")}</strong> {t(`${department.key}.when`)}
          </p>
          <p>
            <strong>{t("where")}</strong> {t(`${department.key}.where`)}
          </p>
          <p>
            <strong>{t("age")}</strong> {t(`${department.key}.age`)}
          </p>
          <p className="pb-10 ">
            <strong>{t("previous_name")}</strong> {t(`${department.key}.formerName`)}
          </p>
        </div>
        <div
          className="flex pb-5 md:pb-10 gap-3 md:gap-6"
          style={
            { "--department-color": department.color } as React.CSSProperties
          }
        >
          <Button
            className="w-full max-w-50 text-lg md:text-xl text-text-primary font-medium px-6 py-3 border rounded-sm bg-(--department-color) hover:bg-(--department-color)/90 border-(--department-color) cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.scoutnet.se/register/in/group/764",
                "_blank",
              );
            }}
          >
            {t("registerButton")}
          </Button>
          <Button
            className="w-full text-lg md:text-xl text-(--department-color) font-medium px-6 py-3 border  rounded-sm border-(--department-color) hover:bg-(--department-color)/20 max-w-50 cursor-pointer"
            onClick={() => {
              handleClick();
            }}
          >
            {isReadMore ? t("closeButton") : t("readMoreButton")}
          </Button>
        </div>
        <AnimatePresence initial={false}>
          {isReadMore && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="border px-4 py-5 rounded-sm"
              style={{ borderColor: department.color }}
            >
              {department.moreDetails && (
                <>
                  <h2 className="text-xl sm:text-2xl pb-5">
                    {t(`${department.key}.moreInfoTitle`)}
                  </h2>
                  <p className="sm:text-lg pb-5">
                    {t(`${department.key}.moreInfo`)}
                  </p>
                  <div>
                    <Image
                      src={department.moreDetails.image}
                      alt={`Badge ${t(`${department.key}.label`)}`}
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