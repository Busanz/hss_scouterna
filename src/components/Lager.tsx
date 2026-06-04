import Image from "next/image"

const Lager = () => {
    return (
         <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 my-5 sm:my-10 md:my-20">
            <div className="flex flex-col justify-start flex-1/2 order-2 px-4 md:px-0 lg:order-1">
                <h1 className=" text-xl sm:text-2xl md:text-3xl">
                    Läger
                </h1>
                <p className="my-5 sm:text-lg">
                  På våra läger får scouterna uppleva äventyr, gemenskap och friluftsliv på riktigt. Här tränar vi samarbete, ansvar och problemlösning samtidigt som vi har roligt, upptäcker naturen, lär oss nya saker och skapar minnen tillsammans.
                </p>
                    <a  className="my-5 px-4 py-2 w-fit rounded-sm text-white bg-primary hover:bg-secondary hover:text-primary"
                        href="https://www.scouterna.se/aventyr-och-lager/arrangemang-i-sverige/lokala-hajker-och-lager/"
                        target="_blank"
                    >
                        Läs mer
                    </a>  
            </div>
        
            <Image
                src="/img/intro-section/lager.png"
                alt="Image Scout Leader"
                width={350}
                height={270}
                className="w-full h-auto flex-1/2 order-1 lg:order-2 rounded-sm"
            />
        </div>
    )
}

export default Lager