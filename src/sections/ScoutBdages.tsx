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
          Scouternas märkessystem är ett stöd för ledare och scouter att planera och genomföra scoutprogrammet på ett sätt som hjälper scouter att växa som personer. Märkena gör det enklare att koppla ihop kunskap, upplevelser och mål i scoutverksamheten.
          <br />
          Efter ett genomfört projekt, en termin eller när scouterna har lärt sig något nytt fungerar ett märke som ett minne av det ni gjort tillsammans.
        </p>
        <p>
          Ett märke är därför mycket mer än bara en tygbit. Det blir ett bevis på vad du har lärt dig, vad du har provat på och vilka äventyr du har varit med om tillsammans med din patrull eller avdelning.
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
          På scoutdräkten finns det bestämda platser för olika typer av märken. Deltagande-, behörighets-, bevis- och intressemärken placeras på vänster ärm, medan patrullmärke och åldersgruppsmärke sys fast på höger bröstficka. Sverige-, Europa- och världsorganisationsmärkena sitter högst upp på höger ärm.
        </p>

        <h3 className="text-text-subtitle sm:text-lg md:text-xl py-5">
          Specifika märken för sjöscouter
        </h3>
        <p>
          Som sjöscout finns det också särskilda märken som hör till sjö- och vattenverksamheten. De visar tillhörighet, intresse och ibland också vilka kunskaper eller färdigheter du har tränat på inom verksamheten.
        </p>

        <Image
          src="/img/badges/sea​-scout-badges.png"
          alt="Sjö och Vatten-märken"
          width={580}
          height={178}
          className="mt-6 sm:mt-8 w-full max-w-120 h-auto flex mx-0"
        />

        <h3 className="text-text-subtitle sm:text-lg md:text-xl py-5">
          Alla scoutmärken
        </h3>
        <p>
          Det finns många olika märken i Scouterna, till exempel tillhörighetsmärken, deltagandemärken, behörighetsmärken, bevismärken och intressemärken. Varje kategori har sin egen betydelse, och tillsammans visar de både vad du tillhör och vad du har utvecklat under din tid i Scouterna.
        </p>

        <div className="my-6 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="/pdf/Markbart-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-text-link hover:underline underline-offset-4 decoration-0">
            Läs hela märkesguiden
          </Link>
        </div>

      </div>
    </section>
  )
}
export default ScoutBadges;