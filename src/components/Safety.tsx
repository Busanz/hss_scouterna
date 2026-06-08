import Image from "next/image";

const Safety = () => {
  return (
      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 my-5 sm:my-10 md:my-20">                      
        <Image
          src="/img/ourboats-section/DSCF1955.jpg"
          alt="Image boats and scouts"
          width={350}
          height={270}
          className="w-full flex-1/2 h-auto order-1 rounded-sm"
        />
        <div className="flex flex-col justify-start w-full lg:w-1/2 order-2 px-4 md:px-0 lg:order-1">
          <h2 className=" text-xl sm:text-2xl md:text-3xl">
            Sjösäkerhet
          </h2>
          <p className="my-5 sm:text-lg">
            Eftersom vi är en sjöscoutkår är vatten en naturlig del av vår verksamhet. Säkerheten kommer alltid först.
            När vi har aktiviteter på eller nära vatten följer vi våra rutiner för sjösäkerhet. 
            Ledarna informerar om vad som gäller för varje aktivitet, till exempel flytväst, klädsel, 
            samlingstider och om scouten behöver kunna simma för att delta.   
            Har du frågor om vattenvana, simkunnighet eller säkerhet är du alltid välkommen att prata med ledarna.
          </p>
          <p className="sm:text-lg">
            Du som förälder får gärna kontakta ledarna om det är något vi behöver veta för att 
            ditt barn ska få en så bra scoutupplevelse som möjligt. Det kan handla om allergier, 
            mediciner, funktionsvariationer, rädsla för vatten, social oro eller annat som påverkar barnet i gruppen.
          </p>
          <p className="mt-5 sm:text-lg">
            Ju mer vi vet, desto bättre kan vi stötta.
          </p>
        </div>
    </div>
  );
};

export default Safety;