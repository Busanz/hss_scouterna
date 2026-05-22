import Image from "next/image"

type BoatCardProps = {
    image: string,
    name: string,
    years: string;
    description: string,
}

const BoatCardRight = ({image, name, years, description}: BoatCardProps) => {
    return (
        <>
            <div className="flex flex-col gap-6 mb-20 md:mt-20 md:mb-20 md:flex-row md:gap-20">
                <div className="order-1">
                    <p className="font-semibold text-[#003660]">{name}</p>
                    <p className="font-semibold text-[#003660]">{years}</p>
                    <p className="mt-6 font-semibold">Information om båten finns i denna text</p>
                    <p className="my-2">{description}</p>
                </div>

                <div className="md:order-1 md:shrink-0">
                    <Image 
                        src={image}
                        alt={name}
                        width={350}
                        height={270}
                        className="h-auto w-full object-cover"
                    />
                </div>
            </div>
        </>
    )
}

export default BoatCardRight