import type { Boat } from "@/data/boats";
import Image from 'next/image';
import { useTranslations } from "next-intl";

type BoatCardProps = {
    boat: Boat
}

const BoatCard = ({ boat }: BoatCardProps) => {
  const t = useTranslations('ourBoats')
  const boatKey = `boats.${boat.id}` as const
  return (
    <li className="flex flex-col w-full max-w-105 h-full px-5 py-3 md:py-5 bg-background rounded-sm">
      <h2 className="font-light w-full text-text-secondary text-xl lg:text-2xl">
        {boat.name}
      </h2>
      <p className="text-text-secondary/80 mb-3">
        {boat.type}
      </p>
      <div className="relative w-full overflow-hidden max-w-105 mb-3 rounded-sm">
        <Image
          src={boat.image}
          alt={boat.name}
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <p className="text-text-secondary mb-3">
      {t(`${boatKey}.description`)}
      </p>
      <div className="border-t py-3 text-text-secondary/80">
        <p>
          <span>{t('year')}</span> {t(`${boatKey}.year`)}
        </p>
        <p>
          <span>{t('speed')}</span> {t(`${boatKey}.speed`)}
        </p>
        <p>
          <span>{t('width')}</span>{boat.width}
        </p>
        <p>
          <span>{t('length')}</span>{boat.length}
        </p>
      </div>
    </li>
  )
}

export default BoatCard