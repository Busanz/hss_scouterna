'use client';

import Image from "next/image";

const LagerSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 my-5 sm:my-10 md:my-20">
      <div className="flex flex-col justify-start flex-1 order-2 px-4 md:px-0 lg:order-1">
        <h1 className="text-xl sm:text-2xl md:text-3xl">Läger</h1>
        <p className="my-5 sm:text-lg leading-relaxed">
          Läger är årets absoluta höjdpunkt för hela kåran. Varje sommar packar
          vi ryggsäckarna, lämnar vardagen bakom oss och ger oss ut på äventyr
          tillsammans. Det är dagar fyllda av gemenskap, skratt, lägerbål, nya
          utmaningar och minnen som stannar kvar långt efter att tältet är
          nedpackat.
        </p>

        <p className="mb-5 sm:text-lg leading-relaxed">
          Genom åren har HSS deltagit i många fantastiska läger och eskadrar
          både stora och små. Här kan du läsa om tidigare äventyr, inspireras
          och kanske minnas tillbaka om du själv varit med.
        </p>
      </div>

      <div className="basis-1/2 order-1 lg:order-2">
        <Image
          src="/img/intro-section/lager.png"
          alt="Image Scout Leader"
          width={350}
          height={270}
          className="w-full h-auto rounded-sm"
        />
      </div>
    </div>
  );
};

export default LagerSection;