import Image from 'next/image';

const Values = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-4 md:px-10 gap-3 md:gap-8 lg:gap-14">
        <div className="flex flex-col justify-start flex-1/2 order-2 lg:order-1">
          <h2 className="text-text-subtitle text-xl sm:text-2xl my-5 py-3 lg:pt-0">
            Våra engagemang
          </h2>
          <p className="text-white sm:text-lg">
            Hässelby Strands Sjöscoutkår (HSS) är en traditionsrik ideell ungdomsverksamhet med fokus på scouting och båtliv. 
            Vi är religiöst och politisk obundna, och medlem i Svenska
            Scoutförbundet, som med ca 65.000 medlemmar är en av Sveriges
            största ungdomsorganisationer.
          </p> 
          <p className="text-white sm:text-lg my-4">
            Målet med vår verksamhet är att ge
            barn och ungdomar möjligheten att uppleva naturen, båtlivet,
            sjömanskapet, utmaningarna och - framförallt - kamratskapet.
            Grundidén är Learning by doing. Inom scouterna finns ingen avbytarbänk.
          </p>
          <p className="text-white sm:text-lg">
            Scoutkåren bildades 1959 och bedriver verksamheten i en trevlig lokal (kallad Ruffen) 
            vid Mälarens strand i Hässelby. Kåren har omkring 130 glada medlemmar, äger fem segelbåtar, tio optimistjollar, två 2-kronor, snabb följebåt och en stor scoutstuga.
          </p>
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
