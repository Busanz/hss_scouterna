import Image from "next/image";
import Link from "next/link";

const ScoutBadges = () => {
  return (
    <section className="flex flex-col w-full h-full items-center my-5 sm:my-10 md:my-20">
      <div className="flex flex-col w-full max-w-360 rounded-sm pb-10 bg-primary text-text-primary px-4 md:px-6 lg:px-10">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl pt-5 pb-3 md:pt-8 md:pb-3">
          Scoutmärken
        </h2>
        <hr className="mx-auto h-px w-full bg-text-subtitle" />
        <div className="text-text-subtitle sm:text-lg md:text-xl py-5">
          <p>
            Märken som berättar en historia
          </p>
        </div>
        <p>
          Scouternas märkessystem är ett stöd för att hjälpa ledare och scouter att planera och genomföra scoutprogrammet och därigenom uppmuntra den personliga utvecklingen.
          <br />
          Efter ett genomfört projekt, en viss termin eller när scouterna lärt sig något tillsammans fungerar ett märke eller någon annan symbol som ett minne.
        </p>
        <p>
          På det sättet är märket eller symbolen så mycket mer än själva tygbiten, det är en historia som hjälper dig att minnas allla äventyr och vad du har lärt dig på vägen.
        </p>

        <h3 className="text-text-subtitle sm:text-lg md:text-xl py-5">
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

        <div className="my-6 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-text-link hover:underline underline-offset-4 decoration-0">
            Ladda ner PDF
          </Link>
        </div>

        <h3 className="text-text-subtitle sm:text-lg md:text-xl py-5">
          Specifika märken för sjöscouter
        </h3>
        <p>
          Som Sjöscout har vi specifika märken.
        </p>

        <Image
          src="/img/badges/sea​-scout-badges.png"
          alt="Sjö och Vatten-märken"
          width={580}
          height={178}
          className="mt-6 sm:mt-8 w-full max-w-120 h-auto flex mx-0"
        />

        <div className="my-6 sm:mt-8 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link href="/pdf/water-scout.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-text-link hover:underline underline-offset-4 decoration-0">
            Ladda ner PDF
          </Link>
        </div>

        <h3 className="text-text-subtitle sm:text-lg md:text-xl py-5">
          Alla scoutmärken
        </h3>
        <p>
          Det finns massor med olika märken, deltagandemärken ser man på avdelnings-sidan,
          med denna länk kan man se hela märkesbanken på scouternas hemsida.
        </p>

        <div className="my-6 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-text-link hover:underline underline-offset-4 decoration-0">
            Ladda ner PDF
          </Link>
        </div>

      </div>
    </section>
  )
}
export default ScoutBadges;