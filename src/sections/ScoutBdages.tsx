import Image from "next/image";
import Link from "next/link";

const ScoutBadges = () => {
  return (
    <section className=" mt-4 bg-primary text-text-primary rounded">
      <div className="max-w-360 mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20">
        <h2 className="text-center text-2xl sm:text-4xl lg:text-3xl">
          Scout badges
        </h2>
        <p className="text-center text-text-subtitle mt-2 text-lg">
          Badges that tell a story.
        </p>

        <p className="mt-8 sm:mt-12 text-base ">
          The Scout badge system is a support to help leaders and scouts plan and implement the Scout program and thereby encourage personal development.
          <br />
          After a completed project, a certain term or when scouts have learned something together, a badge or another symbol functions as a memory.
        </p>
        <p className="mt-4 sm:mt-6 text-base">
          On this way, the badge or symbol is much more than the fabric itself, it is a story that helps you remember all the adventures and what you have learned on the way.
        </p>

        <hr className="mt-8 mb-6 sm:mt-12 sm:mb-8 border-text-primary" />
        <h3 className="text-text-subtitle mb-4 sm:mb-6 text-sm sm:text-2xl">
          All badges have their place
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
          There are specific places for each badge on the Scout uniform, above is
          an overall guide on placement. Visit the link below to read more about
          placement and guidelines.
        </p>

        <div className="m-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <div className="btn bg-text-secondary text-text-primary text-center cursor-auto">
            Placement
          </div>
          <Link href="#" className="btn bg-text-secondary text-text-primary text-center">
            Download PDF
          </Link>
        </div>

        <h3 className="text-text-subtitle mt-12 sm:mt-16 mb-4 sm:mb-6 text-base sm:text-2xl">
          Specific badges for sea scouts
        </h3>
        <p className="text-base">
          Dummytext: As a Sea Scout, we have specific badges, .
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
            Lake and Water
          </div>
          <Link href="/pdf/water-scout.pdf" 
                target= "-blank"
                rel="noopener noreferrer"
                className="btn bg-text-secondary text-text-primary text-center">
            Download PDF
          </Link>
        </div>

        <h3 className="text-text-subtitle mt-12 sm:mt-16 mb-4 sm:mb-6 text-base sm:text-2xl">
          All Scout Badges
        </h3>
        <p className="text-base">
          There are many different badges, participation badges can be seen on the troop page,
          with this link you can see the entire badge collection on the Scouts' website.
        </p>

        <div className="m-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4 sm:p-2">
          <div className="btn bg-text-secondary text-text-primary text-center cursor-auto">
            See the entire Badge Collection
          </div>
          <Link href="#" className="btn bg-text-secondary text-text-primary text-center">
            Download PDF
          </Link>
        </div>

      </div>
    </section>
  )
}
export default ScoutBadges;