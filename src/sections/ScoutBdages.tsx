import Image from "next/image";
import Link from "next/link";

const ScoutBadges = () => {
  return (
    <section className=" mt-4 bg-primary text-text-primary rounded">
      <div className="max-w-360 mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20">
        <h2 className="text-center text-2xl sm:text-4xl lg:text-3xl">
          Scoutmärken
        </h2>
        <p className="text-center text-text-subtitle mt-2 text-lg">
          Märken som berättar en historia
        </p>

        <p className="mt-8 sm:mt-12 text-base ">
          Scouternas märkessystem är ett stöd för att hjälpa ledare och scouter att planera och genomföra scoutprogrammet och därigenom uppmuntra den personliga utvecklingen. 
          <br />
          Efter ett genomfört projekt, en viss termin eller när scouterna lärt sig något tillsammans fungerar ett märke eller någon annan symbol som ett minne.
        </p>
        <p className="mt-4 sm:mt-6 text-base">
          På det sättet är märket eller symbolen så mycket mer än själva tygbiten, det är en historia som hjälper dig att minnas allla äventyr och vad du har lärt dig på vägen.
        </p>

        <hr className="mt-8 mb-6 sm:mt-12 sm:mb-8 border-text-primary" />
        <h3 className="text-text-subtitle mb-4 sm:mb-6 text-sm sm:text-2xl">
          Alla märken har sin plats
        </h3>

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
          <Image
            src="/img/badges/badge-front.png"
            alt="Scoutskjorta framsida"
            width={500}
            height={400}
            className="w-full max-w-120 h-auto"
          />
          <Image
            src="/img/badges/badge-sides.png"
            alt="Scoutskjorta sidovyer"
            width={700}
            height={300}
            className="w-full max-w-170 h-auto"
          />
        </div>

        <p className="mt-8 sm:mt-10 text-base ">
          Det finns specifika platser för varje märke på scoutskjortan,
          ovan är övergripande guide på placeringar. 
          Besök nedan länk för att läsa mer om placeringar och riktlinjer. 
        </p>

        <div className="m-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <div className="btn bg-text-secondary text-text-primary text-center cursor-auto">
            Placering
          </div>
          <Link href="#" className="btn bg-text-secondary text-text-primary text-center">
            Ladda ner PDF
          </Link>
        </div>

        <h3 className="text-text-subtitle mt-12 sm:mt-16 mb-4 sm:mb-6 text-base sm:text-2xl">
          Specifika märken för sjöscouter
        </h3>
        <p className="text-base">
          Dummytext: Som Sjöscout har vi specifika märken, lorem ipsum
        </p>

        <Image
          src="/img/badges/sea​-scout-badges.png"
          alt="Sjö och Vatten-märken"
          width={580}
          height={178}
          className="mt-6 sm:mt-8 w-full max-w-120 h-auto flex justify-center mx-auto"
        />

        <div className="m-6 sm:mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <div className="btn bg-text-secondary text-text-primary text-center cursor-auto">
            Sjö och Vatten
          </div>
          <Link href="/pdf/water-scout.pdf" 
                target= "-blank"
                rel="noopener noreferrer"
                className="btn bg-text-secondary text-text-primary text-center">
            Ladda ner PDF
          </Link>
        </div>

        <h3 className="text-text-subtitle mt-12 sm:mt-16 mb-4 sm:mb-6 text-base sm:text-2xl">
          Alla scoutmärken
        </h3>
        <p className="text-base">
          Det finns massor med olika märken, deltagandemärken ser man på avdelnings-sidan, 
          med denna länk kan man se hela märkesbanken på scouternas hemsida.
        </p>

        <div className="m-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4 sm:p-2">
          <div className="btn bg-text-secondary text-text-primary text-center cursor-auto">
            Se hela Märkesbanken
          </div>
          <Link href="#" className="btn bg-text-secondary text-text-primary text-center">
            Ladda ner PDF
          </Link>
        </div>

      </div>
    </section>
  )
}
export default ScoutBadges;