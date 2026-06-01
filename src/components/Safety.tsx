import Image from "next/image"

const Safety = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-3 md:gap-8 lg:gap-14">                      
            <Image
                src="/img/ourboats-section/DSCF1955.jpg"
                alt="Image boats and scouts"
                width={350}
                height={270}
                className="w-full h-auto flex-1/2 order-1 rounded-sm"
            />
            <div className="flex flex-col justify-start flex-1/2 order-2 lg:order-1">
                <h1 className=" text-xl sm:text-2xl md:text-3xl my-5 pb-3">
                    Säkerhet and information
                </h1>
                <p className="my-5 sm:text-lg">
                    Flytväst ska alltid användas. Det finns en anledning till det, och alla måste följa denna policy.
                    Säkerhet är det viktigaste.
                </p>
                <a  className="my-5 px-4 py-2 w-fit rounded-sm text-white bg-primary hover:bg-secondary hover:text-primary"
                    href="https://www.scouterna.se/saker-scout/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Läs mer om säkerhet
                </a>
            </div>
        </div>
    )
}

export default Safety