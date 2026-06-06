import Image from "next/image"

const CourseTrygga = () => {
    return (
        <section className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 my-5">
            <div className="flex flex-col justify-start flex-1/2 order-1 lg:order-1">
                <Image
                src="/img/intro-section/om_hss.png"
                alt="Image Scout Leader"
                width={350}
                height={270}
                className="w-full h-auto rounded-sm"
                />
            </div>
            <div className="flex flex-col justify-start flex-1/2 order-2 px-4 md:px-0 lg:order-2">
                <h2 className=" text-xl sm:text-2xl md:text-3xl">
                    Trygga möten
                </h2>
                <div className="my-5 sm:text-lg space-y-3">
                    <p>
                        För att säkerställa att vår egen verksamhet är trygg för barn och unga finns denna webbaserad ledarutbildning. Genom den utbildas scoutledare i hur man skapar en trygg miljö för barn och ungdomar,
                        hur man förebygger övergrepp och hur man beter sig om man tror att någon far illa.
                    </p>
                    <p>
                        Sedan 2013 är det obligatoriskt för alla scoutledare att genomgå utbildningen vart tredje år.
                    </p>
                </div>
                <a  className="my-5 px-4 py-2 w-fit rounded-sm text-white bg-primary hover:bg-secondary hover:text-primary"
                    href="https://www.scouterna.se/trygga-moten/utbildning/"
                    target="_blank"
                >
                    Utbildning Trygga möten
                </a>  
            </div>
        </section>
    )
}

export default CourseTrygga