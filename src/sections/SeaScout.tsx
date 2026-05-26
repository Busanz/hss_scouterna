import OurBoats from "@/components/OurBoats"


const SeaScout = () => {
    return (
        <section className="flex flex-col w-full h-full items-center my-10 lg:my-20">
            <div className="flex flex-col w-full max-w-360 rounded-sm pb-20 p-10 bg-primary">
                <div className="flex flex-col w-full my-16">
                    <h1 className="text-center text-text-primary mt-8">
                        Sjöscout
                    </h1>
                    <p className=" text-text-primary md:px-20 pb-10">
                        At vara sjöscout innebär i grunden sammma sak som att vara vanlig scout, 
                        att lära sig genom att göra samarbeta och visa hänsyn, men vattnet är våra framsta klassrum.
                    </p>
                    <h3 className="text-center text-2xl mt-8 text-[#76cef4]">
                        Vattnet som fokus
                    </h3>
                    <hr className="my-8 h-[0.5px] w-full text-[#76cef4]" />
                    <div className=" text-text-primary md:px-20">
                        <p>Den största skillnaden är att aktiviteterna under den varma halvan av året nästan uteslutande sker på sjön.</p>
                        <ul className="list-disc m-5 md:mx-5">
                            <li>
                                Segling: Man lär sig hantera olika typer av båtar, från små jollar till större kölbåtar. 
                                Man tränar på att kryssa, länsa och hantera vindar.
                            </li>
                            <li>
                                Sjömanskap: Det innefattar allt från knopar (stekar) och splitsning till att kunna navigera med sjökort, 
                                kompass och förstå väderleksrapporter.
                            </li>
                            <li>
                                Säkerhet: Sjösäkerhet är a och o. Man lär sig simma med kläder, hantera flytvästar, 
                                hur man agerar om någon faller överbord och allmänt "vett på sjön".
                            </li>
                        </ul>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Iusto aliquid rerum voluptatem ab quia vitae ratione aut fugit eveniet id necessitatibus 
                            totam voluptates asperiores, natus quod delectus minus a accusamus.
                        </p>
                    </div>
                </div>
            </div>
            <OurBoats />
        </section>
    )
}

export default SeaScout