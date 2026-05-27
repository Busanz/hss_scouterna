import { CurvedBorderBottomSvg, CurvedBorderTopSvg } from "@/assets/svg";

export default function BilScoutsection() {
  return (
    <section className="flex flex-col w-full h-full items-center justify-center">
      <div className="flex flex-col w-full max-w-360 h-full items-center justify-center bg-primary">
        <div className="w-full">
          <CurvedBorderTopSvg />
        </div>
        <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 sm:px-6 lg:px-8 gap-10">
          <div className="relative w-full max-w-4xl h-64 rounded-xl overflow-hidden gap-10 p-10">
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
          <div className="flex flex-col items-center justify-center gap-10 px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-xl font-bold text-white">
              Är du sugen på scouting och segling? Då ska du anmäla ditt
              intresse till HSS.
            </p>

            <p className="text-xl font-normal text-white">
              Oavsett om du är 8 år eller 100 år är du välkommen. För att anmäla
              dig till kölistan fyller du in en intresseanmälan nedan. Vi
              kontaktar dig när det blir en plats ledig.
            </p>

            <button
              className="w-35 bg-black/60 hover:bg-secondary-hover 
            text-white font-bold py-2 px-4 rounded-2xl cursor-pointer drop-shadow-[0_4px_4px_rgba(0,0,0,0.24)]"
            >
              Gå med!
            </button>
          </div>
        </div>
        <div className="w-full">
          <CurvedBorderBottomSvg />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 sm:px-6 lg:px-8 gap-10">
        <div className="w-full max-w-4xl h-64 rounded-xl overflow-hidden gap-10">
          <img
            src="/img/bil-scout/bilscout2.svg"
            alt="Scouts lookout"
            className="inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="w-full  max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-2xl font-normal text-black my-10 text-center tracking-wide">
            En trygg &amp; inkluderande miljö
          </p>
          <p className="text-xl font-normal text-black my-10">
            Vi jobbar för att alla ska känna sig trygga och inkluderade på HSS.
          </p>

          <p className="text-xl font-normal text-black my-10">
            Mer information och fyll på content här, lorem ipsum.
          </p>
        </div>
      </div>
    </section>
  );
}
