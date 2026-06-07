import type { Boat } from "@/data/boats";

type BoatCardProps = {
    boat: Boat
}

const BoatCard = ({ boat }: BoatCardProps) => {

  return (
    <section className="flex flex-col w-full max-w-105 h-full px-5 py-3 md:py-5 bg-background rounded-sm">
        <h2 className="font-light w-full text-text-secondary text-xl lg:text-2xl">
            {boat.name}
        </h2>
        <p className="text-text-secondary/80 mb-3">
            {boat.type}
        </p>
        <div className="relative w-full overflow-hidden max-w-105 mb-3 rounded-sm">
            <img
                src={boat.image}
                alt={boat.name}
                className="w-full g-full object-cover rounded-sm"
            />
        </div>
        <p className="text-text-secondary mb-3">
            {boat.description}
        </p>
        <div className="border-t py-3 text-text-secondary/80">
            <p>
                <span>År:</span> {boat.facts.year}
            </p>
            <p>
                <span>Topphastighet:</span> {boat.facts.topSpeed}
            </p>
            <p>
                <span>Bredd:</span> {boat.facts.width}
            </p>
            <p>
                <span>Längd:</span> {boat.facts.length}
            </p>
        </div>
    </section>
  )
}

export default BoatCard