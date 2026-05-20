import Image from "next/image"

const historyImages = [
    "/images/history/mysetgrundsattning1965.png",
    "/images/history/myset.png",
    "/images/history/myset1.png",
    "/images/history/myset2.png"
]

const Story = () => {
    return (
        <>
            <div className="px-4 sm:px-8 md:px-16 lg:px-32 font-[Montserrat]">
                    <p className="text-[#003660] text-lg my-8 font-semibold">
                        Från då till nu
                    </p>
                    <p className="ms:text-lg">
                        Söndagen den 28 Januari 1968 invigdes Myset.<br />
                        Under tre år hade då HSS's Föräldraförening arbetat på stugan.
                    </p>
                    <br />
                    <p className="ms:text-lg">
                        Bygget kostade nära 50.000 kr, dessa pengar hade samlats in på basarer och lotterier. 
                        På invigningsdagen närvarade nära 400 förväntansfulla scouter och föräldrar. 
                        De fick bevittna när FF's ordförande Agne Stavegren formellt lämnade över nyckeln till HSS's ordförande Lennart Carlbom.
                    </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-8 md:grid-cols-4 md:px-16 lg:px-32">
                {historyImages.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt="Historisk bild"
                        width={250}
                        height={150}
                        className="h-auto w-full"
                    />  
                ))}
            </div>
        </>
    )
}

export default Story 

