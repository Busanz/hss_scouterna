"use client";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

export default function BilScoutsection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex flex-col w-full h-full my-5 md:my-10 items-center justify-center">
      <div className="flex flex-col md:flex-row  max-w-360 items-center justify-center w-full px-4 py-8 sm:px-6 lg:px-8 gap-5 bg-primary">
        <div className="flex flex-col items-center justify-center gap-5 px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-xl font-bold text-white">
            Är du sugen på scouting och segling? Då ska du anmäla ditt intresse
            till HSS.
          </p>

          <p className="text-l font-normal text-white items-center">
            Oavsett om du är 8 år eller 100 år är du välkommen. För att anmäla
            dig till kölistan fyller du in en intresseanmälan nedan. Vi
            kontaktar dig när det blir en plats ledig.
          </p>

          <button
            className="bg-white hover:bg-secondary-hover 
            text-primary font-normal py-1.5 px-4 rounded-xl cursor-pointer drop-shadow-[0_4px_4px_rgba(0,0,0,0.24)]"
            onClick={() => setIsModalOpen(true)}
          >
            Gå med!
          </button>
        </div>
        <div className="relative w-full max-w-4xl h-64 rounded-xl overflow-hidden gap-5 p-10">
          <img
            src="/img/bil-scout/bilscout.svg"
            alt="Scouts looking at a map"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/35 w-3/4 max-w-lg rounded-xl py-4 flex items-center justify-center">
              <h1 className="text-white text-5xl mb-0! font-medium tracking-wide">
                Bli scout
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  max-w-360 items-center justify-center w-full px-4 py-8 sm:px-6 lg:px-8 gap-5">
        <div className="w-full max-w-4xl h-64 rounded-xl overflow-hidden gap-5">
          <img
            src="/img/bil-scout/bilscout2.svg"
            alt="Scouts lookout"
            className="inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xl font-normal text-primary text-center tracking-wide">
            En trygg &amp; inkluderande miljö
          </p>
          <p className="text-l font-normal text-primary my-5 text-center">
            Vi jobbar för att alla ska känna sig trygga och inkluderade på HSS.
            Vår verksamhet bygger på gemenskap, glädje och ömsesidig respekt.
          </p>

          <a
            href="https://youtu.be/_mMZJK1iWYY"
            target="_blank"
            className="text-l font-normal text-primary my-5 text-center underline"
          >
            Se filmen om Ligia &quot;Jag är scout&quot;
          </a>
        </div>
      </div>

      <Modal
        url="https://www.scoutnet.se/register/in/group/764"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
