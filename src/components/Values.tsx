import Image from 'next/image';

const Values = () => {
  return (
    <>
      <div className="px-10">
        <h2 className="text-[#76CFF4] text-xl sm:text-2xl my-5 pb-3">
          Vad vi gör och våra värderingar
        </h2>
        <p className="text-white">
          Vi är religiöst och politisk obundna, och medlem i Svenska
          Scoutförbundet, som med ca 65.000 medlemmar är en av Sveriges största
          ungdomsorganisationer. Målet med vår verksamhet är att ge barn och
          ungdomar möjligheten att uppleva naturen, båtlivet, sjömanskapet,
          utmaningarna och - framförallt - kamratskapet. Grundidén är Learning
          by doing.
        </p>
        <p className="my-20 text-white md:text-center">
          Inom scouterna finns ingen avbytarbänk! / Anonym ledare på HSS
        </p>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/img/commitments/hand.png"
            alt="Image hand"
            width={350}
            height={270}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Values;
