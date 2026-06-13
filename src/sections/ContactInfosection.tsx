'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Building, TreePine, Sailboat } from 'lucide-react';
import { fadeUpAnimation } from '@/utils/animation';
import LocationCard from '@/components/LocationCard';
import StaticMap from '@/components/Maps';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const ContactInfosection = () => {
  const t = useTranslations('contact');
  const tDetail = useTranslations('locationCardDetail');
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full max-w-360 h-full bg-primary text-text-primary my-10 md:my-20 px-4 md:px-6 lg:px-10 py-5 md:py-10  rounded-sm">
      <motion.h1
        {...fadeUpAnimation}
        className="text-center text-2xl sm:text-3xl lg:text-4xl text-text-primary px-1 py-5"
      >
        {t('title')}
      </motion.h1>

      <h2 className="text-center text-xl sm:text-2xl pb-5 font-light">
        {t('intro')}
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14">
        <div className="flex-1 min-h-0 space-y-6">
          <div className="bg-background rounded-sm p-4 md:p-5 lg:p-10 flex flex-col gap-5">
            <StaticMap src="/img/maps/hss-map.jpg" alt={t('mapAlt')} />
            <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2 text-text-secondary">
              <span
                className="
                w-7 h-7 flex items-center justify-center text-text-secondary
                transition-all duration-300
                group-hover:scale-110 group-hover:rotate-3 group-hover:animate-pulse
                group-hover:drop-shadow-[0_0_10px_rgba(30,144,255,0.6)]
              "
              >
                <MapPin className="w-6 h-6" />
              </span>
              {t('findUs')}
            </h3>
            <p className="sm:text-lg text-text-secondary">
              {t('locationDescription')}
            </p>
            <a
              href="https://maps.app.goo.gl/UnkzfdoqAYyeze3c8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-primary text-text-primary transition duration-400 hover:bg-secondary hover:text-primary inline-flex items-center gap-2 rounded-sm"
            >
              <Building className="w-6 h-6" /> {t('googleMapsLink')}
            </a>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="bg-background text-text-secondary rounded-sm p-4 md:p-5 lg:p-6">
            <h3 className="text-2xl font-semibold pb-5 flex items-center gap-2">
              <span aria-hidden="true">
                <Mail className="w-6 h-6" />
              </span>
              {t('emailTitle')}
            </h3>

            <p className="mb-2">
              <span className="font-medium">{t('generalLabel')}: </span>
              <a href="mailto:info@hss-scout.org" className="underline">
                info@hss-scout.org
              </a>
            </p>

            <p className="mb-4">
              <span className="font-medium">{t('membersLabel')}: </span>
              <a href="mailto:register@hss-scout.org" className="underline">
                register@hss-scout.org
              </a>
            </p>

            <p className="mb-1">
              <span className="font-medium">{t('mysetBookingLabel')}: </span>
              <a href="mailto:myset.hss.scout@gmail.com" className="underline">
                myset.hss.scout@gmail.com
              </a>
            </p>
          </div>

          <p className="sm:text-lg pb-5 font-light">{t('facilitiesIntro')}</p>

          <LocationCard
            id="myset"
            onToggle={() => setOpenCard(openCard === 'myset' ? null : 'myset')}
            isOpen={openCard === 'myset'}
            image="/img/history/myset.png"
            title={tDetail('mysetTitle')}
            icon={<TreePine className="w-6 h-6" />}
            description={tDetail('mysetDescription')}
            extra={tDetail('mysetExtra')}
            mapLink="https://maps.app.goo.gl/NrhJRgKg1e3bMs7m6"
          />

          <LocationCard
            id="ruffen"
            isOpen={openCard === 'ruffen'}
            onToggle={() =>
              setOpenCard(openCard === 'ruffen' ? null : 'ruffen')
            }
            image="/img/contact/ruffen.webp"
            title={tDetail('ruffenTitle')}
            icon={<Sailboat className="w-6 h-6" />}
            description={tDetail('ruffenDescription')}
            extra={tDetail('ruffenExtra')}
            mapLink="https://maps.app.goo.gl/UnkzfdoqAYyeze3c8"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfosection;
