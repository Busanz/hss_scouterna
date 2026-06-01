import Image from "next/image"

const Safety = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14">                      
            <Image
                src="/img/ourboats-section/DSCF1955.jpg"
                alt="Image boats and scouts"
                width={350}
                height={270}
                className="w-full h-auto w-1/2 order-1 rounded-sm"
            />
            <div className="flex flex-col justify-start w-full lg:w-1/2 order-2 lg:order-1">
                <h2 className=" text-xl sm:text-2xl md:text-3xl">
                    Säkerhet and information
                </h2>
                <p className="my-5 sm:text-lg">
                    Flytväst ska alltid användas. Det finns en anledning till det, och alla måste följa denna policy.
                    Säkerhet är det viktigaste.
                </p>
                <a  className="my-5 px-4 py-2 w-fit rounded-sm text-white bg-primary hover:bg-secondary hover:text-primary"
                    href="https://www.scouterna.se/saker-scout/"
                    target="_blank"
                >
                    Läs mer om säkerhet
                </a>
            </div>
        </div>
    )
}

export default Safety