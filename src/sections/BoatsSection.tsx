'use client'

import { boats } from '@/data/boats'
import BoatCard from '@/components/ui/BoatCard'
import { motion } from 'motion/react'
import { fadeUpAnimation } from '@/utils/animation'
import { Sailboat } from 'lucide-react'
import { useTranslations } from 'next-intl'

const BoatsSection = () => {
  const t = useTranslations('ourBoats')
  return (
    <section className="flex flex-col w-full h-full items-center justify-center my-5 sm:my-10 md:my-20">
      <div className="flex flex-col w-full max-w-360 h-full pb-5 md:pb-10 rounded-sm text-text-primary bg-primary">
        <motion.div
          {...fadeUpAnimation}
          className="flex flex-col items-center justify-center mt-8 px-1 py-5 md:py-10 text-text-primary">
          <div className="flex items-center justify-center gap-2">
            <Sailboat className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 mb-5" />
            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl">
              {t('pageTitle')}
            </h1>
          </div>
        </motion.div>

        <motion.div 
          {...fadeUpAnimation}
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full text-text-primary px-4 md:px-6 lg:px-10 rounded-sm place-items-start justify-items-center gap-x-4 md:gap-x-6 lg:gap-x-6 gap-y-4 md:gap-y-6 lg:gap-y-10"
        >
          <ul>
            {boats.map((boat) => 
              <BoatCard
                key={boat.id}
                boat={boat}
              />
            )}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default BoatsSection