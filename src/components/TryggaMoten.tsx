import Image from "next/image"

const TryggaMoten = () => {
    return (
              <div className="flex flex-col pt-20 lg:flex-row gap-8 md:gap-10 lg:gap-14">
                <div className="flex flex-col justify-start flex-1/2 order-2 lg:order-1">
                    <h1 className=" text-xl sm:text-2xl md:text-3xl">
                        För föräldrar
                    </h1>
                    <p className="my-5 sm:text-lg">
                        Scouterna ska vara en trygg plats där du kan utforska och utmanas på dina egna villkor.
                        Därför jobbar vi med Trygga Möten. Målet är att Scouterna ska vara fritt från kränkningar och övergrepp, 
                        i alla former.
                    </p>
                        <a  className="my-5 px-4 py-2 w-fit rounded-sm text-white bg-primary hover:bg-secondary hover:text-primary"
                            href="https://www.scouterna.se/trygga-moten/"
                            target="_blank"
                        >
                            Läs mer om Trygga Möten
                        </a>
                
                </div>
        
                <Image
                  src="/img/intro-section/for_foraldrar.png"
                  alt="Image hand"
                  width={350}
                  height={270}
                  className="w-full h-auto flex-1/2 order-1 lg:order-2 rounded-sm"
                />
              </div>
    )
}

export default TryggaMoten