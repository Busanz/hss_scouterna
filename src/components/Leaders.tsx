import Image from "next/image"

const Leaders = () => {
    return (
         <div className="flex flex-col pt-20 lg:flex-row gap-8 md:gap-10 lg:gap-14">
            <div className="flex flex-col justify-start flex-1/2 order-2 lg:order-1">
                <h1 className=" text-xl sm:text-2xl md:text-3xl">
                    För ledare
                </h1>
                <p className="my-5 sm:text-lg">
                    På leda scouting-sidorna hittar du som är scoutledare det du behöver för att skapa rolig och utvecklande scouting.
                </p>
                    <a  className="my-5 px-4 py-2 w-fit rounded-sm text-white bg-primary hover:bg-secondary hover:text-primary"
                        href="https://www.scouterna.se/scout-ledare-kar/leda-scouting/"
                        target="_blank"
                    >
                        Läs mer
                    </a>  
            </div>
        
            <Image
                src="/img/intro-section/bli_scout.png"
                alt="Image Scout Leader"
                width={350}
                height={270}
                className="w-full h-auto flex-1/2 order-1 lg:order-2 rounded-sm"
            />
        </div>
    )
}

export default Leaders