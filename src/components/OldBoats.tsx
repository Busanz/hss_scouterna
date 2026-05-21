import BoatCardLeft from "./BoatCardLeft"
import BoatCardRight from "./BoatCardRight"

const OldBoats = () => {
    return (
        <>
            <div className="px-4 sm:px-8 md:px-16 lg:px-32 font-[Montserrat]">
                <p className="text-[#003660] text-lg mt-16 mb-8 font-semibold md:mt-24">
                    Våra gamla båtar
                </p>

                <div className="ms:text-lg">
                    <BoatCardLeft 
                        image="/images/history/boats.jpg"
                        name="Båtnamn: "
                        years="I HSS ägo: xxxx-xxxx"
                        description="Ingalunda var en Plymsnäcka byggd på Neglingevarvet gissningsvis på 20- eller 30-talet. 
                                    Hon köptes 1961 av Drakarna, som hade fått skrota hennes systerfartyg Någorlunda. 
                                    Hon förde 16 kvadratmeter segel på en gaffelrigg. Hon var byggd på planka och lade sig villigt trots att pikhornet inte var särdeles hög över vattnet. 
                                    Hon finns förevigad på kort. Hon var den första av kårens båtar som försågs med motor, det var 1963. Samma år fick också Rubinen motor. 
                                    De flesta av båtarna var således motorlösa långt in på 70-talet."
                    />

                    <BoatCardRight 
                        image="/images/history/boats.jpg"
                        name="Båtnamn: "
                        years="I HSS ägo: xxxx-xxxx"
                        description="Ingalunda var en Plymsnäcka byggd på Neglingevarvet gissningsvis på 20- eller 30-talet. 
                                    Hon köptes 1961 av Drakarna, som hade fått skrota hennes systerfartyg Någorlunda. 
                                    Hon förde 16 kvadratmeter segel på en gaffelrigg. Hon var byggd på planka och lade sig villigt trots att pikhornet inte var särdeles hög över vattnet. 
                                    Hon finns förevigad på kort. Hon var den första av kårens båtar som försågs med motor, det var 1963. Samma år fick också Rubinen motor. 
                                    De flesta av båtarna var således motorlösa långt in på 70-talet."
                    />

                    <BoatCardLeft 
                        image="/images/history/boats.jpg"
                        name="Båtnamn: "
                        years="I HSS ägo: xxxx-xxxx"
                        description="Ingalunda var en Plymsnäcka byggd på Neglingevarvet gissningsvis på 20- eller 30-talet. 
                                    Hon köptes 1961 av Drakarna, som hade fått skrota hennes systerfartyg Någorlunda. 
                                    Hon förde 16 kvadratmeter segel på en gaffelrigg. Hon var byggd på planka och lade sig villigt trots att pikhornet inte var särdeles hög över vattnet. 
                                    Hon finns förevigad på kort. Hon var den första av kårens båtar som försågs med motor, det var 1963. Samma år fick också Rubinen motor. 
                                    De flesta av båtarna var således motorlösa långt in på 70-talet."
                    />
                </div>
            </div>
        </>
    )
}

export default OldBoats