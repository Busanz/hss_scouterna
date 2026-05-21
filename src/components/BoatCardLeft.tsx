import Image from "next/image"

type BoatCardProps = {
    image: string,
    name: string,
    years: string;
    description: string,
}

const BoatCardLeft = ({image, name, years, description}: BoatCardProps) => {
    return (
        <>
            <div className="flex flex-col gap-6 mb-20 md:flex-row md:gap-20">
                <div className="md:shrink-0">
                    <Image 
                        src={image}
                        alt={name}
                        width={350}
                        height={270}
                        className="h-auto w-full object-cover"
                    />
                </div>

                <div>
                    <p className="font-semibold text-[#003660]">{name}</p>
                    <p className="font-semibold text-[#003660]">{years}</p>
                    <p className="mt-6 font-semibold">Information om båten finns i denna text</p>
                    <p className="my-2">{description}</p>
                </div>
            </div>
        </>
    )
}

export default BoatCardLeft