import Image from 'next/image';

const Values = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-4 md:px-10 gap-3 md:gap-8 lg:gap-14">
        <div className="flex flex-col justify-start flex-1/2 order-2 lg:order-1">
          <h2 className="text-text-subtitle text-xl sm:text-2xl my-5 pb-3">
            Vad vi gör och våra värderingar
          </h2>
          <p className="text-white sm:text-lg">
            Vi är religiöst och politisk obundna, och medlem i Svenska
            Scoutförbundet, som med ca 65.000 medlemmar är en av Sveriges
            största ungdomsorganisationer. Målet med vår verksamhet är att ge
            barn och ungdomar möjligheten att uppleva naturen, båtlivet,
            sjömanskapet, utmaningarna och - framförallt - kamratskapet.
            Grundidén är Learning by doing.
          </p>
          <p className="my-5 md:my-10 text-text-subtitle sm:text-lg">
            Inom scouterna finns ingen avbytarbänk! / Anonym ledare på HSS
          </p>
          <div className="flex justify-center md:justify-end"></div>
        </div>

        <Image
          src="/img/commitments/commitments.jpeg"
          alt="Image hand"
          width={350}
          height={270}
          className="w-full h-auto flex-1/2 order-1 lg:order-2 rounded-sm"
        />
      </div>
    </>
  );
};

export default Values;
