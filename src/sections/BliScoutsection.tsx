"use client";
import { motion } from "motion/react";
import { fadeUpAnimation } from "@/utils/animation";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function BliScoutsection() {
  const t = useTranslations("bliScout");

  return (
    <section className="flex flex-col w-full h-full mt-5 sm:mt-10 md:mt-20 items-center justify-center">
      <div className="flex flex-col max-w-360 items-center justify-center w-full bg-primary ">
        <motion.h1
          {...fadeUpAnimation}
          className="text-center text-2xl sm:text-3xl lg:text-4xl text-white px-1 py-5 md:py-10"
        >
          {t("header")}
        </motion.h1>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 mb-5 sm:mb-10 md:mb-20">
          <div className="flex flex-col items-center gap-5 px-4 sm:px-6 lg:px-8">
            <p className="text-xl font-normal text-white">{t("subHeader")}</p>
            <p className="text-md font-normal text-white items-center">
              {t("description")}
            </p>
            <Link
              href="https://www.scoutnet.se/register/in/group/764"
              target="_blank"
              className="bg-white text-primary hover:bg-secondary font-normal py-1.5 px-4 rounded-sm cursor-pointer drop-shadow-[0_4px_4px_rgba(0,0,0,0.24)]"
            >
              {t("buttonText")}
            </Link>
          </div>
          <div className="w-full h-64 rounded-sm overflow-hidden gap-5 -order-1 lg:order-2 ">
            <img
              src="/img/bli-scout/bliscout.svg"
              alt={t("imageAltText1")}
              className="inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-w-360 gap-8 md:gap-10 lg:gap-14 my-5 sm:my-10 md:my-20">
        <div className="w-full h-64 rounded-sm overflow-hidden gap-5">
          <img
            src="/img/bli-scout/bliscout2.svg"
            alt={t("imageAltText2")}
            className="inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8">
          <p className="text-xl font-normal text-primary tracking-wide">
            {t("description2")}
          </p>
          <p className="text-md font-normal text-primary my-5">
            {t("description3")}
          </p>
        </div>
      </div>
    </section>
  );
}