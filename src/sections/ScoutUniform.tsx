import "@/app/globals.css"
import Link from "next/link"

const ScoutUniform = () => {
    return (
        <section className="flex flex-col w-full h-full items-center">
            <div className="flex flex-col w-full max-w-360 px-4 md:px-6 lg:px-10">
                <div className="sm:px-6 md:px-8">
                    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl p-4">
                        Scoutdräkt
                    </h2>
                </div>
                <hr className="mx-auto h-px w-full opacity-90 bg-text-subtitle" />
                <div>
                    <h3 className="text-primary sm:text-lg md:text-xl py-6">
                        Scoutdräkten är ett sätt att visa att vi alla tillhör Scouterna.
                    </h3>
                    <p>
                        Scoutdräkten skapar gemenskap, stärker vår identitet och är en del av vårt symboliska ramverk. 
                        Scoutdräkt används i olika utföranden i hela världen och visar på att vi tillhör en global rörelse.
                    </p>
                    <p>
                        I Sverige består scoutdräkten av tre plagg, t-shirt, piké och skjorta. 
                        Det är på skjortan märken fästs som berättar vad vi har gjort, vilka intressen vi har och våra tillhörigheter.
                    </p>
                </div>
                <div className="text-primary my-4">
                    I Scoutshopen finns det olika typer av scoutkläder, där du kan läsa mer om dem, hur de används och varför vi har dem.
                </div>
                <div className="flex my-4">
                    <Link href="https://www.scoutshop.se/"
                        target="_blank" rel="noopener noreferrer"
                        className="btn bg-primary rounded-sm py-2 text-white hover:bg-secondary hover:text-primary">
                        Till Scoutshopen
                    </Link>
                </div>
            </div>
        </section >
    )
}
export default ScoutUniform
