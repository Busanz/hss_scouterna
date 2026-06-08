import Image from "next/image";

const TryggaMoten = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 my-5 sm:my-10 md:my-20">
      <div className="w-full lg:w-1/2 order-2 lg:order-1 px-4 md:px-0">
        <h1 className=" text-xl sm:text-2xl md:text-3xl">
          För föräldrar
        </h1>
        <div>
          <p className="mt-5 sm:text-lg">
            Som förälder är du en viktig del av scoutlivet. 
            Här har vi samlat information om hur verksamheten fungerar, vad ditt barn behöver ha med 
            sig och hur du som vuxen kan stötta kåren.
          </p>
          <p className="sm:text-lg">
            Hos oss får barn och unga uppleva scouting på riktigt - med naturen, 
            Mälaren, båtarna och gemenskapen som en självklar del av äventyret. 
            Scouterna får öva på samarbete, ansvar, friluftsliv och sjömanskap i en 
            trygg miljö där alla får växa i sin egen takt.
          </p>
          <p className="sm:text-lg">
            Alla barn och unga ska känna sig trygga i Scouterna. 
            Vi arbetar för en verksamhet där scouterna blir sedda, lyssnade på och respekterade.
            Våra ledare är ideellt engagerade vuxna och unga vuxna som planerar och 
            genomför verksamheten med scouternas bästa i fokus. 
            Scouternas utbildning Trygga möten är en viktig del av arbetet för en trygg scoutmiljö.
          </p>
        </div>
        <a className="inline-block mt-10 px-4 py-2 w-fit rounded-sm text-white bg-primary hover:bg-secondary hover:text-primary"
          href="https://www.scouterna.se/trygga-moten/"
          target="_blank">
          Läs mer om Trygga Möten
        </a>   
      </div>
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <Image
          src="/img/intro-section/for_foraldrar.png"
          alt="Scouts"
          width={350}
          height={270}
          className="w-full h-auto rounded-sm object-cover"
        />
      </div>
    </div>
  );
};

export default TryggaMoten;