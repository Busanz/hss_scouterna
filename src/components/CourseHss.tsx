import Image from "next/image"

const CourseHss = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 my-5 sm:my-10 md:my-20">
            <div className="flex flex-col justify-start flex-1/2 order-2 px-4 md:px-0 lg:order-1">
                <h2 className=" text-xl sm:text-2xl md:text-3xl">
                    ALU - Allmän LedarUtbildning
                </h2>
                <div className="my-5 space-y-3">
                    <p className="sm:text-lg/relaxed">
                        ALU är scouternas egna ledarutbildning. Du som fyllt 18 år och har varit assistent på 
                        någon avdelning under minst ett år bör gå kursen.
                    </p>
                    <p className="sm:text-lg/relaxed">
                        Det finns olika typer av ALU kurser. En helvecka på sommaren eller den tredelade kursen där 
                        man går tre helger under tiden oktober, februari och maj.
                    </p>
                    <p className="sm:text-lg/relaxed">
                        Om du har en gedigen scoutbakgrund i HSS så finns det en 
                        risk att kursen inte ger full behållning, då man redan kan mycket.
                    </p>
                    <p className="sm:text-lg/relaxed">
                        Programmet är inriktat på landverksamheten och tar inte upp 
                        problemställningar runt sjöverksamhet.
                    </p>
                </div>
                <div  className="my-5 space-y-3">
                    <p className="sm:text-lg/relaxed">
                        Personliga erfarenheter av kursen:
                    </p>
                    <ul className="list-disc m-5 md:mx-5 sm:text-lg pb-5">
                        <li className="pb-3 text-lg/relaxed">
                            Ypperligt bra att binda nya kontakter med andra kårer/ledare
                        </li>
                        <li className="pb-3 text-lg/relaxed">
                            Intressant att höra om andra kårers problemställningar och program
                        </li>
                        <li className="pb-3 text-lg/relaxed">
                            Många intressanta och väl genomförda programidéer
                        </li>
                        <li className="pb-3 text-lg/relaxed">
                            Bra att reflektera runt scoutrörelsen
                        </li>
                        <li className="pb-3 text-lg/relaxed">
                            Roligt att se nya platser
                        </li>
                        <li className="pb-3 text-lg/relaxed">
                            Skönt att vara scout
                        </li>
                        <li className="pb-3 text-lg/relaxed">
                            Trevlig och mysig stämmning
                        </li>
                        <li className="pb-3 text-lg/relaxed">
                            Bra att få höra om scoutingens ideologi och historia
                        </li>
                        <li className="pb-3 text-lg/relaxed">
                            Perfekt startkurs för nya föräldrar som är på väg att bli ledare
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-start flex-1/2 order-2 md:px-0 lg:order-1">
                <div className="px-4 md:px-0 order-2 lg:order-1">
                    <h2 className="text-xl sm:text-2xl md:text-3xl">
                        SjöLU - SjöLedarUtbildning
                    </h2>
                    <div className="my-5 space-y-3">
                        <p className="sm:text-lg/relaxed">
                            En mycket bra kurs som ger handfast tips på programaktiviteter för oss sjöscouter.
                        </p>
                        <div>
                            <p className="sm:text-lg/relaxed">
                                Skulle du vilja ha sjöprogramtips att ta hem till avdelningen?
                            </p>
                            <p className="sm:text-lg/relaxed">
                                Skulle du vilja känna dig säkrare som sjöscoutledare?
                            </p>
                            <p className="sm:text-lg/relaxed">
                                Vill du samtidigt åka på seglingshajk i Stockholms vackra höstskärgård?
                            </p>
                        </div>
                    </div>
                    <div className="my-5 space-y-3">
                        <p className="sm:text-lg/relaxed">
                            Målet är att deltagarna ska bli bättre sjöscoutledare. Det sker genom att de indelas i patruller och får prova på sjöprogrampass, 
                            för att själva kunna gå hem och genomföra dem på avdelningarna.
                            Dessutom ökas ledarnas självförtroende genom att de lär sig om säkerhetsregler och förbundets stöd.
                        </p>
                        <p className="sm:text-lg/relaxed">
                            Kursen brukar hållas en helg i slutet av september.
                        </p>
                    </div>
                </div>
                <Image
                    src="/img/intro-section/for_foraldrar.png"
                    alt="Image Scout Leader"
                    width={350}
                    height={270}
                    className="w-full h-auto flex-1/2 order-1 lg:order-2 mb-8 lg:mb-0 rounded-sm"
                />            
            </div>
        </section>
    )
}

export default CourseHss