'use client';

import OurBoats from '@/components/OurBoats';
import { AnchorSvg } from '@/assets/svg';
import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeUpAnimation } from '@/utils/animation';

const seaScoutImg = [
  '/img/ourboats-section/DSCF3070.jpg',
  '/img/ourboats-section/DSCF1955.jpg',
  '/img/ourboats-section/DSCF3092.jpg',
];

const SeaScout = () => {
  return (
    <section className="flex flex-col w-full h-full items-center my-10 lg:my-20">
      <div className="flex flex-col w-full max-w-360 rounded-sm  px-4 py-8 sm:px-6 lg:px-8 bg-primary">
        <div className="flex flex-col justify-center items-center w-full">
          <motion.h1
            {...fadeUpAnimation}
            className="text-center text-2xl sm:text-3xl lg:text-4xl mt-8 text-text-primary px-1 py-5 md:py-10"
          >
            Sjöscout
          </motion.h1>
          <p className="w-full text-text-primary sm:text-lg max-w-6xl pb-10">
            At vara sjöscout innebär i grunden sammma sak som att vara vanlig
            scout, att lära sig genom att göra samarbeta och visa hänsyn, men
            vattnet är våra framsta klassrum.
          </p>
          <div className="flex items-center justify-center gap-6">
            <h3 className="text-center text-lg md:text-xl text-text-subtitle">
              Vattnet som fokus
            </h3>
            <AnchorSvg />
          </div>
          <hr className="my-6 h-[0.5px] w-full text-text-subtitle" />
          <div className=" text-text-primary mt-2 md:px-20">
            <p className="sm:text-lg">
              Den största skillnaden är att aktiviteterna under den varma halvan
              av året nästan uteslutande sker på sjön.
            </p>
            <ul className="list-disc m-5 md:mx-5 sm:text-lg pb-5">
              <li className="pb-3">
                Segling: Man lär sig hantera olika typer av båtar, från små
                jollar till större kölbåtar. Man tränar på att kryssa, länsa och
                hantera vindar.
              </li>
              <li className="pb-3">
                Sjömanskap: Det innefattar allt från knopar (stekar) och
                splitsning till att kunna navigera med sjökort, kompass och
                förstå väderleksrapporter.
              </li>
              <li className="pb-3">
                {`Säkerhet: Sjösäkerhet är a och o. Man lär sig simma med kläder, hantera flytvästar, hur man agerar om någon faller överbord och allmänt "vett på sjön".`}
              </li>
            </ul>
            <div className="grid grid-cols-1 m-5 gap-6 sm:grid-cols-3">
              {seaScoutImg.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="båt"
                  width={250}
                  height={150}
                  className="h-auto w-full rounded-[5px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <OurBoats />
    </section>
  );
};

export default SeaScout;
