'use client';

import { Tent, Ship, Sailboat, Sparkles, ScrollText } from "lucide-react";
import { LagerItem } from "@/types/lager";

type LagerIntroProps = {
  lager: LagerItem;
};

const LagerIntro: React.FC<LagerIntroProps> = ({ lager }) => {
  const iconMap = {
    Tent,
    Ship,
    Sailboat,
    Sparkles,
    ScrollText,
  } as const;

  const Icon = iconMap[lager.icon as keyof typeof iconMap];

  return (
    <div className="flex flex-col md:flex-row w-full justify-center gap-10 px-5 md:px-10 py-10 md:py-20">
      <div className="flex items-center justify-center w-40 h-40 rounded-sm bg-primary/10">
        {Icon && <Icon size={100} strokeWidth={1.5} />}
      </div>

      <div className="w-full max-w-3xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl pb-5">{lager.title}</h1>
        <h2 className="text-xl sm:text-2xl">{lager.subtitle}</h2>

        <p className="sm:text-lg pt-4 whitespace-pre-line">
          {lager.description}
        </p>

        <div className="mt-6 space-y-2 text-sm sm:text-base opacity-90">
          <p><strong>När:</strong> {lager.details.when}</p>
          <p><strong>Var:</strong> {lager.details.where}</p>
          <p><strong>Ålder:</strong> {lager.details.age}</p>
        </div>
      </div>
    </div>
  );
};

export default LagerIntro;