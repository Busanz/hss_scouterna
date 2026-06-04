const GoodToHave = () => {
    return (
        <section className="flex flex-col w-full h-full items-center mb-5 sm:mb-10 md:mb-20">
            <div className="flex flex-col w-full max-w-360 px-4 md:px-6 lg:px-10">
                <div className="sm:px-6 md:px-8">
                    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl pb-4">
                        Bra att ha
                    </h2>
                </div>
                <hr className="mx-auto h-px w-full opacity-90 bg-text-subtitle" />
                <h3 className="text-primary sm:text-lg md:text-xl py-6">
                    Saker som är bra att ha när du varit medlem ett tag
                </h3>
                <div className="color-background px-4" >
                    <ul className="list-disc text-black text-sm sm:text-base">
                        <li>Scoutdräkt (T-shirt, piké, eller scoutskjorta med halsduk)</li>
                        <li>Liggunderlag</li>
                        <li>Sovsäck</li>
                        <li>Ett par vandringsskor, stövlar eller kängor</li>
                        <li>Matbestick</li>
                        <li>Oöm tallrik eller kåsa att äta från</li>
                        <li>Vattenflaska</li>
                        <li>Regnkläder</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default GoodToHave;


