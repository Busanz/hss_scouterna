'use client';

import { useState } from "react";
import { Tent, Ship, Sailboat, Sparkles, ScrollText, Info, type LucideProps } from "lucide-react";
import LagerIntro from "@/components/LagerIntro";
import { LagerList } from "@/data/LagerData";

const iconMap = {
  Tent,
  Ship,
  Sailboat,
  Sparkles,
  ScrollText,
  Info,
} as const;

const LagerHistorySection = () => {
  const [lagerIndex, setLagerIndex] = useState(0);
  const selectedLager = LagerList[lagerIndex];

  if (!selectedLager) {
    return null;
  }

  return (
    <div className="flex flex-col w-full items-center mt-20" >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl pb-20" >
        Tidigare läger
      </h2>

      < div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5" >
        {
          LagerList.map((lager, index) => {
            const Icon = iconMap[lager.icon as keyof typeof iconMap];

            return (
              <button
                key={index}
                type="button"
                onClick={() => setLagerIndex(index)}
                className="flex flex-col items-center gap-2">
                {Icon && <Icon size={60} strokeWidth={1.5} />}
                <p className="text-lg" > {lager.title} </p>
              </button>
            );
          })}
      </div>

      <LagerIntro lager={selectedLager} />
    </div>
  );
};

export default LagerHistorySection;