import "@/app/globals.css"
import Link from "next/link"

const ScoutUniform = () => {
    return (
        <>
            <section className="m-4">
                <div className="p-1 mt-6 sm:px-6 md:px-8">
                    <h2 className="text-center text-2xl  p-4 sm:text-xl md:text-2xl">Scoutdräkt</h2>
                    <h3 className="text-primary text-center sm:text-lg md:text-xl mt-2">Scoutdräkten är ett sätt att visa att vi alla tillhör Scouterna.</h3>
                </div>
                <div className="mx-auto my-8 h-0.5 w-full opacity-90 sm:my-12 bg-text-subtitle" />
                <div>
                    <p className="p-4">Scoutdräkten skapar gemenskap, stärker vår identitet och är en del av vårt symboliska ramverk. Scoutdräkt används i olika utföranden i hela världen och visar på att vi tillhör en global rörelse.</p>
                    <p className="p-4">I Sverige består scoutdräkten av tre plagg, t-shirt, piké och skjorta. Det är på skjortan märken fästs som berättar vad vi har gjort, vilka intressen vi har och våra tillhörigheter. </p>
                </div>
                <div className="p-4 text-primary text-center">
                    I Scoutshopen finns det olika typer av scoutkläder, där du kan läsa mer om dem, hur de används och varför vi har dem.
                </div>
                <div className="flex justify-center mb-4">
                    <Link href="https://www.scoutshop.se/"
                        target="_blank" rel="noopener noreferrer"
                        className="btn bg-gray-500 rounded-lg p-2 text-white text-bold">
                        Till Scoutshopen
                    </Link>
                </div>
            </section >
        </>
    )
}
export default ScoutUniform
